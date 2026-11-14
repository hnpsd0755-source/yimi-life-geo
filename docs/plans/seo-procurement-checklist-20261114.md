# YimiLife 核心页面 SEO 与采购内容改造清单

日期：2026-11-14。基线：`d38b77e`，现行网站为 `docs/design/website-templates-20260910/` 下的静态 Demo。此清单用于确认内容和实施顺序，不代表页面已经修改或获准正式上线。

目标是让海外医疗品牌、经销商和 OEM/ODM 买家快速找到产品、判断供应商资格并提交有效项目需求。优先完善已有核心页面，再扩展内容。以下英文 Title、H1、Description 均为拟稿；关键词是按采购意图整理的候选词，没有搜索量或竞争度数据背书。

## 1 优先级与执行顺序

| 优先级 | 定义 | 工作包 |
| --- | --- | --- |
| P0 | 正式站开放索引或对外获客前完成 | 全站基础设置；首页定位；血氧与血压计选型；OEM/ODM 服务边界；真实 Contact 接收；所有已发布事实核对 |
| P1 | 核心路径完整后优先优化 | 产品总览、About、制造质量页的采购信息；主推型号独立内容；真实资料下载和选型 FAQ |
| P2 | 资料充分后逐步开展 | PulseMatrix 技术详情；穿戴、雾化、体温产品内容；专业文章与真实新闻 |

建议批次：A 全站基础字段与首页 → B 血氧/血压计与型号内容 → C OEM/ODM/Contact 询盘闭环 → D 产品总览/公司/制造证据 → E 有资料支持的新产品与文章。正式发布前所有 P0 应验收完成；P1 页上现存错误事实、无效链接或缺失语言处理仍属于 P0。

## 2 全站共用上线清单

| 项目 | 修改内容 | 前置资料或决定 | 验收条件 |
| --- | --- | --- | --- |
| 正式域名与主入口 P0 | 确定正式域名、主机版本和首页；评审切换器不作为官网主入口；统一 canonical 与内部链接 | 用户确认正式域名及访问权限，不默认使用 yimilife.com | 每个公开页面返回预期状态；首页无需评审工具栏；无跨版本链接混用 |
| 页面身份 P0 | 每页独立 Title、Description、语义明确的 H1；英文公开页面设 `lang="en"`；清理“模板”、中文占位及内部提示 | 最终英文内容、品类英文名称 | 七个已抽查核心页目前都缺 Description/canonical/JSON-LD；实施后逐页检查，不仅检查首页 |
| 抓取与索引 P0 | 正式环境配置 robots.txt、sitemap；同时检查 HTML meta robots 和 Vercel 的 X-Robots-Tag；只在正式验收后开放索引 | 正式站与评审站边界 | Sitemap 只列规范、可索引、有效内容 URL；不包含评审说明、切换器、空模板；评审站继续 noindex |
| 型号与嵌入内容 P0 | 给需要被搜索发现的型号提供普通 `a href` 链接及稳定内容地址；核查脚本渲染；OEM 核心采购文字应能从主页面取得 | 型号级 URL 策略，是否继续静态或迁移 Next.js 另行确认 | 直接访问型号地址可读照片/规格；Title/H1 对应型号；OEM 主页面有可读服务摘要及正常询盘入口 |
| 结构化数据 P1 | Organization 使用核实主体；Product 的 manufacturer 指向该主体；BreadcrumbList 对应实际层级 | D01、D02；真实产品数据 | 标记与可见内容一致；不编价格、评分、库存、认证或客户案例；区分 schema 合法与 Google 富结果资格 |
| 语言与路由 P0 | 当前先完成英文版；多语言仅在有真实译文后配置独立 URL/hreflang；是否修改 .html 路径在路由规划时决定 | 最终路由及语言范围 | 不以去除 .html 作为排名保证；路径变更配映射、重定向和回归检查；不批量制造薄内容页 |
| 性能与可用性 P0 | 检查移动端主要路径、图片尺寸/压缩、加载稳定性、键盘操作及错误状态 | 测试设备与区域 | 保留性能实测记录；不要将静态导出成功当成性能通过或收录保证 |
| 询盘与衡量 P0 | 真实服务端接收、存储、通知、防刷、失败重试；上线时配置 Search Console 和分析事件；按适用要求处理隐私/同意 | D07、D08，服务及账号选择 | 真实端到端测试；后端确认成功才记有效提交；不向分析平台发送姓名、邮箱、附件正文等个人信息 |

