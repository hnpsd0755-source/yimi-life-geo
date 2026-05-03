import React, { useState, useEffect } from "react";

// --- 核心常量 ---
const COMPANY = {
  name: "Yimi Life",
  phone: "+86 0755 89369909",
  email: "linda@yimilife.com",
  address: "广东省深圳市坪山区龙田街道老坑社区青松西路56号友利通科技工业厂区C栋",
};

const HOME_METRICS = [
  ["0.1% PI", "低灌注算法能力", "核心事实以 HTML 文本直接呈现，便于客户与 AI 系统理解。"],
  ["F1–6", "全肤色监测公平性", "把肤色公平性放进首页主叙事，而不是隐藏在脚注里。"],
  ["ISO 13485:2016", "医疗制造实体", "品牌身份被定义为合规制造平台，而不是消费级卖家。"],
];

const HOME_STRATEGIC = [
  ["PulseMatrix™ 算法中枢", "以 0.1% PI、全肤色公平性、多维参数提取作为核心技术资产。"],
  ["合规医疗制造能力", "3,000平方米工厂，以标准化医疗级质量控制体系构成可靠的执行基础设施。"],
  ["端到端 B2B 项目交付", "从 ID 设计、PCBA、DHF 支持到全球准入对接，形成完整的医疗项目交付能力。"],
];

// --- 高清 SVG 图标库 (扩充了医疗与验证相关图标) ---
const Icons = {
  Activity: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  ShieldCheck: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  Factory: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  Cpu: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  CheckCircle: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
  ArrowRight: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>,
  ArrowLeft: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>,
  Menu: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>,
  X: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>,
  Download: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
  Settings: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
  Layers: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  Globe: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Users: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  Microscope: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  Mail: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  MapPin: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Phone: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
};

// --- 主页面框架 ---
export default function YimiMedicalHomepage() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const navLinks = [
    { id: "home", label: "首页" },
    { id: "tech", label: "技术平台" },
    { id: "products", label: "产品与应用" },
    { id: "oem", label: "OEM / ODM" },
    { id: "about", label: "关于我们" }
  ];

  const renderPageContent = () => {
    if (page === "home") return <HomeContent onNavigate={setPage} />;
    if (page === "tech") return <TechContent onNavigate={setPage} />;
    if (page === "products") return <ProductsContent onNavigate={setPage} />;
    if (page === "oem") return <OemContent onNavigate={setPage} />;
    if (page === "about") return <AboutContent onNavigate={setPage} />;
    return <PlaceholderContent pageName={navLinks.find(l => l.id === page)?.label || "页面"} />;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 导航栏 */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage("home")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-600/20">Y</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-slate-900">{COMPANY.name}</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase mt-1">PulseMatrix™</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => setPage(link.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${page === link.id ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setPage("oem")} 
              className="rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-600 shadow-md"
            >
              联系定制
            </button>
          </nav>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Icons.X className="h-6 w-6" /> : <Icons.Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl md:hidden">
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => { setPage(link.id); setMenuOpen(false); }} 
                  className="text-left text-sm font-bold text-slate-700 uppercase tracking-wider"
                >
                  {link.label}
                </button>
              ))}
              <button onClick={() => { setPage("oem"); setMenuOpen(false); }} className="text-left text-sm font-bold text-blue-600 uppercase tracking-wider">联系定制</button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24 md:pt-28">
        {renderPageContent()}
      </main>

      {/* 页脚 */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-6 lg:px-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">Y</div>
              <div className="text-xl font-black italic text-slate-900">{COMPANY.name}</div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              亿米生命 面向全球医疗品牌提供技术平台、OEM/ODM 开发与制造解决方案，覆盖院内监护、家庭诊断与穿戴监测等核心应用场景。
            </p>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">快速导航</div>
            <div className="space-y-3 text-sm text-slate-600 font-medium">
              {navLinks.map(link => (
                <div key={link.id} className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => setPage(link.id)}>{link.label}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">联系总部</div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><span className="text-blue-600">☎</span> {COMPANY.phone}</div>
              <div className="flex items-center gap-3"><span className="text-blue-600">✉</span> {COMPANY.email}</div>
              <div className="flex items-start gap-3 leading-relaxed"><span className="text-blue-600 mt-1">⚲</span> {COMPANY.address}</div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} 亿米生命. All Rights Reserved. | ISO 13485:2016 Certified B2B Manufacturer
        </div>
      </footer>
    </div>
  );
}

