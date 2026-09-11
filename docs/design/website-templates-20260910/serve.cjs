// Local review server. Start from any directory; no dependencies required.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.argv[2] || 8767);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('Use a port number between 1 and 65535.');
  process.exit(1);
}
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8'};
const server = http.createServer(async (req, res) => {
  const finish = (status, text) => { res.writeHead(status, {'Content-Type':'text/plain; charset=utf-8'}); res.end(text); };
  if (!['GET', 'HEAD'].includes(req.method)) return finish(405, 'Read-only preview');
  let file;
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    file = path.resolve(root, '.' + pathname);
    const relative = path.relative(root, file);
    if (relative.startsWith('..') || path.isAbsolute(relative) || relative.includes(':')) return finish(403, 'Forbidden');
  } catch { return finish(400, 'Invalid path'); }
  try {
    if ((await fs.promises.stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const content = await fs.promises.readFile(file);
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store'});
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch { finish(404, 'Not found'); }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`YimiLife review: http://127.0.0.1:${port}/?page=oem`));