无需为了这些任务预先安装 next-sitemap、特定表单工具或 UI 库。静态站也可以实现基础 SEO；技术栈迁移不是本清单的默认前置工作。

## 3 首页 P0

当前文件：`home.html`。采购问题：这是什么厂家，是否做我的产品，如何开始合作？主词候选：medical device OEM ODM manufacturer。

- **Title**：Medical Device OEM & ODM Manufacturer | YimiLife
- **H1**：Medical Device OEM & ODM Manufacturer
- **副标题**：Built around your brand. 保留为品牌表达，不需要删除。
- **Description**：Explore YimiLife pulse oximeters, blood pressure monitors and OEM/ODM capabilities. Discuss product requirements with our development and manufacturing team.
- **内容修改**：首屏明确海外品牌、经销商和 OEM/ODM 客户定位；五大品类入口后用简短文字连接研发、制造、合作流程；每个模块回答一个采购问题。保留现有区块顺序和已批准照片。演示 OEM 图继续明确标识，不能配未核实项目结果；正式站采用演示说明或真实案例，移除括号占位。
- **所需资料**：D01 公司公开身份；D03 可公开资质范围；D06 真实项目摘要，若没有则保留“定制示例”身份；首页组合图只在有更合适真实素材时替换。
- **CTA/内链**：Explore products → 产品总览；Discuss your project → Contact；研发 → About 的 research 区块；制造 → 现有制造页。
- **验收**：首次访问能理解身份、产品和下一步；无未经证据支持的认证数量、厂房面积或性能承诺；标题与首屏语义一致。

## 4 血氧仪品类 P0

当前文件：`pulse.html`、`pulse.js`。采购问题：指夹还是手持，型号区别是什么，如何询价？主词候选：pulse oximeter manufacturer；子主题 fingertip / handheld pulse oximeter OEM。

- **Title**：Pulse Oximeter Manufacturer for OEM & ODM | YimiLife
- **H1**：Pulse Oximeters for OEM & ODM Projects
- **Description**：Compare YimiLife fingertip and handheld pulse oximeters by display, configuration and specifications. Select a model to discuss your OEM/ODM project.
- **内容修改**：保留六系列、14 个公开指夹型号和两款手持型号；增加简短选型说明，解释显示、连接、适用人群和探头差异。参数继续保留准确度区间、测试条件和电池条件；不加无关 Accessories 区块。系列首型号自动展示保持不变。
- **搜索内容**：现在型号通过按钮选择、`?model=` 保留状态；补可抓取的型号链接。优先给主推型号提供独立内容身份，不为 14 个型号复制同一段文案。型号是否独立收录按差异内容决定。
- **所需资料**：D02 型号级英文数据表/说明书和版次；D03 型号—市场—证据对应表；D04 真实可提供的定制与样品选项。沿用 10 月已确认图集，不重新要求 YM401/YM501 照片。
- **CTA/内链**：型号询盘预填到 Contact；可用资料真实下载；OEM/ODM；PulseMatrix 仅在详情完成后链接。
- **验收**：六系列和型号深链接正确；照片、规格、URL、询盘上下文一致；平台能力不自动归因到所有型号；不恢复已撤下的 YM104/YM202/YM601，也不恢复隐藏的语音配置。

## 5 血压计品类 P0

当前文件：`bp.html`、`bp.js`。采购问题：显示、袖带和项目配置如何选择？主词候选：upper arm blood pressure monitor manufacturer。