// --- 1. 首页 (HomeContent) ---
function HomeContent({ onNavigate }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="py-20 lg:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest">
              Vascular Hemodynamic Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-slate-900">
              不止于监测 <br />
              <span className="text-blue-600">定义临床智能。</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 max-w-lg">
              亿米生命专注于极端临床环境下的感知技术突破，为全球医疗品牌提供基于 <strong>PulseMatrix™</strong> 算法的底层技术支持与 B2B 制造全案。
            </p>
            <div className="flex gap-4">
              <button onClick={() => onNavigate("tech")} className="rounded-2xl bg-blue-600 px-8 py-4 text-xs font-black text-white uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
                技术白皮书
              </button>
              <button onClick={() => onNavigate("oem")} className="rounded-2xl bg-slate-100 px-8 py-4 text-xs font-black text-slate-900 uppercase tracking-widest hover:bg-slate-200 transition-all">
                OEM / ODM
              </button>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[3rem] aspect-square lg:aspect-auto lg:h-[600px] border border-slate-100 overflow-hidden relative shadow-2xl">
            <img src="https://c108.hongcdn.com/uploads/2205/professional-pulse-oximeter-facotry-4-%21j.webp" alt="Yimi Pulse Oximeter" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {HOME_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 tracking-tighter">{metric[0]}</div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">{metric[1]}</h4>
                <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-blue-200 pl-4">{metric[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">战略赋能体系</h2>
            <p className="text-slate-500 text-lg">构建从芯片级感知到千万级量产的护城河。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOME_STRATEGIC.map((strategy, idx) => {
              const icons = [Icons.Cpu, Icons.Factory, Icons.Activity];
              const IconComp = icons[idx];
              return (
                <div key={idx} className="group rounded-[2.5rem] bg-white border border-slate-200 p-10 hover:border-blue-600 hover:shadow-2xl transition-all cursor-pointer" onClick={() => onNavigate(idx === 0 ? "tech" : "oem")}>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComp className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-xl font-black text-slate-900">{strategy[0]}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 mb-8">{strategy[1]}</p>
                  <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    深入了解 <Icons.ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- 2. 技术平台 (TechContent) - 满血复活版 ---
function TechContent({ onNavigate }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* 核心理念 Hero */}
      <section className="py-20 lg:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="max-w-4xl">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-6">Technology Sovereignty</h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
            PulseMatrix™ <br /> 血管血流动力学智能平台。
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            我们不生产单纯的“测心率工具”。<strong>PulseMatrix™</strong> 是一套多维度的信号处理逻辑，它通过捕捉光波在微血管中的细微变化，实时解构出血氧、血压、血管硬化以及自主神经系统的深度信息。
          </p>
        </div>
      </section>

      {/* 两大底层硬核技术 (0.1% PI + 肤色公平性) */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* 0.1% PI 挑战 */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 text-[200px] font-black text-slate-800/50 pointer-events-none tracking-tighter leading-none select-none">
            0.1%
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <Icons.Activity className="w-3 h-3" /> Core Algorithm
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              攻克 0.1% PI <br />极限低灌注精度。
            </h3>
            <p className="text-slate-400 leading-relaxed mb-10 text-lg">
              在重症监护或极寒环境中，人体的末梢血液灌注率（PI）会急剧下降。传统医疗器械在 PI &lt; 0.3% 时读数开始大幅波动。
              我们通过自研的二阶自适应滤波与动态增益控制（AGC）技术，成功将精度下探至 0.1% PI。
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-slate-700/50 pt-8">
              <div>
                <div className="text-4xl font-black text-white mb-2">±2%</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">SpO2 临床精度</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-400 mb-2">0.1%</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">稳定测量的 PI 极限</div>
              </div>
            </div>
          </div>
          <div className="relative z-10 bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-inner">
             <div className="text-sm font-bold text-slate-300 mb-6 uppercase tracking-widest border-b border-slate-700 pb-4">Signal Integrity Test via Fluke Index 2</div>
             {/* 模拟的信号对比图表 */}
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-xs text-slate-400 mb-2 font-bold uppercase"><span className="text-rose-400">Industry Standard (0.3% PI Limit)</span> <span>Fails / Drops</span></div>
                   <div className="h-2 bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-rose-500 w-1/3"></div></div>
                </div>
                <div>
                   <div className="flex justify-between text-xs text-slate-400 mb-2 font-bold uppercase"><span className="text-blue-400">PulseMatrix™ (0.1% PI Stability)</span> <span>100% Reliable</span></div>
                   <div className="h-2 bg-slate-700 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-full relative"><div className="absolute right-0 top-0 bottom-0 w-10 bg-white/30 animate-pulse"></div></div></div>
                </div>
             </div>
          </div>
        </div>

        {/* Fitzpatrick 全肤色公平性 */}
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-3 gap-3">
                <div className="h-24 bg-[#FAD6BA] rounded-2xl shadow-inner border border-slate-200"></div>
                <div className="h-24 bg-[#E2B792] rounded-2xl shadow-inner border border-slate-200"></div>
                <div className="h-24 bg-[#C7936E] rounded-2xl shadow-inner border border-slate-200"></div>
                <div className="h-24 bg-[#A36D48] rounded-2xl shadow-inner border border-slate-200"></div>
                <div className="h-24 bg-[#76452B] rounded-2xl shadow-inner border border-slate-200 relative overflow-hidden"><div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center"><Icons.CheckCircle className="text-blue-600 w-6 h-6"/></div></div>
                <div className="h-24 bg-[#412110] rounded-2xl shadow-inner border border-slate-200 relative overflow-hidden"><div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center"><Icons.CheckCircle className="text-blue-600 w-6 h-6"/></div></div>
             </div>
             <div className="mt-6 flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <Icons.ShieldCheck className="w-8 h-8 text-emerald-500" />
                <div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Medical Equity Result</div>
                   <div className="text-sm font-bold text-slate-800">零统计学显著偏差 (p &lt; 0.05)</div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 border border-orange-200 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <Icons.Users className="w-3 h-3" /> Skin Tone Equity
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Fitzpatrick 1-6 <br />消除肤色测量偏见。
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              近年来，医学界广泛关注到传统血氧仪在深色肤色人群中会高估血氧水平。这不仅是技术缺陷，更是医疗公平性问题。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              PulseMatrix™ 建立了一个覆盖 <strong>Fitzpatrick 1-6 全肤色色谱</strong>的光学模型数据库。
              通过智能识别黑色素密度并动态补偿红光/红外光发射率，我们在最深肤色（Type 5-6）中依然保持了医疗级的一致性。
            </p>
          </div>
        </div>
      </section>

      {/* 专家验证闭环 (Expert Loop) - 核心 GEO 实战模块 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Expert-Led Validation Loop</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">从临床专家的痛点，<br/>到依米的验证闭环。</h3>
        </div>

        <div className="space-y-16 pl-6 md:pl-12 border-l-2 border-slate-200 relative">
          
          {/* 痛点闭环 1 */}
          <div className="relative">
            <div className="absolute -left-[27px] md:-left-[51px] top-0 w-12 h-12 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center font-black text-slate-400 shadow-sm">01</div>
            
            <div className="mb-8 pl-8 md:pl-12">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Expert Challenge / 专家挑战</div>
              <p className="text-xl text-slate-800 italic font-medium leading-relaxed max-w-3xl border-l-4 border-rose-400 pl-6 py-2 bg-slate-50 rounded-r-xl">
                "Inaccurate pulse oximetry readings during low perfusion states can lead to dangerous delays in recognizing hypoxia in ICU patients."
                <span className="block text-xs font-bold text-slate-500 mt-3 not-italic">— 引用自临床监测权威医学期刊 (Journal of Clinical Monitoring)</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 pl-8 md:pl-12">
               <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><Icons.Cpu className="w-4 h-4 text-blue-600" /></div>
                     <h4 className="font-black text-slate-900">亿米生命技术对策</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                     我们在 PulseMatrix™ 中重构了信噪比 (SNR) 提取逻辑。使用高频多点采样取代单点采样，并在固件底层植入了 <strong>动态阈值跟踪过滤网</strong>，有效放大了微弱的真实搏动信号并过滤了背景噪音。
                  </p>
               </div>
               <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem]">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><Icons.CheckCircle className="w-4 h-4 text-white" /></div>
                     <h4 className="font-black text-blue-900">闭环验证证据</h4>
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed font-bold mb-4">
                     实验室使用行业最高标准的 Fluke Index 2 医疗生理模拟器，将灌注指数调至极端的 0.1%。
                  </p>
                  <div className="inline-block px-4 py-2 bg-white rounded-lg text-blue-700 font-black text-sm shadow-sm border border-blue-100">
                     验证结果：SpO2 精度维持在 ±2% (70%-100% 区间)。
                  </div>
               </div>
            </div>
          </div>
          
        </div>
      </section>

      <div className="pt-10 flex justify-center border-t border-slate-100 max-w-7xl mx-auto">
         <button onClick={() => onNavigate("products")} className="rounded-2xl bg-slate-900 px-8 py-4 text-xs font-black text-white uppercase tracking-widest shadow-xl hover:bg-blue-600 transition-all flex items-center gap-2">
            查看搭载该技术的产品矩阵 <Icons.ArrowRight className="w-4 h-4" />
         </button>
      </div>
    </div>
  );
}

// --- 3. 产品矩阵 (ProductsContent) ---
function ProductsContent({ onNavigate }) {
  const productData = [
    {
      category: "Clinical Monitoring",
      name: "专业指夹式血氧仪",
      model: "YM-100 Series",
      desc: "专为医院病房与极端居家监控设计，在极低灌注环境下依然能提供医疗级的测量可靠性。已成为全球超过 50 个知名医疗品牌的贴牌首选。",
      img: "https://c108.hongcdn.com/uploads/2205/professional-pulse-oximeter-facotry-4-%21j.webp",
      specs: [
        { label: "核心算法", value: "PulseMatrix™ (支持 0.1% PI)" },
        { label: "SpO2 测量范围", value: "70% - 100% (精度 ±2%)" },
        { label: "肤色验证标准", value: "Fitzpatrick Type 1-6 (无偏差)" },
        { label: "供电类型", value: "2 x AAA / 锂电池选配" },
        { label: "合规准入", value: "支持 NMPA, FDA 510(k), MDR" }
      ]
    },
    {
      category: "Hospital & ICU",
      name: "手持式/台式监测仪",
      model: "YM-300 Series",
      desc: "针对需要连续高频采样的重症与术后监控场景。配备大容量内存与视觉/听觉双重报警系统，支持与院内中央监护系统（CMS）的无缝对接。",
      img: "https://c108.hongcdn.com/uploads/2507/04-%21j.webp",
      specs: [
        { label: "显示配置", value: "2.8\" / 3.5\" TFT 彩色大屏" },
        { label: "报警系统", value: "声光双重报警 (阈值可编程)" },
        { label: "数据存储", value: "长达 500 小时连续生理数据" },
        { label: "耐用性标准", value: "防跌落外壳，医疗级防液溅" },
        { label: "接口协议", value: "HL7 兼容 / 蓝牙 / USB 输出" }
      ]
    },
    {
      category: "Home Diagnostics",
      name: "临床级臂式血压计",
      model: "YM-BP Series",
      desc: "我们将 PulseMatrix™ 的核心降噪逻辑降维应用于 NIBP（无创血压）监测，极大提高了设备在心律不齐或轻微运动状态下的测量成功率与重复精度。",
      img: "https://c108.hongcdn.com/uploads/2205/09115040123-%21j.webp",
      specs: [
        { label: "测量方法", value: "示波法 (抗运动干扰优化)" },
        { label: "测量范围", value: "0 - 299 mmHg (静态精度 ±3 mmHg)" },
        { label: "适用臂围", value: "22cm - 42cm (自适应宽域袖带)" },
        { label: "心律异常", value: "支持 IHB (不规则心跳) 检测" },
        { label: "临床验证", value: "符合 ESH / BHS 认证标准" }
      ]
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <section className="bg-slate-900 pt-32 pb-24 px-4 md:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
            <Icons.Cpu className="w-3 h-3" /> Powered by PulseMatrix™
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter">
            临床级医疗传感器矩阵
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            从重症监护 (ICU) 到居家慢病管理，亿米生命 为全球医疗品牌提供经过严苛验证的 <strong>硬件产品线与核心模块 (PCBA)</strong> 解决方案。
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {productData.map((product, index) => (
          <article key={index} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all grid lg:grid-cols-12 gap-10 md:gap-14 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-8 relative group w-full aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute top-6 left-6 px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 z-10 shadow-sm">
                  {product.category}
                </div>
                <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">{product.name}</h2>
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">{product.model}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{product.desc}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="py-4 px-6 font-bold text-slate-900 w-1/3 border-r border-slate-200">关键技术参数</th>
                      <th className="py-4 px-6 font-bold text-slate-900">工程规格指标 (Specs)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {product.specs.map((spec, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-6 font-medium text-slate-500 border-r border-slate-100 bg-slate-50/30">{spec.label}</td>
                        <td className="py-3 px-6 text-slate-900 font-bold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        ))}
      </section>
      <div className="py-10 pb-20 flex justify-center border-t border-slate-100 max-w-7xl mx-auto">
         <button onClick={() => onNavigate("oem")} className="text-blue-600 font-bold hover:underline flex items-center gap-2">前往【OEM/ODM】定制页面 <Icons.ArrowRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
}

// --- 4. 深度文案版块：OEM/ODM 定制与制造方案 (OemContent) ---
function OemContent({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(1);

  // 8步 B2B 制造演练流程
  const workflowSteps = [
    { id: 1, title: '战略需求与合规对接', desc: '在立项初期，我们的法规工程师与产品经理将与您共同探讨功能边界、精度要求，并锁定目标市场（如 NMPA/FDA/CE）的合规准入路径。' },
    { id: 2, title: '人体工学 ID 与光学仿真', desc: '不仅仅是外观设计。我们通过精密的光学结构仿真，确保血氧/血压传感器的探头在不同人群的佩戴形态下，均能保持完美的密封与透光率。' },
    { id: 3, title: 'PCBA 定制与算法植入', desc: '亿米生命自有硬件实验室将完成底层的电路布线（Layout），并将基于 PulseMatrix™ 平台的深度定制算法固化入芯。' },
    { id: 4, title: '建立设计历史文件 (DHF)', desc: '完全遵照 ISO 13485:2016 标准，从第一行代码到第一个打样，我们为您建立完整的 DHF（Design History File），为后续医疗注册铺平道路。' },
    { id: 5, title: '临床模拟器与极限测试', desc: '原型机产出后，将直接进入亿米生命实验室。使用 Fluke Index 2 等顶级医疗模拟器进行 0.1% PI 低灌注挑战测试及运动抗干扰验证。' },
    { id: 6, title: '小批量试制 (Pilot Run)', desc: '在我们的标准化生产车间内启动 PP（产前试制）。验证模具的注塑精度、贴片一致性以及自动化组装流程的可行性。' },
    { id: 7, title: '100% 全自动出厂标定', desc: '我们拒绝抽检。每一台走下产线的 OEM 设备，都必须进入全自动光学校准站，进行一对一的参数回归与标定，确保临床一致性。' },
    { id: 8, title: '成品交付与合规移交', desc: '向您交付具备高质量一致性的成品批次，并同步移交用于医疗设备注册的完整测试报告与合规技术文档包。' }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

      {/* Hero 区域 */}
      <section className="bg-slate-900 pt-32 pb-24 px-4 md:px-6 lg:px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black uppercase tracking-widest mb-8">
              <Icons.Factory className="w-3 h-3 text-blue-400" /> End-to-End Medical Manufacturing
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              算法赋能，<br/>合规智造全案。
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              亿米生命在深圳拥有 <strong>3,000平方米</strong> 的现代化制造基地。我们将实验室中突破的底层算法，通过严苛的 <strong>ISO 13485:2016</strong> 医疗质量体系，1:1 完美复刻到数以百万计的量产设备中。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
               <div>
                  <div className="text-3xl font-black text-white mb-1">3000㎡</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">智造基地面积</div>
               </div>
               <div>
                  <div className="text-3xl font-black text-white mb-1">规范化</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">医疗生产车间</div>
               </div>
               <div className="col-span-2 md:col-span-1">
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">自动标定覆盖率</div>
               </div>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square bg-slate-800 rounded-[3rem] border border-slate-700 overflow-hidden shadow-2xl">
            <img src="https://c108.hongcdn.com/uploads/2602/04-%21p.webp" alt="Yimi Life Medical Factory" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
               <div className="flex gap-4">
                  <span className="px-3 py-1 bg-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">ISO 13485:2016</span>
                  <span className="px-3 py-1 bg-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-widest">FDA Registered</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作模式矩阵 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">灵活的 B2B 战略交付模式</h2>
          <p className="text-slate-500 text-lg">从底层算法赋能到整机出厂，我们适应不同规模品牌的医疗硬件开发需求。</p>
        </div>

        <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm">
          <table className="w-full text-left bg-white min-w-[800px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="py-6 px-8 font-black text-slate-900 text-sm uppercase tracking-widest w-1/4">服务模式</th>
                <th className="py-6 px-8 font-black text-slate-900 text-sm uppercase tracking-widest w-1/4">技术输出形式</th>
                <th className="py-6 px-8 font-black text-slate-900 text-sm uppercase tracking-widest">适合对象与场景</th>
                <th className="py-6 px-8 font-black text-slate-900 text-sm uppercase tracking-widest">研发周期</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-6 px-8">
                  <div className="font-bold text-slate-900 text-base mb-1">PulseMatrix™ 模块定制</div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-widest">PCBA & Algorithm</div>
                </td>
                <td className="py-6 px-8 text-sm text-slate-600">输出已集成核心算法的血氧/血压 PCBA 主板，提供底层通讯协议接口。</td>
                <td className="py-6 px-8 text-sm text-slate-600">拥有自研外观 ID 与外壳模具，仅需医疗级感知内核赋能的科技或医疗品牌。</td>
                <td className="py-6 px-8 text-sm font-bold text-slate-900">较短 (3-6周)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-6 px-8">
                  <div className="font-bold text-slate-900 text-base mb-1">白标现货贴牌</div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-widest">White-label OEM</div>
                </td>
                <td className="py-6 px-8 text-sm text-slate-600">提供经过 FDA/CE 验证的现成医疗传感器成品，定制丝印 LOGO 与包装包材。</td>
                <td className="py-6 px-8 text-sm text-slate-600">希望快速扩充医疗器械产品线，要求即刻上市并具有高可靠性的经销商或品牌。</td>
                <td className="py-6 px-8 text-sm font-bold text-slate-900">极快 (1-3周)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-6 px-8">
                  <div className="font-bold text-slate-900 text-base mb-1">端到端全案开发</div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-widest">Turnkey ODM</div>
                </td>
                <td className="py-6 px-8 text-sm text-slate-600">从 0 到 1 的深度开发，涵盖工业设计、结构开模、算法调试、医疗合规测试及量产。</td>
                <td className="py-6 px-8 text-sm text-slate-600">具备独创概念的新锐医疗器械企业，需要具有强大医疗研发底蕴的代工母厂提供落地。</td>
                <td className="py-6 px-8 text-sm font-bold text-slate-900">视项目 (3-6个月)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 极简高科技：全息光束与焦点透镜时间轴 (Holographic Beam & Focal Lens Timeline) */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#080C16] rounded-[4rem] p-8 md:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* 深层发光氛围背景 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

          {/* 头部信息 */}
          <div className="text-center mb-16 relative z-10">
            <h4 className="text-3xl md:text-4xl font-black text-white mb-4">端到端 OEM / ODM 交付流程</h4>
            <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Precision Engineering Pipeline</p>
          </div>

          {/* 水平焦点滑动链条区 */}
          <div className="relative flex items-center mb-16">
            {/* 两侧边缘退晕遮罩 (营造无限延伸的纵深感) */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#080C16] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#080C16] to-transparent z-20 pointer-events-none"></div>

            {/* 悬浮控制按钮：上一步 */}
            <button
              onClick={() => setActiveStep(s => Math.max(1, s - 1))}
              disabled={activeStep === 1}
              className="absolute left-2 md:left-6 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-400 disabled:opacity-20 disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all backdrop-blur-md shadow-lg"
            >
              <Icons.ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* 居中视窗与动态链条 */}
            <div className="w-full h-[260px] relative overflow-hidden flex items-center">
              {/* 中心物理焦点光斑指示器 */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[280px] border-x border-white/5 bg-gradient-to-b from-blue-500/0 via-blue-500/5 to-blue-500/0 z-0 rounded-[2rem] pointer-events-none"></div>

              {/* 滑动轨道主体 */}
              <div
                className="absolute left-1/2 flex items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-10"
                style={{ transform: `translateX(calc(-${(activeStep - 1) * 280 + 140}px))` }}
              >
                {workflowSteps.map((item) => {
                  const isActive = activeStep === item.id;
                  const dist = Math.abs(activeStep - item.id);

                  // 距离动态样式计算 (打造视觉中心放大、两侧缩小的景深特效)
                  const scaleClass = isActive ? 'scale-110' : dist === 1 ? 'scale-90' : 'scale-75';
                  const opacityClass = isActive ? 'opacity-100' : dist === 1 ? 'opacity-40 hover:opacity-70' : 'opacity-10';
                  const textColor = isActive ? 'text-white' : 'text-slate-400';

                  return (
                    <div
                      key={item.id}
                      className={`w-[280px] flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-700 ${opacityClass}`}
                      onClick={() => setActiveStep(item.id)}
                    >
                      {/* 步骤名称区 (完美契合“被触发放大显现”的要求) */}
                      <div className={`text-center mb-8 transition-all duration-700 ${scaleClass}`}>
                        <div className={`text-[10px] font-black tracking-[0.2em] uppercase mb-2 ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                          Phase 0{item.id}
                        </div>
                        <div className={`text-2xl font-black whitespace-nowrap drop-shadow-lg ${textColor}`}>
                          {item.title}
                        </div>
                      </div>

                      {/* 纤细光束与透镜节点连线 */}
                      <div className="w-full flex items-center justify-center relative">
                        {/* 左侧光束 */}
                        <div className={`h-[2px] w-full ${activeStep > item.id ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-slate-800'}`}></div>

                        {/* 焦点透镜 (Lens Node) */}
                        <div className={`w-4 h-4 flex-shrink-0 rounded-full border-2 transition-all duration-500 flex items-center justify-center mx-2 relative
                          ${isActive ? 'border-blue-400 bg-[#080C16] shadow-[0_0_20px_rgba(96,165,250,0.8)] scale-150' :
                            activeStep > item.id ? 'border-blue-700 bg-blue-900' : 'border-slate-700 bg-[#080C16]'}`}
                        >
                          {isActive && (
                            <>
                              {/* 激活时的中心发光核心 */}
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
                              {/* 扩散波纹 */}
                              <div className="absolute inset-[-8px] rounded-full border border-blue-400/30 animate-ping"></div>
                            </>
                          )}
                          {activeStep > item.id && <div className="w-1 h-1 bg-blue-500 rounded-full"></div>}
                        </div>

                        {/* 右侧光束 */}
                        <div className={`h-[2px] w-full ${activeStep >= item.id + 1 ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-slate-800'}`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 悬浮控制按钮：下一步 */}
            <button
              onClick={() => setActiveStep(s => Math.min(workflowSteps.length, s + 1))}
              disabled={activeStep === workflowSteps.length}
              className="absolute right-2 md:right-6 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-400 disabled:opacity-20 disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-all backdrop-blur-md shadow-lg"
            >
              <Icons.ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* 底部解释性文字悬浮卡片 (Glassmorphism Holographic Panel) */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden min-h-[160px] flex flex-col justify-center shadow-2xl">
              {/* 顶部高光修饰线 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

              {/* React Key 触发动机淡入动画 */}
              <div key={activeStep} className="animate-in fade-in zoom-in-95 duration-500">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-400/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  <Icons.Cpu className="w-3 h-3" /> {workflowSteps[activeStep - 1].title} // 0{activeStep}
                </div>
                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed tracking-wide">
                  {workflowSteps[activeStep - 1].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 结构化：B2B 定制需求快速配置单 (Quick Configuration Form) */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto" id="oem-form">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                <Icons.ShieldCheck className="w-3 h-3" /> ISO 13485:2016 及 NDA 严格保密承诺
             </div>
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                B2B 快速需求配置单
             </h2>
             <p className="text-slate-500 leading-relaxed">
                只需 1 分钟勾选您的基础需求结构。我们的医疗产品经理与法规工程师团队将在 <strong>24小时内</strong> 为您提供专属的技术可行性与排产周期评估。
             </p>
          </div>

          <form className="max-w-5xl mx-auto">
            {/* 1. 基础联系信息 */}
            <div className="mb-10">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-200 pb-3 mb-6 flex items-center gap-2">
                   <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">1</span> 基础对接信息
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">公司名称 *</label>
                        <input type="text" placeholder="如：Global Health Inc." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">对接人姓名 / 职务 *</label>
                        <input type="text" placeholder="如：John Doe / 采购总监" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">企业邮箱 *</label>
                        <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">意向产品类目</label>
                        <select defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-700">
                            <option value="" disabled>请选择意向代工的产品...</option>
                            <option value="spo2">指夹 / 手持式血氧仪</option>
                            <option value="bp">临床级臂式血压计</option>
                            <option value="wearable">穿戴式睡眠监测设备</option>
                            <option value="temp">连续体温监测贴</option>
                            <option value="pcba">仅需 PulseMatrix™ 核心 PCBA</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 2. 结构化定制需求 (用户要求的 8 大维度矩阵) */}
            <div className="mb-10">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-200 pb-3 mb-6 flex items-center gap-2">
                   <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">2</span> 结构化定制参数表
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* 维度 1: 外观 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.Layers className="w-4 h-4 text-blue-600" /> 外观 (ID) 要求
                        </label>
                        <select defaultValue="standard" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="standard">使用亿米生命公模成品 (最快交付)</option>
                            <option value="color">亿米生命公模 + 定制产品颜色</option>
                            <option value="new_mold">提供全新 ID 图纸 / 需重新开模</option>
                        </select>
                    </div>

                    {/* 维度 2: 品牌 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.Activity className="w-4 h-4 text-blue-600" /> 品牌标识 (Logo)
                        </label>
                        <select defaultValue="neutral" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="neutral">中性无标出货 (White-label)</option>
                            <option value="silk">单色/多色丝印 Logo</option>
                            <option value="laser">镭雕加工 Logo</option>
                        </select>
                    </div>

                    {/* 维度 3: 包装 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.Factory className="w-4 h-4 text-blue-600" /> 包装盒规格
                        </label>
                        <select defaultValue="standard" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="standard">标准中性彩盒 (中/英文)</option>
                            <option value="custom">客制化品牌彩盒 (提供AI设计稿)</option>
                            <option value="eco">环保牛皮纸极简包装</option>
                        </select>
                    </div>

                    {/* 维度 4: 说明书 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.Download className="w-4 h-4 text-blue-600" /> 随附说明书
                        </label>
                        <select defaultValue="en" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="en">标准英文说明书</option>
                            <option value="cn_en">中英双语说明书</option>
                            <option value="multi">定制多国语言版本</option>
                        </select>
                    </div>

                    {/* 维度 5: 功能配置 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.Settings className="w-4 h-4 text-blue-600" /> 核心功能配置
                        </label>
                        <select defaultValue="basic" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="basic">基础临床测量 (无需蓝牙/存储)</option>
                            <option value="ble">加配 蓝牙/BLE 模块 (支持APP通讯)</option>
                            <option value="memory">加配 大容量本地数据存储</option>
                        </select>
                    </div>

                    {/* 维度 6: 资料支持 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.ShieldCheck className="w-4 h-4 text-blue-600" /> 准入资料与合规支持
                        </label>
                        <select defaultValue="ce_fda" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="ce_fda">需要提供 NMPA / MDR / FDA 现成注册证明</option>
                            <option value="dhf">需要协助提供 DHF 技术文档以供当地注册</option>
                            <option value="api">需要蓝牙通讯协议 (SDK/API) 对接文档</option>
                        </select>
                    </div>

                    {/* 维度 7: 配件组合 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.Cpu className="w-4 h-4 text-blue-600" /> 配件组合包
                        </label>
                        <select defaultValue="standard" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="standard">标配 (挂绳 + 电池/充电线)</option>
                            <option value="premium">高配 (增加收纳包、硅胶保护套)</option>
                            <option value="none">裸机交付 (不含任何配件及电池)</option>
                        </select>
                    </div>

                    {/* 维度 8: 量产交付 */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <label className="block text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Icons.CheckCircle className="w-4 h-4 text-blue-600" /> 预估首批交付量
                        </label>
                        <select defaultValue="sample" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-all text-slate-600">
                            <option value="sample">样品/试产评估阶段 (&lt; 1,000台)</option>
                            <option value="1k-5k">小批量上市 (1,000 - 5,000台)</option>
                            <option value="5k-10k">中等批量规模 (5,000 - 10,000台)</option>
                            <option value="10k+">超大规模量产 (&gt; 10,000台)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 3. 补充说明 (可选) */}
            <div className="mb-10">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">其他个性化补充要求 (选填)</label>
                <textarea rows="3" placeholder="例如：我们希望外壳采用抗菌材质，或指定使用某品牌的传感器芯片..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"></textarea>
            </div>

            {/* 提交按钮 */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-50 p-6 rounded-2xl border border-blue-100">
               <div className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900">100% 隐私保护声明：</span>
                  此表单内容将直接加密发送至亿米生命工程中心，未经您的书面许可，绝不用于任何公开展示或第三方分享。
               </div>
               <button type="button" className="shrink-0 w-full sm:w-auto bg-slate-900 text-white rounded-xl px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
                 提交工程评估申请
               </button>
            </div>

          </form>
          
        </div>
      </section>

    </div>
  );
}

// --- 5. 关于我们与合规 (AboutContent) - 满血复活新增版 ---
function AboutContent({ onNavigate }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* Hero 区域：企业全景 */}
      <section className="py-20 lg:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 h-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-slate-50 text-blue-600 font-black text-2xl tracking-tighter">
              YIMI
            </div>
            <img src="https://c108.hongcdn.com/uploads/2602/01-%21p.webp" alt="Yimi Life Exterior" className="rounded-3xl h-full w-full object-cover shadow-sm" />
            <div className="grid gap-4">
              <img src="https://c108.hongcdn.com/uploads/2602/02-%21p.webp" alt="Yimi Life Reception" className="rounded-3xl h-48 w-full object-cover shadow-sm" />
              <img src="https://c108.hongcdn.com/uploads/2602/04-%21p.webp" alt="Yimi Life Production Line" className="rounded-3xl h-48 w-full object-cover shadow-sm" />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Manufacturer Authority</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              亿米生命：<br/>当临床工程遇见<br/>大规模量产。
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              成立于 <strong>2017</strong> 年，总部位于深圳坪山区。亿米生命（Yimi Life）并不是一家传统的消费级电子工厂，而是一家以底层算法为驱动的<strong>医疗器械持证制造商</strong>。
            </p>
            <div className="grid sm:grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Icons.Factory className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 mb-1">3,000平方米基地</h5>
                  <p className="text-xs text-slate-500 font-medium">符合医疗器械生产质量管理规范的标准化制造车间。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Icons.ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h5 className="font-black text-slate-900 mb-1">ISO 13485:2016</h5>
                  <p className="text-xs text-slate-500 font-medium">全面贯彻国际医疗级质量管理标准。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全球合规与认证矩阵 (Certifications) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">全球医疗准入与合规资产</h2>
            <p className="text-slate-500 text-lg">我们所有的合规证书不仅是纸面文件，更是对每一位 OEM 客户的技术承诺，大大缩短了品牌方在当地的医疗注册周期。</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm text-center hover:shadow-xl hover:border-blue-400 transition-all group">
              <div className="h-24 mb-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-black text-2xl">NMPA</div>
              </div>
              <h4 className="font-black text-slate-900 mb-2">NMPA</h4>
              <p className="text-xs text-slate-500">National Medical Products Administration</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm text-center hover:shadow-xl hover:border-blue-400 transition-all group">
              <div className="h-24 mb-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <img src="https://c108.hongcdn.com/uploads/2205/07110546301-%21j.webp" alt="CE MDR" className="max-h-full object-contain" />
              </div>
              <h4 className="font-black text-slate-900 mb-2">MDR (CE)</h4>
              <p className="text-xs text-slate-500">EU Medical Device Regulation</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm text-center hover:shadow-xl hover:border-blue-400 transition-all group">
              <div className="h-24 mb-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <img src="https://c108.hongcdn.com/uploads/2205/07110522994-%21j.webp" alt="FDA 510(k)" className="max-h-full object-contain" />
              </div>
              <h4 className="font-black text-slate-900 mb-2">FDA 510(k)</h4>
              <p className="text-xs text-slate-500">U.S. Medical Device Registration</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm text-center hover:shadow-xl hover:border-blue-400 transition-all group">
              <div className="h-24 mb-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <img src="https://c108.hongcdn.com/uploads/2205/07110610472-%21j.webp" alt="ISO 13485:2016" className="max-h-full object-contain" />
              </div>
              <h4 className="font-black text-slate-900 mb-2">ISO 13485:2016</h4>
              <p className="text-xs text-slate-500">Quality Management System</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 (Contact) */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white grid lg:grid-cols-2 gap-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4">Global Headquarters</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              开启您的医疗级 <br /> OEM 定制之旅。
            </h3>
            <p className="text-slate-400 mb-12 text-lg">
              无论是获取搭载 PulseMatrix™ 技术的产品样机，还是探讨从 0 到 1 的深度技术定制，我们的全球工程与商务团队都在此为您服务。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Icons.Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Business Inquiry</div>
                  <div className="text-lg font-bold">{COMPANY.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Icons.Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Direct Line</div>
                  <div className="text-lg font-bold">{COMPANY.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Icons.MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Manufacturing Base</div>
                  <div className="text-sm font-bold leading-relaxed max-w-sm">{COMPANY.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-xl">
            <h4 className="text-2xl font-black mb-6">快速留言</h4>
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">您的称呼</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">企业邮箱</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">需求简述</label>
                <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all resize-none" placeholder="请简要描述您的代工或采购需求..."></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 text-white rounded-xl py-4 text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md">
                发送留言
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- 通用的占位子页面 (预备) ---
function PlaceholderContent({ pageName }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-32">
      <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-3xl flex items-center justify-center mb-10">
        <Icons.Activity className="w-10 h-10" />
      </div>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">{pageName} 板块</h2>
      <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-12">
        内容正在建设中。
      </p>
    </div>
  );
}
