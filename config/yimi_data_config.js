/**
 * 亿米生命 (YimiLife) 全局内容数据配置文件
 * 维护说明：修改此文件中的文字、参数或图片链接，前端页面将自动更新。
 * 作用：实现了数据与视图解耦 (Data Decoupling)，方便非技术人员进行日常 GEO 优化与产品维护。
 */

// 1. 全局公司基础信息
export const COMPANY_INFO = {
  name: "亿米生命",
  phone: "+86 0755 89369909",
  email: "linda@yimilife.com",
  address: "广东省深圳市坪山区龙田街道老坑社区青松西路56号友利通科技工业厂区C栋",
  factorySize: "3,000㎡",
  certifications: ["ISO 13485:2016", "FDA 510(k)", "NMPA", "MDR (CE)"],
  copyright: "© 2026 亿米生命. All Rights Reserved. | ISO 13485:2016 Certified B2B Manufacturer"
};

// 2. 首页战略级数据概览
export const HOME_METRICS = [
  ["0.1% PI", "低灌注算法能力", "核心事实以 HTML 文本直接呈现，便于客户与 AI 系统理解。"],
  ["F1–6", "全肤色监测公平性", "把肤色公平性放进首页主叙事，而不是隐藏在脚注里。"],
  ["ISO 13485:2016", "医疗制造实体", "品牌身份被定义为合规制造平台，而不是消费级卖家。"],
];

export const HOME_STRATEGIC = [
  ["PulseMatrix™ 算法中枢", "以 0.1% PI、全肤色公平性、多维参数提取作为核心技术资产。"],
  ["合规医疗制造能力", "3,000㎡工厂，以标准化医疗器械质量控制体系构成可靠的执行基础设施。"],
  ["端到端 B2B 项目交付", "从 ID 设计、PCBA、DHF 支持到全球准入对接，形成完整的医疗项目交付能力。"],
];

// 3. 核心产品矩阵数据 (Products Catalog)
export const PRODUCTS_CATALOG = [
  {
    id: "ym-100-series",
    category: "Clinical Monitoring",
    name: "专业指夹式血氧仪",
    model: "YM-100 Series",
    desc: "面向医疗器械品牌与渠道项目的血氧监测产品平台，可围绕低灌注场景、质量控制和贴牌需求开展项目评估。",
    imageUrl: "https://c108.hongcdn.com/uploads/2205/professional-pulse-oximeter-facotry-4-%21j.webp",
    specs: [
      { label: "核心算法", value: "PulseMatrix™ (支持 0.1% PI)" },
      { label: "SpO2 测量范围", value: "70% - 100% (精度 ±2%)" },
      { label: "肤色验证方向", value: "Fitzpatrick Type 1-6 评估参考" },
      { label: "供电类型", value: "2 x AAA / 锂电池选配" },
      { label: "合规准入", value: "支持 NMPA, FDA 510(k), MDR" }
    ]
  },
  {
    id: "ym-300-series",
    category: "Hospital & ICU",
    name: "手持式/台式监测仪",
    model: "YM-300 Series",
    desc: "针对需要连续高频采样的重症与术后监控场景。配备大容量内存与视觉/听觉双重报警系统，支持与院内中央监护系统（CMS）的无缝对接。",
    imageUrl: "https://c108.hongcdn.com/uploads/2507/04-%21j.webp",
    specs: [
      { label: "显示配置", value: "2.8\" / 3.5\" TFT 彩色大屏" },
      { label: "报警系统", value: "声光双重报警 (阈值可编程)" },
      { label: "数据存储", value: "长达 500 小时连续生理数据" },
      { label: "耐用性方向", value: "防跌落外壳，防液溅设计讨论" },
      { label: "接口协议", value: "HL7 兼容 / 蓝牙 / USB 输出" }
    ]
  },
  {
    id: "ym-bp-series",
    category: "Home Diagnostics",
    name: "临床级臂式血压计",
    model: "YM-BP Series",
    desc: "血压监测项目可围绕抗干扰、测量重复性和平台配置进行工程讨论，具体性能以选定型号和验证范围为准。",
    imageUrl: "https://c108.hongcdn.com/uploads/2205/09115040123-%21j.webp",
    specs: [
      { label: "测量方法", value: "示波法 (抗运动干扰优化)" },
      { label: "测量范围", value: "0 - 299 mmHg (静态精度 ±3 mmHg)" },
      { label: "适用臂围", value: "22cm - 42cm (自适应宽域袖带)" },
      { label: "心律异常", value: "支持 IHB (不规则心跳) 检测" },
      { label: "临床验证", value: "符合 ESH / BHS 认证标准" }
    ]
  }
];

// 4. 端到端 OEM / ODM 交付流程步骤
export const OEM_WORKFLOW_STEPS = [
  { id: 1, title: '战略需求与合规对接', desc: '在立项初期，我们的法规工程师与产品经理将与您共同探讨功能边界、精度要求，并锁定目标市场（如 NMPA/FDA/CE）的合规准入路径。' },
  { id: 2, title: '人体工学 ID 与光学仿真', desc: '通过光学结构与佩戴形态讨论，帮助评估血氧/血压传感器在不同使用场景下的贴合、遮光与信号采集条件。' },
  { id: 3, title: 'PCBA 定制与算法植入', desc: '亿米生命自有硬件实验室将完成底层的电路布线（Layout），并将基于 PulseMatrix™ 平台的深度定制算法固化入芯。' },
  { id: 4, title: '建立设计历史文件 (DHF)', desc: '完全遵照 ISO 13485:2016 标准，从第一行代码到第一个打样，我们为您建立完整的 DHF（Design History File），为后续医疗注册铺平道路。' },
  { id: 5, title: '模拟器与验证测试', desc: '样机阶段可使用 Fluke Index 2 simulator 进行 0.1% PI 低灌注与运动干扰相关验证讨论，具体项目按型号和验证范围确认。' },
  { id: 6, title: '小批量试制 (Pilot Run)', desc: '在我们的标准化生产车间内启动 PP（产前试制）。验证模具的注塑精度、贴片一致性以及自动化组装流程的可行性。' },
  { id: 7, title: '100% 出厂标定', desc: '血氧 OEM 设备按定义流程进行 100% calibrated with Fluke Index 2 simulator，以支持生产一致性与批次质量控制。' },
  { id: 8, title: '成品交付与合规移交', desc: '向您交付具备高质量一致性的成品批次，并同步移交用于医疗设备注册的完整测试报告与合规技术文档包。' }
];

// 5. 专家闭环验证数据 (Expert Loop Validation)
export const EXPERT_LOOP_CASES = [
  {
    id: "low-perfusion",
    expertChallenge: "\"Inaccurate pulse oximetry readings during low perfusion states can lead to dangerous delays in recognizing hypoxia in ICU patients.\"",
    expertSource: "引用自临床监测权威医学期刊 (Journal of Clinical Monitoring)",
    solutionTitle: "亿米生命技术对策",
    solutionDesc: "我们在 PulseMatrix™ 中重构了信噪比 (SNR) 提取逻辑。使用高频多点采样取代单点采样，并在固件底层植入了动态阈值跟踪过滤网，有效放大了微弱的真实搏动信号并过滤了背景噪音。",
    validationResult: "SpO2 精度维持在 ±2% (70%-100% 区间)。"
  }
];