- **Title**：Upper Arm Blood Pressure Monitor Manufacturer | YimiLife
- **H1**：Upper Arm Blood Pressure Monitors for OEM & ODM
- **Description**：Compare YimiLife upper arm blood pressure monitors, display options and cuff configurations. Review specifications and discuss your OEM/ODM requirements.
- **内容修改**：围绕 YP7101/YP7201/YP7202 展示已确认的 LED/LCD/背光差异；明确袖带选项、记忆、电源和规格条件。静态压力误差不能写成临床准确度结论。补“如何选显示和袖带”的短说明。
- **所需资料**：D02 各型号英文规格与可公开文件；D03 对应注册证据；D04 袖带、包装和定制可选项。现有 YP7101 实拍沿用，逐一核对其他型号是否确有匹配照片，不要求整套重拍。
- **CTA/内链**：Compare configurations；Request model information，保留型号预填；关联 OEM/ODM 和制造质量。
- **验收**：采购者能说清三个型号的区别；所有袖带及功能说明可追溯；型号内容和普通链接具备独立访问路径。

## 6 OEM 与 ODM P0

当前文件：`oem.html` 及嵌入的 `oem-source/index.html`。采购问题：能改什么、需要提供什么、怎样推进？主词候选：medical device OEM ODM services。

- **Title**：Medical Device OEM & ODM Services | YimiLife
- **H1**：OEM & ODM Services for Medical Device Brands
- **Description**：Discuss an OEM or ODM medical device project with YimiLife. Review customization scope, project stages and the information needed to assess your requirements.
- **内容修改**：分清现有型号定制和新产品/修改开发；用“客户输入—我们工作—交付物—确认节点”解释流程。明确哪些项目选项需评估，避免默认承诺全部型号都可改外壳、算法或无线功能。MOQ、样品周期、开发周期按项目条件表达；暂未确认不填数字。
- **搜索内容**：主页面目前主要通过 iframe 承载应用。先为主页面提供可读取的服务概要、步骤和询盘链接；正式实现时评估是否整合正文。保留定制演示交互，避免主页面与嵌入页竞争同一搜索意图。
- **所需资料**：D04 定制范围及业务条件矩阵；D05 实际项目流程和文档支持范围；D06 经允许公开的案例；D07 项目负责人/商务接收渠道。
- **CTA/内链**：Discuss an OEM project / Discuss an ODM project → 统一 Contact，保留路径预填；关联目标产品和质量页。
- **验收**：无需操作配置器也能理解服务范围；颜色/Logo 演示不被理解为实际报价或可量产承诺；询盘不与 Contact 分裂为两个无人接收的入口。

## 7 Contact P0

当前文件：`contact.html`、`batch2.js`。采购问题：如何提交需求，谁会跟进？搜索意图以品牌联系和转化承接为主，不强行争抢制造商关键词。

- **Title**：Contact YimiLife | Medical Device OEM & ODM Inquiries
- **H1**：Discuss Your Medical Device Project
- **Description**：Contact YimiLife about product selection and OEM/ODM requirements. Share your target market, preferred model and project details with our team.
- **内容修改**：保留简明表单；明确必填与可选项，允许“品类未确定”；型号从产品页带入并允许编辑。预计数量、目标市场和时间可选，避免过高填写门槛。展示真实公司、商务邮箱和可用联系方式。
- **功能条件**：演示成功状态必须替换为真实接收确认；附件为后续选项，先定格式、大小、访问权限和保留方式，不能默认接收敏感设计资料。附件若非一期必需，不阻塞基础询盘上线。
- **所需资料**：D07 收件邮箱、备份联系人、回复安排、对外地址；D08 记录保存、隐私说明、服务账号与统计权限。没有确认不得写“24 小时回复”。
- **CTA/内链**：Send project inquiry；可返回已选产品/型号；隐私说明链接。
- **验收**：提交→保存→通知→人工找到记录均通过；错误、重复提交及垃圾请求可处理；测试数据可识别；计数事件不包含个人信息。

## 8 产品总览 P1

当前文件：`products.html`。采购问题：我应进入哪个产品类别？主词候选：medical devices for OEM ODM。

