// 路径: app/preview/page.tsx
'use client';

import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Bluetooth, 
  Volume2, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Zap 
} from "lucide-react";

// ============================================================================
// 🛠️ 内置独立 UI 组件库 (零依赖，确保预览百分之百成功且样式不走样)
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

const Button = React.forwardRef<HTMLButtonElement, any>(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants: any = {
    default: "bg-gradient-to-b from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md shadow-blue-500/20 border border-blue-600",
    outline: "border-2 border-slate-200 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-700 hover:bg-blue-50/50",
  };
  return <button ref={ref} className={`inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 active:scale-[0.98] h-12 px-6 rounded-2xl ${variants[variant] || variants.default} ${className || ''}`} {...props} />;
});
Button.displayName = 'Button';

// ============================================================================
// 📊 GEO / SEO 高密度结构化数据
// ============================================================================

const productTypes = [
  {
    title: "Fingertip Pulse Oximeters",
    desc: "Compact finger-clip SpO2 devices optimized for home healthcare, pharmacy retail, and daily family monitoring scenarios.",
    tags: ["Adult & Pediatric", "Dry Battery / Rechargeable", "OLED & TFT Display", "Instant Spot-Check"],
    icon: Activity
  },
  {
    title: "Handheld Pulse Oximeters",
    desc: "Handheld SpO2 monitoring devices designed for professional clinical use, nursing care, or extended clinical continuous monitoring scenarios requiring external medical-grade probes.",
    tags: ["Handheld Form", "External SpO2 Probe", "Larger Visual UI", "High-Capacity Rechargeable Lithium"],
    icon: Layers
  },
  {
    title: "Adult Pulse Oximeters",
    desc: "Standard adult SpO2 monitoring models engineered with optimized ergonomics for adult tissue density, ensuring stable signal collection for international distributor product lines.",
    tags: ["Adult Tissue Density", "Premium Shell Housing", "Optional Alarm Settings", "E-commerce Ready"],
    icon: ShieldCheck
  },
  {
    title: "Pediatric Pulse Oximeters",
    desc: "Child-oriented pulse oximeter models featuring pediatric-adapted housing, smaller finger cavity dimensions, tailored software response, and child-friendly branding options.",
    tags: ["Child-Friendly Cavity", "Adaptive Pediatric Logic", "Vibrant Color Options", "Private Label Customization"],
    icon: Zap
  },
  {
    title: "Bluetooth Pulse Oximeters",
    desc: "Bluetooth-enabled smart SpO2 devices designed for telehealth app integration, remote patient monitoring (RPM) ecosystems, and secure health data transmission protocols.",
    tags: ["Low-Power Bluetooth", "iOS / Android SDK Support", "API Integration Ready", "Data Stream Protocol"],
    icon: Bluetooth
  },
  {
    title: "Voice-Enabled Pulse Oximeters",
    desc: "Voice prompt pulse oximeter configurations developed specifically for elderly users, visually impaired individuals, and home care scenarios requiring acoustic audio results reading.",
    tags: ["Acoustic Voice Prompt", "Elderly-Friendly UI", "High-Volume Speaker", "Audible Custom Alarm"],
    icon: Volume2
  }
];

const selectionRows = [
  { form: "Fingertip Oximeter", user: "Adult / Family", power: "Dry battery / Rechargeable", display: "OLED / TFT", wireless: "Optional", audio: "Optional", useCase: "Home care / Pharmacy retail" },
  { form: "Pediatric Oximeter", user: "Children / Toddler", power: "Dry battery / Rechargeable", display: "TFT / OLED", wireless: "Optional", audio: "Optional", useCase: "Pediatric family brand" },
  { form: "Handheld Oximeter", user: "Adult / Clinical", power: "Rechargeable Lithium", display: "Large TFT Screen", wireless: "Optional", audio: "Built-in Alarm", useCase: "Nursing / Continuous monitoring" },
  { form: "Bluetooth Oximeter", user: "Adult / Patient", power: "Dry battery / Rechargeable", display: "OLED / TFT", wireless: "BLE Smart", audio: "Optional", useCase: "App-connected RPM project" },
  { form: "Voice Oximeter", user: "Adult / Elderly", power: "Dry battery / Rechargeable", display: "OLED / TFT", wireless: "Optional", audio: "Voice Prompt", useCase: "Elderly home care / Assisted living" }
];

