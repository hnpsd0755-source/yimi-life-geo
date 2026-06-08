# YimiLife Daily Computer Handoff Workflow

这个工作流用于办公室电脑和家里电脑之间切换开发，目标是让代码、项目内 skills、工作记录都通过 GitHub 保持一致。

## 核心原则

GitHub 是唯一可信同步源：

- 网站代码跟随 GitHub。
- 项目内 skills 跟随 `.agents/skills`。
- 工作交接文档跟随 `docs/workflows`。
- 全局 Codex skills 只作为本机辅助，不作为项目唯一资料源。

## 每天开始办公

在当天使用的电脑上执行：

1. 打开项目目录。
2. 检查当前状态：
   - `git status --short`
   - `git branch --show-current`
   - `git remote -v`
3. 如果没有本地改动：
   - `git pull origin main`
4. 如果有本地改动：
   - 先确认这些改动是否需要保留。
   - 不要直接覆盖或 reset。
5. 根据需要运行：
   - `npm install`
   - `npm run dev`
6. 打开本地预览：
   - `http://localhost:3000`

## 每天结束办公

在离开当前电脑前执行：

1. 检查改动：
   - `git status --short`
   - `git diff --stat`
2. 记录当天完成内容和下一步。
3. 根据改动范围运行验证：
   - 小文案或样式修改：`npm run lint`
   - 结构性代码修改：`npm run build`
4. 需要同步到另一台电脑时，再提交并推送：
   - `git add <files>`
   - `git commit -m "Update YimiLife website handoff state"`
   - `git push origin main`

提交和推送必须由你明确确认后再执行。

## 切换到另一台电脑

告诉 Codex：

> 使用 YimiLife daily computer handoff，开始今天办公。

Codex 应该：

1. 检查 Git 状态。
2. 拉取 GitHub 最新代码。
3. 确认 `.agents/skills` 已同步。
4. 检查依赖是否需要更新。
5. 启动或确认本地预览。
6. 汇报当前分支、最新提交、预览地址和未解决问题。

## 推荐固定口令

开始办公：

> 使用 YimiLife daily computer handoff，开始今天办公。

结束办公：

> 使用 YimiLife daily computer handoff，结束今天工作，准备同步到另一台电脑。

只同步 skills：

> 检查 YimiLife 项目内 skills 是否已通过 GitHub 同步。

## 注意事项

- 不要把 `node_modules`、`.next`、`.env`、压缩包或临时文件提交到 GitHub。
- 不要在没有确认的情况下 commit、push 或部署。
- 如果两台电脑都有未提交改动，先让 Codex列出差异，再决定保留哪一边。