- **Title**：Medical Devices for OEM & ODM Projects | YimiLife
- **H1**：Explore Our Medical Device Product Families
- **Description**：Browse YimiLife pulse oximeters, blood pressure monitors and other product families. Find the appropriate category for your OEM/ODM requirements.
- **内容修改**：每卡片简述产品形式及可比较维度；未完成品类不得使用看似可进入完整产品目录的无效 CTA。先保持五大品类和既定布局；确定品类英文名称，区分真实产品介绍与待补内容。卡片不重复堆厂家关键词。
- **所需资料**：D02/D09 品类范围、英文命名、各产品实际状态；缺失的雾化器/体温产品图。血氧、血压计照片与现有图片映射继续复用。
- **CTA/内链**：已有页使用 View models；未就绪品类可用明确的项目咨询入口，但不以“未来产品”概括全部新产品。
- **验收**：每张卡片都有与标签一致的实际目的地；总览负责分类，品类页负责选型，避免内容重复。

## 9 公司与研发 P1

当前文件：`about.html#research`。采购问题：公司是否真实，有什么研发职责和经验？主词候选：YimiLife manufacturer；medical device product development。

- **Title**：About YimiLife | Medical Device Development & Manufacturing
- **H1**：About YimiLife
- **Description**：Founded in Shenzhen in 2017, YimiLife develops and manufactures medical devices for overseas brands and distributors, with an in-house product development team.
- **内容修改**：使用已确认的 2017 年、深圳、内部团队负责全流程产品开发和精品性价比定位。按实际职责解释开发过程；照片配真实用途。证书墙仅为环境照片，专利需独立列名称、权利主体、状态与可公开证据。不新建独立研发导航。
- **所需资料**：D01 YimiLife 品牌与注册主体及照片原有 ESPOO 标识关系；D05 可公开研发职责和项目例子；D06 专利/开发案例授权。
- **CTA/内链**：现有产品→品类页；研发合作→OEM/ODM；质量证据→制造页。
- **验收**：品牌、公司主体、地址和图注一致；不重复索要已批准的公司/团队/研发照片；没有编造团队人数、履历或研发成果。

## 10 制造与质量 P1

当前文件：`manufacturing.html`。采购问题：能否核实制造现场和质量体系？主词候选：medical device manufacturing quality；ISO 13485 medical device manufacturer 仅在证书主体/范围核实后采用。

- **Title**：Medical Device Manufacturing & Quality | YimiLife
- **H1**：Medical Device Manufacturing & Quality
- **Description**：Explore YimiLife production and inspection activities, factory photographs and quality-management documentation for supplier evaluation.
- **内容修改**：保留已确认的“真实生产图＋ISO 13485 证书”的精简结构。证书旁补可读的持有人、标准版本、范围、有效期、文件入口；图片配环节与用途说明。只有需要时增加一小段供应商审核资料说明，不扩成大型质量宣传页。
- **所需资料**：D03 现有 ISO 13485 PDF 的有效期、主体/范围核对及与网站公司的对应关系；D05 真实检测流程与可公开资料。现有 PDF、生产实拍已具备，不重新申请同一素材。
- **边界**：不展示未经允许的 FDA 等机构标志；厂房面积暂不公开（旧参考出现相互矛盾数值）；月产能与认证型号数量需明确统计口径和适用范围后决定是否展示；Fluke 仅描述实际生产校准/检验用途，不作为临床验证或准确度保证。
- **CTA/内链**：View quality documentation；Discuss supplier requirements → Contact；关联 OEM/ODM。
- **验收**：照片、文字、证书可对应；PDF 可打开；ISO 体系证书不被解释为所有型号全部取得市场准入。

## 11 型号级内容 P1

当前入口：`pulse.html?model=YM212`、`bp.html?model=YP7202` 等。当前 `detail.html` 是体温产品占位模板，不代表这些型号已有独立详情页。