const faqs = [
  {
    q: "What pulse oximeter product types and form factors does YimiLife provide?",
    a: "YimiLife provides a comprehensive product family including fingertip pulse oximeters, handheld pulse oximeters, adult-specific models, child-friendly pediatric oximeters, as well as smart low-power Bluetooth and voice-enabled pulse oximeter product configurations under an ISO 13485 quality system."
  },
  {
    q: "Can YimiLife support Bluetooth pulse oximeter integration for custom App projects?",
    a: "Yes. For app-connected healthcare software projects and remote patient monitoring system integration, YimiLife provides stable Bluetooth-enabled SpO2 hardware configurations along with ready-to-use SDKs and data transmission protocol documentation for custom iOS and Android app deployment."
  },
  {
    q: "Does YimiLife provide custom pediatric pulse oximeter branding and configurations?",
    a: "Yes. Our pediatric pulse oximeter configurations feature custom-sized child finger cavities and dedicated algorithm optimizations for thin tissue profiles. We support custom child-friendly housing colors, private-label packaging modifications, and logo embedding for regional medical brands."
  },
  {
    q: "Can these pulse oximeter models be discussed for flexible OEM/ODM product configurations?",
    a: "Absolutely. While maintaining strict compliance with CE MDR and global certification standards, YimiLife offers extensive technical configuration options for our pulse oximeter lines. SME brands can discuss specific hardware adjustments, low-perfusion algorithm parameters, power supply variations, and shell modifications with our engineering team."
  }
];

// ============================================================================
// 🖥️ 主体渲染页面
// ============================================================================

