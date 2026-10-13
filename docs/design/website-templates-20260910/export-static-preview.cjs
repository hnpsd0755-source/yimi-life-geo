const fs = require('node:fs');
const path = require('node:path');

const root = fs.realpathSync(__dirname);
const destination = path.resolve(root, 'dist');
const files = new Set();
const missing = new Set();
const runtimeExtensions = new Set(['.html', '.css', '.js']);
const excludedDirectories = new Set(['dist', '.git', '.vercel', 'node_modules']);
const privateExtensions = new Set(['.md', '.cjs', '.ts', '.tsx', '.rar', '.zip', '.xlsx', '.docx']);

function addReference(reference, source) {
  const value = reference.trim();
  if (!value || value.startsWith('#') || value.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(value)) return;
  if (/\s+\d+w(?:,|$)/.test(value)) {
    value.split(',').forEach(item => addReference(item.trim().split(/\s+/)[0], source));
    return;
  }
  const pathname = decodeURIComponent(value.split(/[?#]/)[0]);
  if (!pathname) return;
  let target = pathname.startsWith('/')
    ? path.resolve(root, '.' + pathname)
    : path.resolve(path.dirname(source), pathname);
  const relative = path.relative(root, target);
  if (relative === '..' || relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) return;
  if (privateExtensions.has(path.extname(target).toLowerCase())) return;
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
    missing.add(path.relative(root, source) + ': ' + value);
    return;
  }
  files.add(path.relative(root, target));
}

function collect(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const filename = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Unexpected symbolic link: ' + filename);
    if (entry.isDirectory()) {
      if (!excludedDirectories.has(entry.name)) collect(filename);
      continue;
    }
    const extension = path.extname(filename).toLowerCase();
    if (!runtimeExtensions.has(extension)) continue;
    files.add(path.relative(root, filename));
    const text = fs.readFileSync(filename, 'utf8');
    if (extension === '.html') {
      for (const match of text.matchAll(/\b(?:src|href|poster)\s*=\s*(["'])(.*?)\1/g)) addReference(match[2], filename);
      for (const match of text.matchAll(/\bsrcset\s*=\s*(["'])(.*?)\1/g)) {
        match[2].split(',').forEach(item => addReference(item.trim().split(/\s+/)[0], filename));
      }
    }
    for (const match of text.matchAll(/url\(["']?([^\)"']+)/g)) addReference(match[1], filename);
    for (const match of text.matchAll(/["'`]((?:\/?(?:assets|homepage|oem-odm)\/)[^"'`<>]+)["'`]/g)) {
      addReference(match[1], path.join(root, 'index.html'));
    }
  }
}

collect(root);
if (missing.size) throw new Error('Missing website resources:\n' + [...missing].join('\n'));

// Only the generated dist directory inside this static website may be replaced.
if (destination !== path.join(root, 'dist') || path.dirname(destination) !== root) throw new Error('Invalid output directory');
if (fs.existsSync(destination) && fs.lstatSync(destination).isSymbolicLink()) throw new Error('Output directory cannot be a symbolic link');
fs.rmSync(destination, {recursive: true, force: true});
fs.mkdirSync(destination, {recursive: true});
let bytes = 0;
for (const relative of [...files].sort()) {
  const source = path.join(root, relative);
  const output = path.join(destination, relative);
  fs.mkdirSync(path.dirname(output), {recursive: true});
  fs.copyFileSync(source, output);
  bytes += fs.statSync(output).size;
}
console.log(JSON.stringify({outputDirectory: destination, files: files.size, bytes}));
