# YimiLife 当前 UI 模板预览

保存日期：2026-09-11。此目录是内部静态评审成果，正式 Next.js 页面尚未套用这些模板。

## 打开预览

从仓库根目录执行，只需 Node.js，不必先安装项目依赖：

```bash
node docs/design/website-templates-20260910/serve.cjs
```

打开 http://127.0.0.1:8767/ 。OEM/ODM 直达 http://127.0.0.1:8767/?page=oem 。关闭终端后需要重新启动。端口被占用时，可在命令最后追加另一个端口，例如 `8768`。

不要直接双击 HTML；OEM 图片使用以 `/` 开头的地址，必须以此文件夹作为静态服务根目录。

## 当前文件

| 文件 | 用途与状态 |
| --- | --- |
| index.html | 七个模板及桌面、平板、手机切换入口 |
| home.html / category.html / detail.html | 第一批：首页、体温计品类、型号详情；视觉方向已确认 |
| about.html / manufacturing.html / contact.html | 第二批：公司与研发、制造与质量、Contact；已制作，待继续评审 |
| oem.html / oem-source/ | 最新 OEM/ODM：复用原官网内容与完整演示交互，只统一 UI 风格 |
| styles.css / app.js / batch2.css / batch2.js | 共用样式和本地交互 |
| assets/ / homepage/ / oem-odm/ | 预览所需完整图片 |
| design-notes.html | 需求、竞品来源、视觉取舍与评审说明 |
| delivery-*.md | 各阶段实际验证记录；OEM 最新记录优先 |

内容定义见 [V1.2](../../plans/yimilife-site-content-and-ui-templates-v1.2.md)，跨电脑交接见 [2026-09-11 记录](../../workflows/handoff-20260911.md)。

## OEM 源码与构建

`oem-source/src/` 中保留原 React 组件、FAQ 和静态预览适配层，`skin.css` 为 UI 覆盖。原组件基线为 `735b4a87f12f20d9506e9e41723b4550fe0acd00`。

已带可运行的 `bundle.js` 和完整样式，单纯预览无需重新构建。修改 TSX 后，从仓库根目录执行：

```bash
npm ci
node docs/design/website-templates-20260910/oem-source/build.cjs
```

依赖沿用现有 Next.js 内置 webpack、React、TypeScript，未增加依赖。`original.css` 是原页面的样式快照；增加新 Tailwind 类时需要同步相应样式，正式集成时应使用官网自身构建流程。

旧 `build-preview.py` 和 `build-batch2.py` 只生成早期页面，会覆盖后续修改，因此没有纳入当前交接。现行 HTML/CSS/JS 与 OEM TSX 是继续编辑的依据。

## 待处理

- PulseMatrix™、产品总览、其他品类及案例/资讯等剩余模板按内容定义继续补齐。
- 真实图片、型号、参数、证书、联系信息、案例和最终英文后填；占位数量不代表实际型号数量。
- OEM/ODM 仍是原版本地演示。内部 ODM 表单保留旧产品类别，雾化器与体温计尚未加入；Contact 模板已展示五类与新增子类联动。
- 表单尚未连接真实发送服务；不视为已经具备线上询盘功能。
- 当前页面尚未实施正式路由迁移或 SEO 更新。