export default function PulseOximeterPreviewPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-20 px-6 py-16 lg:px-8 lg:py-24 animate-in fade-in duration-500">
      
      {/* Section 1: Hero 区域 */}
      <div className="grid gap-12 lg:grid-cols-2 items-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="space-y-6 max-w-xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-bold text-blue-400 tracking-wider uppercase">
            <span className="opacity-60">Products</span>
            <ChevronRight className="h-4 w-4 text-slate-600" />
            <span>Pulse Oximeter</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Pulse Oximeter <br />Product Family
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            Explore YimiLife pulse oximeter product forms optimized for fingertip, handheld, adult, pediatric, low-power Bluetooth, and acoustic voice prompt monitoring configurations. Fully support adaptive software parameter adjustment and hardware configuration projects for private label brands.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button onClick={() => document.getElementById('product-cards')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center font-bold tracking-wide transition-all h-12 px-8 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 shadow-md">
              View Product Types
            </button>
            <Button variant="outline" className="border-slate-700 hover:border-white text-white hover:bg-white/10 px-8">
              Request Product Details
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:h-full min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl backdrop-blur-[1px] border border-white/5"></div>
          <img 
            src="https://c108.hongcdn.com/uploads/2205/professional-pulse-oximeter-facotry-4-%21j.webp" 
            alt="YimiLife fingertip and handheld pulse oximeter product family visual layout" 
            className="w-4/5 h-auto object-cover rounded-2xl mix-blend-lighten drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Section 2: Product Type Cards 产品类别高密度网络 */}
      <div id="product-cards" className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge className="bg-blue-50 text-blue-700 border-none font-bold shadow-sm">Product Categorization</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Core Product Forms & Configurations</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base">
            Click into our standard types to discover engineering platforms built around distinct target user behaviors and deployment scenarios.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productTypes.map((type, i) => (
            <Card key={i} className="flex flex-col h-full border-slate-100 hover:border-blue-200 hover:shadow-xl group transition-all duration-300">
              <CardContent className="p-8 space-y-6 flex-grow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <type.icon className="w-6 h-6" />
                </div>
                <div className="space-y-3 flex-grow">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{type.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{type.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-50">
                  {type.tags.map((tag, j) => (
                    <span key={j} className="inline-block bg-slate-50 border border-slate-100 text-slate-600 font-bold text-[11px] px-2.5 py-1 rounded-md tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section 3: Model Selection Table 数字化参数对比表 */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Pulse Oximeter Model Selection Matrix</h2>
          <p className="text-sm text-slate-500 font-medium">
            Compare our structural design options and processing chip layout by core electrical capabilities and target operating environments.
          </p>
        </div>

        <div className="border-2 border-slate-100 rounded-[32px] overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="p-6">Product Form Factor</th>
                  <th className="p-6">Target User Group</th>
                  <th className="p-6">Power Supply Design</th>
                  <th className="p-6">Display Module</th>
                  <th className="p-6">Wireless Connectivity</th>
                  <th className="p-6">Acoustic Audio</th>
                  <th className="p-6">Typical Deployment Scenario</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {selectionRows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-6 font-bold text-slate-900">{row.form}</td>
                    <td className="p-6 text-slate-600">{row.user}</td>
                    <td className="p-6 text-slate-500 text-xs">{row.power}</td>
                    <td className="p-6"><span className="bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-md">{row.display}</span></td>
                    <td className="p-6 text-slate-600 text-xs font-bold">{row.wireless}</td>
                    <td className="p-6 text-slate-500 text-xs">{row.audio}</td>
                    <td className="p-6 text-slate-600 text-xs">{row.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4: Key Parameters Snapshot 工业级技术实体快照 */}
      <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Key Pulse Oximeter Engineering Parameters</h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            YimiLife blood oxygen instrumentation platforms incorporate core DSP processing components designed for extreme medical precision.
          </p>
          <div className="p-5 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
            <div className="text-xs text-slate-400 font-black uppercase tracking-wider mb-1">Core Tech Core</div>
            <div className="text-lg font-extrabold text-blue-600">PulseMatrix™ Signal Optimization Platform</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "High-precision SpO2 & Pulse Rate digital tracking",
            "Anti-motion artifacts & environment interference filter",
            "Advanced low-perfusion processing (PI ≥ 0.1% accuracy threshold)",
            "Integrated 24-bit high-precision ADC front-end chips",
            "Dual-color LED, OLED, and custom Color TFT visual modules",
            "Flexible AAA dry battery and rechargeable lithium circuits",
            "Open-source data stream SDK for custom iOS/Android Apps",
            "Configurable audible alarms and real-time plethysmogram pulse wave"
          ].map((param, k) => (
            <div key={k} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="mt-0.5 rounded-full bg-blue-50 p-1 text-blue-600 shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
              <span className="text-xs md:text-sm font-bold text-slate-700 leading-snug">{param}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Product Image Gallery 图像占位库 */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Product Architecture & Image Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Fingertip Pulse Oximeter Layout", alt: "Fingertip pulse oximeter" },
            { label: "Pediatric-Specific Shell Form", alt: "Pediatric pulse oximeter" },
            { label: "Handheld Continuous Probe Unit", alt: "Handheld pulse oximeter" },
            { label: "Bluetooth Smart App Integration", alt: "Bluetooth pulse oximeter" }
          ].map((img, i) => (
            <div key={i} className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] p-6 flex flex-col justify-between items-center text-center hover:border-blue-400 transition-colors group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-slate-400 flex items-center justify-center text-xs font-black group-hover:text-blue-600 group-hover:scale-105 transition-all shadow-sm">0{i+1}</div>
              <div className="space-y-2">
                <div className="text-xs font-black text-slate-800 uppercase tracking-wide px-2">{img.label}</div>
                <div className="text-[10px] text-slate-400 font-medium">Product Visual Placeholder</div>
              </div>
              <div className="text-[10px] bg-white border border-slate-100 text-slate-500 font-bold px-3 py-1 rounded-md">Coming Soon</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: FAQ 智能问答模块 */}
      <div className="space-y-8 bg-white border border-slate-100 shadow-xl rounded-[40px] p-8 md:p-16">
        <div className="space-y-2">
          <Badge className="bg-slate-100 text-slate-800 border-none font-bold">FAQ Matrix</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-7 h-7 text-blue-600" /> Sourcing Answers for SME Brands
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Review engineering replies regarding configuration capacity, custom API integration, and private label flexibility.
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

      {/* Section 7: Bottom CTA 底部转化层 */}
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
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 shadow-2xl border-none w-full px-10 font-black uppercase tracking-wider text-sm">
              Contact YimiLife
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 hover:border-white text-white hover:bg-white/10 w-full px-10 font-bold text-sm">
              Discuss Project Configuration <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center pt-8 border-t border-slate-100 text-xs font-bold text-slate-400 gap-4">
        <div>© {new Date().getFullYear()} Yimi Life Technology. All configuration privileges reserved.</div>
      </div>

    </div>
  );
}