- **Title 模板**：`{Model} {Product Form} for OEM Projects | YimiLife`，如 `YM212 Fingertip Pulse Oximeter | YimiLife`。
- **H1 模板**：`{Model} {Product Form}`。
- **内容修改**：清晰图片区、适用产品形式、差异配置、带条件的参数表、型号级资料、可核实的市场文件和询盘。先选有真实差异和资料的型号，不自动生成大量近似页。
- **所需资料**：D02/D03/D04；商务确认优先推广型号，不能只因模型在列表第一位就定为主推。
- **技术决策**：独立收录型号需要自己的规范 URL、Title、Description 和内容；仅 UI 状态参数可规范到品类页，但不能一边希望型号独立收录，一边把所有型号 canonical 到品类页。方案实施前明确。
- **验收**：无需点击上级系列即可访问完整内容；内链可发现；图片/参数/询盘型号一致；无空页、重复页面或伪造 Offer/Review 数据。

## 12 条件性页面与后续内容 P2

以下标题是资料到位后的备选，不意味着立即发布或声明产品已上市。品类英文名实施前需确认。

| 页面与当前状态 | 建议 Title / H1 | 采购内容重点 | 必补资料与上线门槛 |
| --- | --- | --- | --- |
| 体温品类 `category.html` 与占位 `detail.html` | Title: Temperature Monitoring Devices \| YimiLife；H1: Temperature Monitoring Devices | 区分额温与体温贴，说明实际支持形式；快速温度计保留未来产品状态 | D09 正式名称、型号、用途、参数/照片/状态；空型号页暂不索引、不进 sitemap |
| 穿戴监测，当前总览卡片 | Title: Wearable Monitoring Devices \| YimiLife；H1: Wearable Monitoring Devices | 测量形式、佩戴场景、连接及项目集成边界 | D09 真实型号、指标、连接协议、数据处理、市场状态；不自行承诺连续监测能力或疾病用途 |
| 雾化器，当前总览卡片 | Title: Nebulizers for OEM Projects \| YimiLife；H1: Nebulizers | 压缩式与微网形式及实际配置区别 | D09 型号、关键性能条件、配件、说明书、图片、市场状态；不推断药物兼容性 |
| PulseMatrix，当前技术入口待完成 | Title: PulseMatrix™ Pulse Oximeter Signal Platform \| YimiLife；H1: PulseMatrix™ Signal Platform | 仅 PI 0.1% low-perfusion、motion conditions、across diverse skin pigmentation 三个已确认方向 | D10 测试方法/条件、适用型号、可公开结果及限制；保持血氧产品下属页面，不另建三个技术专题 |
| `blogs.html`，当前空目录 | Title: Medical Device OEM & ODM Insights \| YimiLife；H1: Medical Device OEM & ODM Insights | 优先选型比较、项目准备和供应商审核，而非宽泛健康科普 | 专业负责人审核、真实数据与出处、关联产品、更新时间；有实质文章后再进入 sitemap |
| `news.html`，当前空目录 | Title: YimiLife News & Company Updates；H1: YimiLife News | 实际展会、公司事件、已确认产品更新 | 时间、事件、图片授权和事实记录；没有真实新闻不为 SEO 编新闻 |

首批文章候选：Fingertip vs. Handheld Pulse Oximeters for OEM Projects；What to Prepare for a Medical Device OEM Inquiry；Choosing Display and Cuff Options for an Upper Arm Blood Pressure Monitor。每篇必须有实际采购问题、受限条件、可核实回答和相关询盘入口，不承诺排名或 AI 引用。

## 13 资料交付清单

“负责人”是建议的内部职能分工，不代表已指定具体人员。

