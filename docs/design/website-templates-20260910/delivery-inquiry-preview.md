# OEM/ODM 本地询盘预览交付 · 2026-09-12

## 本轮目标与依据

用户确认六项推荐方案后，继续实现本地预览。依据 [询盘功能与接口定义 V1.0](../../plans/oem-odm-inquiry-interface-v1.md) 和既有需求/竞品研究，保持当前全站 UI 方向，不另做页面结构或视觉方案。

当前入口：[OEM/ODM 模板](http://127.0.0.1:8767/?page=oem)。正式 Next.js 页面未集成本轮预览。

## 已完成

- OEM：姓名、公司、业务邮箱必填；客户可上传一张 PNG/JPG/JPEG Logo（不超过 2 MiB），也可选择稍后提供。目标市场与预计数量保持选填。
- 配置器保留颜色、Logo 效果、六项位置/形状调整及其他 OEM 需求。原稿 File 与处理后的预览分别保留在内存；示例 Logo 明确标记为示例，不计为客户附件。
- Logo 增加格式、大小、解码失败提示及处理时取消。操作序号阻止旧图片在取消或替换后重新出现；处理完成前不能提交。
- ODM：增加联系人姓名、选填数量，以及可选项目附件；支持 PDF/DOCX/PNG/JPG/JPEG，最多 3 个、每个不超过 5 MiB。支持移除、数量提示和错误提示，新增无效文件不覆盖已有选择。
- ODM 品类补充 Nebulizer / Thermometer 占位；最终英文仍按内容定义确认。
- 两区演示提交中、失败、成功与请求摘要。提交期间禁用变更和重复提交，失败保留填写内容及附件；成功后可开始新请求。
- 内部评审工具可模拟一次失败，重试后模拟成功。DEMO 编号仅为本地示例。
- 附件使用统一英文选择按钮，避免系统控件的“未选择文件”与已选列表矛盾；文件大小按 bytes/KB/MB 显示。

## 修改文件

相对于本预览目录：

| 文件 | 内容 |
| --- | --- |
| oem-source/src/oem-odm-experience.tsx | OEM/ODM 字段、Logo 后补、摘要与两条提交流程 |
| oem-source/src/product-preview-demo/product-preview-demo.tsx | 原稿/示例区分，图片校验、取消与替换处理 |
| oem-source/src/inquiry-preview.tsx | 共用演示提交状态、反馈、附件选择 |
| oem-source/inquiry.css | 新控件与手机布局样式 |
| oem-source/index.html | 加载询盘样式 |
| oem-source/bundle.js | 重新生成可直接预览的脚本 |
| README.md / delivery-inquiry-preview.md | 当前状态和本轮交付记录 |

同时更新 docs/workflows/handoff-20260911.md。此前已保存的 docs/plans/oem-odm-inquiry-interface-v1.md 仍为功能定义。
未修改正式 app/、components/、依赖或部署配置；用户原有五项本地资料保留。

## 实际验证

- 静态 webpack 构建通过，最终 bundle 约 642 KiB。
- TypeScript：`node node_modules/typescript/bin/tsc --noEmit --incremental false` 通过。
- 对本轮三个 TSX 执行 ESLint `--no-ignore` 通过；最后附件按钮修正后重查共用组件通过。未修改现有 ESLint 排除配置。
- 第一组浏览器检查 32 项通过：必填/纯空格校验、Logo 后补、示例与客户原稿、颜色与位移摘要、图片损坏/超限、附件数量/格式/大小、失败保留与重试、重置、无附件提交等。
- 1440 / 768 / 390 / 360px 检查：内嵌页面与外层均无横向溢出；没有运行时错误，也没有发出上传/API/邮件请求。
- 截图检查后修正附件选择状态。最终补充 6 项通过：统一控件显示、附件移除、延迟解码后取消不复现、连续替换只保留新文件、390 / 1440px 布局。
- 截图实际查看了桌面 OEM 表单、手机 ODM 表单与最终附件控件。
- 本地入口返回 HTTP 200。本轮没有运行全站 Next.js build，验证范围为静态预览、类型兼容性和上述浏览器交互。

## 尚未实现及下一阶段

本轮没有真实请求接收、附件保存、邮件发送或管理后台；刷新后表单和文件选择清空。成功提示明确说明是本地演示，不代表询盘已保存。

下一阶段按已确认定义实现接收接口与存储、服务端附件校验、业务通知和客户回执、失败邮件重试及管理后台；服务器、存储、发信服务、业务邮箱和账号尚待配置。OEM 最终效果图的导出/上传也在真实接口联调阶段完成。

本轮未执行 git commit、git push 或部署，修改尚未同步 GitHub。
