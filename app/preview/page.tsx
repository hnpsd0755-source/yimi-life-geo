// 路径: app/preview/page.tsx
'use client';

import React from "react";

// ============================================================================
// 🛠️ 内置独立底层 UI 组件库 (零外部依赖，相对路径安全，确保 Vercel 打包绝不崩溃)
// ============================================================================
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`rounded-[32px] border border-slate-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ${className || ''}`} {...props} />
));
Card.displayName = 'Card';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 md:p-8 ${className || ''}`} {...props} />
));
CardContent.displayName = 'CardContent';

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`inline-flex items-center rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-700 backdrop-blur-sm ${className || ''}`} {...props} />
));
Badge.displayName = 'Badge';

const Button = React.forwardRef<HTMLButtonElement, any>(({ className, variant = "default", ...props }, ref) => {
  const variants: any = {
    default: "bg-gradient-to-b from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md shadow-blue-500/20 border border-blue-600",
    outline: "border-2 border-slate-200 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-700 hover:bg-blue-50/50",
  };
  return <button ref={ref} className={`inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 active:scale-[0.98] h-12 px-6 rounded-2xl ${variants[variant] || variants.default} ${className || ''}`} {...props} />;
});
Button.displayName = 'Button';

// 零依赖本地物理路由组件替代方案
const PreviewLink = ({ href, children, className, ...props }: any) => (
  <a href={href} className={className} {...props}>{children}</a>
);

// ============================================================================
// 🎨 纯原生 SVG 图标组件库 (代替 lucide-react，从底层避免 Module Not Found)
// ============================================================================
const IconActivity = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
const IconLayers = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-10 5 10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>;
const IconShieldCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const IconCpu = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9 y=9" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>;
const IconSliders = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>;
const IconLineChart = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;

// ============================================================================
// 📊 重构后的 100% 聚焦指夹血氧仪配置流数据
// ============================================================================
const fingertipTracks = [
  {
    title: "Economy Retail Series",
    desc: "High-brightness LED finger-clip devices engineered for budget-conscious retail pharmacies, high-volume insurance distributions, and general consumer promo lines.",
    tags: ["High-Contrast LED", "AAA Dry Battery", "Mass Production Elasticity", "Cost-Optimized MCU"],
    icon: IconActivity
  },
  {
    title: "Mainstream Professional Track",
    desc: "Dual-color HD OLED architectures designed for mainstream private label medical brands, Amazon FBA top-sellers, and mid-tier pharmaceutical gift lines.",
    tags: ["Dual-Color OLED", "Anti-Motion Filtering", "Multi-Direction UI Rotation", "Type-C Charging Optional"],
    icon: IconShieldCheck
  },
  {
    title: "Smart Connected HD Flagship",
    desc: "Advanced instrumentation featuring medical-grade 24-bit ADC chips and low-perfusion algorithms, targeted at remote patient monitoring (RPM) and telehealth ecosystem integration.",
    tags: ["24-bit High-Res ADC", "PulseMatrix™ DSP (PI≥0.1%)", "BLE 5.0 Smart Connectivity", "Full Dual-Platform SDK"],
    icon: IconCpu
  },
  {
    title: "Pediatric Adaptive Specialized",
    desc: "Child-oriented SpO2 devices calibrated with custom small finger cavity layouts, software calibration curves for low tissue density, and durable baby-friendly housings.",
    tags: ["Toddler Finger Cavity", "Pediatric Density Calibrated", "Rechargeable Circuit Option", "SME Custom Shell Logo"],
    icon: IconZap
  }
];

// 重新设计的非对称手持血氧仪双子星旗舰橱窗数据
const handheldSpotlights = [
  {
    model: "YM-H01 Clinical Portable Spot-Checker",
    subtitle: "Ergonomic Handheld Unit for On-The-Go Diagnostics",
    desc: "Specifically developed for clinic ward rounds, fast emergency transit triage, and pharmacy health-booth spot checking. Designed around an impact-resistant rugged chassis with hot-swappable external adult and pediatric clip probe sensors.",
    highlights: [
      "2.4-inch high-definition digital TFT interactive screen",
      "Support external medical-grade DB9 SpO2 interchangeable probes",
      "Instant spot-check logic with auto-save data table arrays",
      "Low power management running on standard alkaline or AA rechargeable units"
    ],
    market: "Target Client: Regional medical equipment distributors, primary care clinic procurement groups, and elder care service networks.",
    image: "https://c108.hongcdn.com/uploads/2507/04-%21j.webp"
  },
  {
    model: "YM-H02 Ward Continuous Patient Monitor",
    subtitle: "High-Capacity Base Station for Extended Physiological Tracking",
    desc: "Engineered for overnight respiratory sleep monitoring, step-down sub-acute care units, and clinical long-term observation. Features an integrated desktop horizontal enclosure with an automated hospital-grade multi-hazard acoustic alarm system.",
    highlights: [
      "3.5-inch oversized visual display showing real-time plethysmogram waves",
      "Internal high-capacity 4000mAh rechargeable lithium battery infrastructure",
      "Up to 360 hours of structural trend data storage playback and review",
      "Built-in advanced alarm logic (high/low SpO2 bounds, probe detachment hazard)"
    ],
    market: "Target Client: Telehealth system integrators, clinical ward equipment contractors, and premium private nursing home facilities.",
    image: "https://c108.hongcdn.com/uploads/2207/fda-oximeter-8-%21j.webp"
  }
];

// 指夹血氧仪纵深细分数据选型矩阵 (解决解构编译报错)
const fingertipSelectionMatrix = [
  { series: "Economy Retail Series", display: "High-Brightness LED", safeAfe: "Standard Integrated AFE", algorithm: "Standard Spot Tracking", wireless: "Not Supported", power: "2*AAA Dry Battery", market: "Low-Cost Pharmacy Retail / Bulk Giveaways" },
  { series: "Mainstream Professional", display: "Dual-Color HD OLED", safeAfe: "High-Sensitivity Photodiode", algorithm: "Anti-Motion Filtering", wireless: "Optional Custom BLE", power: "AAA Battery / Type-C Hybrid", market: "Amazon Top-Sellers / Private Label Brands" },
  { series: "Smart Connected HD", display: "0.96\" Color TFT UI", safeAfe: "24-bit High-Precision ADC", algorithm: "PulseMatrix™ DSP (PI ≥ 0.1%)", wireless: "BLE 5.0 Smart Standard", power: "Built-in Lithium / Type-C", market: "Telehealth Platforms / RPM Integrators" },
  { series: "Pediatric Adaptive", display: "Multi-Directional OLED", safeAfe: "Pediatric Fine-Tuned AFE", algorithm: "Child Tissue Calibration Curve", wireless: "Optional BLE", power: "Eco-Friendly Safe Charging", market: "Mother-Baby Brands / Pediatric Chains" },
  { series: "Geriatric Assist Line", display: "Oversized High-Contrast", safeAfe: "Industrial-Grade Stable AFE", algorithm: "Low-Noise Tracking + Smoothing", wireless: "Not Supported", power: "Standard AAA Dry Battery", market: "Senior Living Care / Visual Impairment Retail" }
];

// 核心硬核工程资产与信任度数据
const engineeringAssets = [
  { title: "3D Exploded Structural Asset", desc: "Reveals optical shielding cavity, medical silicone finger gasket layout, internal 24-bit ADC PCB component stack, and precise plastic tooling tolerance lines.", type: "Tooling & Hardware", status: "Asset Available" },
  { title: "ID/MD Design Blueprint Sketches", desc: "Exhibits physiological finger-clip tension spring compliance and advanced physical ambient light dampening path calculations.", type: "Industrial Design", status: "Asset Available" },
  { title: "Low-Perfusion Lab Simulation Waves", desc: "Displays real-time Fluke Index 2 physiological simulator data outputs, extraction logic down to PI=0.1%, and anti-motion DSP signal logic verification graphs.", type: "Algorithm & Testing", status: "Verification Sheet" }
];

const faqs = [
  {
    q: "How does YimiLife support custom pediatric pulse oximeter configurations for private label medical brands?",
    a: "Our pediatric line uses smaller physical finger cavities designed specifically for small child profiles. The integrated DSP logic utilizes dedicated pediatric algorithm curves to ensure reliability on thin tissue density. We support custom housing matching, tailored retail packaging box templates, and custom logo silkscreen placement for regional brand owners."
  },
  {
    q: "Can YimiLife provide Bluetooth pulse oximeter open-source data stream SDKs for telehealth platforms?",
    a: "Yes. To help SME medical brands and software systems minimize time-to-market, YimiLife provides robust Bluetooth Low Energy (BLE) pulse oximeter hardware setups along with comprehensive, clear data streaming documentation, payload definitions, and ready-to-test iOS/Android SDK wrappers."
  },
  {
    q: "What hardware component standards does YimiLife implement to achieve high accuracy at low perfusion?",
    a: "Every YimiLife pulse oximeter platform utilizes high-performance 24-bit analog-to-digital front-end integrated circuits (24-bit ADC) and custom-packaged optical diodes. Backed by our proprietary PulseMatrix™ digital signal processing platform, our devices maintain an authoritative medical-grade measurement threshold even under extreme low perfusion settings down to PI ≥ 0.1% and active patient movement noise."
  },
  {
    q: "Are YimiLife pulse oximeters structurally ready for flexible OEM/ODM product modifications?",
    a: "Absolutely. While strictly adhering to global quality guidelines including ISO 13485 and European CE MDR frameworks, we offer versatile product configuration flexibility for SME buyers. Our structural and electronic engineers can adjust hardware enclosures, firmware warning thresholds, power storage configurations, and cosmetic shell styling during initial project configuration."
  }
];

export default function ReengineeredOximeterPreviewPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-24 px-6 py-16 lg:px-8 lg:py-24 animate-in fade-in duration-500 bg-slate-50/30">
      
      {/* SECTION 1: Hero Banner */}
      <div className="grid gap-12 lg:grid-cols-2 items-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="space-y-6 max-w-xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-bold text-blue-400 tracking-wider uppercase">
            <span className="opacity-60">Products</span>
            <IconChevronRight />
            <span className="text-white">Pulse Oximeter Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Pulse Oximeter <br />Product Architecture
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            Explore YimiLife pulse oximeter categories. Engineered around two core operational disciplines: highly configurable fingertip retail lines and clinical-grade handheld continuous instrumentation frameworks.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('fingertip-section')?.scrollIntoView({ behavior: 'smooth' })} 
              className="inline-flex items-center justify-center font-bold tracking-wide transition-all h-12 px-8 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 shadow-md"
            >
              Fingertip Matrix
            </button>
            <button 
              onClick={() => document.getElementById('handheld-section')?.scrollIntoView({ behavior: 'smooth' })} 
              className="inline-flex items-center justify-center font-bold tracking-wide transition-all h-12 px-8 rounded-2xl border-2 border-slate-700 hover:border-white text-white hover:bg-white/10"
            >
              Handheld Spotlight
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:h-full min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl backdrop-blur-[1px] border border-white/5"></div>
          <img 
            src="https://c108.hongcdn.com/uploads/2205/professional-pulse-oximeter-facotry-4-%21j.webp" 
            alt="YimiLife oximeter instrumentation portfolio" 
            className="w-4/5 h-auto object-cover rounded-2xl mix-blend-lighten drop-shadow-2xl"
          />
        </div>
      </div>

      {/* SECTION 2: 指夹血氧仪配置矩阵 (等比 Grid) */}
      <div id="fingertip-section" className="space-y-10 scroll-mt-12">
        <div className="max-w-3xl space-y-3">
          <Badge className="bg-blue-50 text-blue-700 border-none font-bold shadow-sm">Configurable Category</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Fingertip Pulse Oximeter Tracks</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base">
            We don't just supply fixed SKUs. We offer structured technical tracks optimized for retail, e-commerce, and digital health. Select a baseline structure below to configure your custom project parameters.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {fingertipTracks.map((type, i) => (
            <Card key={i} className="flex flex-col h-full border-slate-100 hover:border-blue-200 hover:shadow-xl group">
              <CardContent className="p-6 space-y-5 flex-grow flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <type.icon />
                </div>
                <div className="space-y-2 flex-grow">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">{type.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{type.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1 pt-4 border-t border-slate-50">
                  {type.tags.map((tag, j) => (
                    <span key={j} className="inline-block bg-slate-50 border border-slate-100 text-slate-600 font-bold text-[10px] px-2 py-0.5 rounded-md tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION 3: 手持血氧仪双子星旗舰橱窗 (非对称宽幅单排展示) */}
      <div id="handheld-section" className="space-y-10 scroll-mt-12">
        <div className="max-w-3xl space-y-3">
          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 font-bold shadow-sm">Clinical Instruments</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Handheld Clinical Spotlight</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base">
            For professional clinical telemetry and long-term diagnostic tracking, we dedicate our specialized clinical-grade instrumentation platforms. Highly focused, robust engineering ready for international procurement.
          </p>
        </div>

        <div className="space-y-8">
          {handheldSpotlights.map((model, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[36px] overflow-hidden p-6 md:p-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center shadow-sm hover:shadow-md transition-all">
              <div className={`bg-slate-50 rounded-2xl p-6 flex justify-center items-center h-64 lg:h-80 border border-slate-100 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                <img src={model.image} alt={model.model} className="h-full w-auto object-cover rounded-xl mix-blend-multiply transition-transform hover:scale-105 duration-500" />
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">Model Showcase</span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{model.model}</h3>
                  <div className="text-sm font-bold text-slate-400 italic">{model.subtitle}</div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 font-medium">{model.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {model.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 text-blue-600 shrink-0"><IconCheckCircle /></div>
                      <span className="text-xs font-bold text-slate-700 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-50 text-xs font-semibold text-slate-400 leading-relaxed">
                  {model.market}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: 纵深细分——指夹血氧仪专属选型对比表 */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Fingertip Pulse Oximeter Selection Matrix</h2>
          <p className="text-sm text-slate-500 font-medium">
            Granular architectural matrix mapped by front-end integrated circuits, processing logic capability, and commercial placement targets.
          </p>
        </div>

        <div className="border-2 border-slate-100 rounded-[32px] overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="p-5">Series / Baselines</th>
                  <th className="p-5">Display Panel</th>
                  <th className="p-5">Analog Front-End (AFE)</th>
                  <th className="p-5">Algorithm Tier</th>
                  <th className="p-5">IoT Connectivity</th>
                  <th className="p-5">Power Circuit</th>
                  <th className="p-5">Target Market Placement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs md:text-sm font-medium text-slate-700">
                {fingertipSelectionMatrix.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-5 font-bold text-slate-900 bg-slate-50/30">{row.series}</td>
                    <td className="p-5 text-slate-600 font-semibold">{row.display}</td>
                    <td className="p-5 text-slate-500 text-xs italic">{row.safeAfe}</td>
                    <td className="p-5 font-bold text-blue-600">{row.algorithm}</td>
                    <td className="p-5 text-slate-600 text-xs font-bold">{row.wireless}</td>
                    <td className="p-5 text-slate-500 text-xs">{row.power}</td>
                    <td className="p-5 text-slate-600 text-xs font-bold whitespace-normal max-w-xs leading-normal">{row.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 5: 核心硬件与算法技术参数快照 */}
      <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
        <div className="space-y-4 relative z-10">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 font-bold">DSP Processing Core</Badge>
          <h2 className="text-2xl font-black text-white tracking-tight">Technical Implementation Snapshot</h2>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            YimiLife blood oxygen instrumentation platforms incorporate core clinical processing pipelines designed to isolate authentic physiological waves from kinetic motion artifacts.
          </p>
          <div className="p-5 bg-slate-950 border border-white/5 rounded-2xl shadow-inner">
            <div className="text-[10px] text-slate-500 font-black uppercase tracking-wider mb-1">Proprietary Architecture</div>
            <div className="text-base font-extrabold text-blue-400">PulseMatrix™ Signal Optimization Platform</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 relative z-10">
          {[
            "Medical-grade high-precision SpO2 & PR tracking calibration",
            "Advanced anti-motion filtering and adaptive ambient light reduction",
            "Low-perfusion digital signal processing accurate down to PI ≥ 0.1%",
            "Integrated low-noise 24-bit high-precision ADC instrumentation chips",
            "Dual-color LED, high-refresh OLED, and custom Color TFT screen modules",
            "Energy-efficient circuits supporting AAA battery or lithium power packs",
            "Open data transmission protocol wrapper SDKs for custom app ecosystems",
            "Configurable hardware audio alarm systems and wave display modes"
          ].map((param, k) => (
            <div key={k} className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-2xl border border-white/5 shadow-sm">
              <div className="mt-0.5 text-blue-400 shrink-0"><IconCheckCircle /></div>
              <span className="text-xs md:text-sm font-bold text-slate-300 leading-snug">{param}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6: 研发级工程资产橱窗 (B2B源头工厂信任钢印) */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <Badge className="bg-slate-100 text-slate-800 border-none font-bold">E-E-A-T Verification</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Product Engineering Assets & Gallery</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base">
            As an ISO 13485 certified source manufacturer, we own 100% of the underlying physical molds, hardware layouts, and signal processing firmware. Review our audit-ready engineering assets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {engineeringAssets.map((asset, idx) => (
            <Card key={idx} className="flex flex-col h-full bg-white border-2 border-slate-100 overflow-hidden">
              <div className="h-44 bg-slate-950 flex flex-col justify-between p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-40"></div>
                {/* 模拟工程图/波形网格底纹背景 */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/10 text-blue-300 px-2.5 py-1 rounded border border-white/10">{asset.type}</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                
                <div className="text-slate-500 font-mono text-[10px] tracking-widest relative z-10 uppercase">
                  [ Yimilife Tooling / R&D File_0{idx+1} ]
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-900 leading-snug">{asset.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{asset.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056 10.03 10.03 0 01-1.614 5.495A9.97 9.97 0 0110 18a9.97 9.97 0 01-6.22-7.505 10.03 10.03 0 01-1.614-5.496zM10 5a1 1 0 100-2 1 1 0 000 2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
                    {asset.status}
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-0.5 rounded uppercase">NDA Protected</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION 7: FAQ Matrix (针对采购真实意图的定向长尾拦截问答) */}
      <div className="space-y-8 bg-white border border-slate-100 shadow-xl rounded-[40px] p-8 md:p-16">
        <div className="space-y-2">
          <Badge className="bg-slate-100 text-slate-800 border-none font-bold">FAQ Reference</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            Sourcing Queries Answered for Private Label Projects
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Review detailed engineering replies concerning adaptive child logic setups, open-source Bluetooth streaming, and low-perfusion threshold metrics.
          </p>
        </div>

        <div className="grid gap-8 pt-6 border-t border-slate-100 md:grid-cols-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="space-y-3 bg-slate-50/50 rounded-3xl p-6 border border-slate-100/80">
              <h3 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                {faq.q}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8: Bottom CTA 底部转化层 */}
      <div className="bg-blue-600 rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-blue-600/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Need Pulse Oximeter Product Specifications <br className="hidden md:block"/> or Configuration Support?
          </h2>
          <p className="text-slate-100 font-medium text-sm md:text-base opacity-90">
            Connect directly with our engineering and project managers to discuss custom white-label modifications, low-MOQ trial distribution packages, or open-source SDK development.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <PreviewLink href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center font-black uppercase tracking-wider text-sm h-14 px-10 rounded-2xl bg-white text-blue-600 hover:bg-slate-100 shadow-2xl">
              Contact YimiLife
            </PreviewLink>
            <PreviewLink href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-sm h-14 px-10 rounded-2xl border-2 border-white/40 hover:border-white text-white hover:bg-white/10">
              Discuss Project Configuration <IconArrowRight />
            </PreviewLink>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center pt-8 border-t border-slate-100 text-xs font-bold text-slate-400 gap-4">
        <div>© {new Date().getFullYear()} Yimi Life Technology Co., Ltd. All engineering configuration rights reserved.</div>
      </div>

    </div>
  );
}