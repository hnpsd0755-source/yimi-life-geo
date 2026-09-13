# YimiLife 当前 UI 模板预览

更新日期：2026-09-13。此目录是内部静态评审成果，正式 Next.js 页面尚未套用这些模板。

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
| index.html | 十个模板及桌面、平板、手机切换入口 |
| products.html | 产品总览：已获用户确认；血氧仪及血压计入口已接通 |
| pulse.html / pulse.css / pulse.js | 血氧仪品类：系列与型号选择、页内配置详情、型号询盘，本轮待评审 |
| bp.html / bp.css / bp.js | 臂式血压计：三个型号、八组规格与询盘预填；型号图片待对应，设计已获用户确认 |
| home.html / category.html / detail.html | 第一批：首页、体温计品类、型号详情；视觉方向已确认 |
| about.html | 公司与研发：公司简介、自主研发定位及本轮设计已获用户确认，真实资料后填 |
| manufacturing.html | 制造与质量：精简后的内容结构与 UI 已确认，照片与证书后填 |
| contact.html | Contact：现有布局已确认；“尚未确定品类”和可选附件按本次确认列入待实施，当前仍为旧表单演示 |
| oem.html / oem-source/ | OEM/ODM 本地页面与交互已获用户基本确认；真实询盘后台仍待接入 |
| styles.css / app.js / batch2.css / batch2.js | 共用样式和本地交互 |
| assets/ / homepage/ / oem-odm/ | 预览所需完整图片 |
| design-notes.html | 需求、竞品来源、视觉取舍与评审说明 |
| delivery-*.md | 各阶段实际验证记录；OEM 最新记录优先 |

内容定义见 [V1.2](../../plans/yimilife-site-content-and-ui-templates-v1.2.md)，跨电脑交接见 [2026-09-13 保存记录](../../workflows/handoff-20260913.md)；本次血压计新增内容见 [交付记录](delivery-bp-category.md)。

## 当前页面评审

2026-09-13 首页视觉精修已获确认：`home.html` 通过独立的 `home.css` 统一标题、产品图比例、卡片文字区、按钮与手机排版，其他页面尚未套用。已检查 360、390、768、1024、1280px，无横向溢出或失效图片。真实素材继续按清单补充，后续可将已确认的视觉标准逐页应用。

2026-09-13 全站检查：已确认的布局继续保留；额温枪、体温贴因资料不完整暂缓填入规格，快速温度计保留未来产品坑位。见 [待补素材清单](materials-checklist.md) 和 [全站检查记录](site-review-20260913.md)。以下较早记录保留作过程追踪。

用户已确认 About 及 Products 产品总览。本轮继续制作血氧仪品类页，入口为 http://127.0.0.1:8767/?page=pulse ，见 [制作与验证记录](delivery-pulse-category.md)。血氧仪本轮设计待评审；其他尚未制作的品类页继续排期。

2026-09-12 后续更新：用户补充成立年份 2017、内部团队负责所有产品全流程开发，以及“高性价比的精品”定位，并确认继续输出 About 设计。已更新首屏事实栏、公司简介、团队和研发区文字；真实照片、实验室用途和专利证据仍待补充。当前 About 内容设计见 [本轮交付记录](delivery-about-content.md)。以下保留此前其他页面评审状态。

2026-09-12：用户已确认 OEM/ODM 基本 OK，并确认精简后的 About 内容结构与 UI。用户随后确认制造与质量按精简版本推进，Contact 现有布局及推荐补充已获确认，当前进入 **Products 产品总览页** 评审。图片与真实资料继续后填。此次确认针对本地内容结构、UI 与演示交互，不代表真实后台、邮件或正式上线验收。

制造与质量页已按最新要求精简为工厂全景、生产照片与 ISO 13485:2016 证书展示，用户已要求进入下一项确认，本页内容结构与 UI 按当前版本确认。见 [调整与验证记录](delivery-manufacturing-refinement.md)。

## OEM 源码与构建

`oem-source/src/` 中保留原 React 组件、FAQ 和静态预览适配层，`skin.css` 为原 UI 覆盖，`inquiry.css` 为本次询盘控件样式。2026-09-12 起表单与 Logo 组件已按确认需求更新，不再与原站组件逐字节相同。原组件基线为 `735b4a87f12f20d9506e9e41723b4550fe0acd00`。

已带可运行的 `bundle.js` 和完整样式，单纯预览无需重新构建。修改 TSX 后，从仓库根目录执行：

```bash
npm ci
node docs/design/website-templates-20260910/oem-source/build.cjs
```

依赖沿用现有 Next.js 内置 webpack、React、TypeScript，未增加依赖。`original.css` 是原页面的样式快照；增加新 Tailwind 类时需要同步相应样式，正式集成时应使用官网自身构建流程。

旧 `build-preview.py` 和 `build-batch2.py` 只生成早期页面，会覆盖后续修改，因此没有纳入当前交接。现行 HTML/CSS/JS 与 OEM TSX 是继续编辑的依据。

## 待处理

- 产品总览已确认，血氧仪品类模板已制作、待用户评审；其余品类、PulseMatrix™ 及案例/资讯等模板继续补齐。
- Contact 的“尚未确定品类”和可选附件（沿用 ODM 格式与额度）已按本次确认列入待实施；真实接口需同时补充 Contact 类型和字段映射，当前尚未接通。
- 真实图片、型号、参数、证书、联系信息、案例和最终英文后填；占位数量不代表实际型号数量。
- OEM/ODM 已补齐 Logo 后补、姓名/公司/邮箱、ODM 可选附件和数量、提交状态及摘要；ODM 类别已增加 Nebulizer / Thermometer，仍为可调整的英文占位。见 [本轮交付记录](delivery-inquiry-preview.md)。
- 表单仍只在浏览器内演示，刷新后清空；未连接真实保存、上传或邮件服务。接口需求见 [询盘定义](../../plans/oem-odm-inquiry-interface-v1.md)。
- 当前页面尚未实施正式路由迁移或 SEO 更新。

## 产品总览评审

2026-09-12：新增 [Products 目录模板](products.html)，入口 http://127.0.0.1:8767/?page=products 。沿用五大品类与当前视觉；体温计进入现有模板，其余四类显示后续页面提示。记录见 [交付与评审说明](delivery-products-overview.md)。