| 编号 | 需要提供或确认 | 建议负责人 | 对应页面 | 未取得时如何处理 |
| --- | --- | --- | --- | --- |
| D01 | 公司公开中英文主体、品牌关系、对外地址、正式域名和联系人口径 | 公司负责人/商务 | 首页、About、页脚、Organization | 已确认品牌/年份可用；不猜域名、主体关系或面积 |
| D02 | 现行型号表、英文规格/说明书、版本日期、图片对应、对外下载许可 | 产品/研发 | 血氧、血压、型号页 | 复用已确认数据；缺失字段不补猜测 |
| D03 | 型号—目标市场—证件类型/编号—持有人—范围—有效期—公开许可对应表；现有 ISO PDF 核对 | 注册/质量 | 制造、产品、型号页 | 不给全部型号套统一认证；不将注册、列名、许可、批准混写 |
| D04 | 各产品实际可定制项、MOQ 条件、样品规则、周期区间及前提 | 商务＋研发/生产 | OEM、产品、Contact | 写按需求评估，不填未经批准数字 |
| D05 | 研发/生产/检测流程，可向采购方提供的审核与注册支持文件及边界 | 研发/质量/生产 | About、制造、OEM | 不宣称未核实 DHF、测试能力或监管结果 |
| D06 | 可公开案例、专利名称/主体/状态、客户引用或 Logo 的授权 | 商务/研发/负责人 | 首页、About、OEM | 使用标明身份的演示，不伪造客户或反馈 |
| D07 | 实际询盘接收邮箱、备份处理人、跟进安排、可公开联系方式 | 销售 | Contact、全站 CTA | 真实上线前必须完成；不把演示成功当作收件 |
| D08 | 表单/附件保存规则、隐私文本、统计账号权限、有效询盘定义 | 负责人/销售/开发 | Contact、全站统计 | 可先规划字段，不创建外部账号或传送真实资料 |
| D09 | 新品类正式名称、型号、用途、规格、图片、注册与供货状态 | 产品/注册/商务 | 体温、穿戴、雾化 | 保留适当介绍或隐藏空详情；不统一标为未来产品 |
| D10 | PulseMatrix 三方向对应说明、测试条件、适用型号、可公开证据与限制 | 研发/注册 | PulseMatrix | 只描述已确认方向，不使用零偏差、抗所有运动或保证准确等结论 |

优先交付 D01、D02、D03、D04、D07；已存于仓库的合格照片与证书不必重复提供，只需补缺口或核实对应关系。

## 14 执行与验收规则

1. 可先完成：Title/H1/Description 定稿、占位清单、候选搜索意图映射、内链与型号规范地址设计。上线域名、认证、业务条件相关项等用户资料确认后实施，不阻塞其他规划。
2. 文案按“客户问题—明确回答—证据或适用条件—下一步”编排；Google AI 搜索没有额外专用 schema 的要求，内容清晰也不构成被引用保证。[Google AI 搜索说明](https://developers.google.com/search/docs/appearance/ai-features)
3. Title 保持独特、简洁、描述性；不机械追求固定字数，不给全部页面堆同一组词。[Google 标题指南](https://developers.google.com/search/docs/appearance/title-link)
4. Google 可以渲染 JavaScript，但交互正常不等于型号已被发现或收录。检查普通链接、直接访问与渲染后的内容，必要时让关键内容在初始 HTML 中可读。[Google JavaScript SEO 指南](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
5. 每批改动验证桌面/手机、深链接、真实图片、导航和表单上下文；有代码变更才运行相应构建/语法检查。不能将测试过 Demo 等同于正式站获客验证。
6. 上线后按月复盘：非品牌目标搜索的展现/点击 → 产品访问 → 询盘开始 → 后端接收 → 人工认定有效询盘 → 合格商机。定义分母和去重规则；剔除测试/垃圾提交。不采用无样本依据的 1%–2% 通用承诺。

## 15 本轮交付范围

只新增本清单，不修改页面、导航、部署、索引设置或依赖。源文件核查覆盖 11 个 HTML 页的 Title/H1/H2/描述字段，并单独检查 OEM 的嵌入结构；没有进行关键词搜索量、Search Console、性能或转化数据审计。

当前页面通过 `node docs/design/website-templates-20260910/serve.cjs 18767` 预览，入口为 http://127.0.0.1:18767/?page=home 。本文为规划文件，无需新增页面预览。已有评审站保持现状。
