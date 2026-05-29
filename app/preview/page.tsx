// 路径: app/products/pulse-oximeter/page.tsx
import React from "react";
import Link from "next/link";
import { Badge, Button, Card, CardContent } from "../../components";

// ============================================================================
// 📊 GEO / SEO Metadata 异步生成层 (供 Google 搜索结果与 AI 顶层索引直接抓取)
// ============================================================================
export const metadata = {
  title: "Pulse Oximeter Product Family | Fingertip, Handheld & Bluetooth SpO2 Models | YimiLife",
  description: "Explore YimiLife pulse oximeter product forms for adult, pediatric, and clinical settings. Powered by PulseMatrix™ signal optimization, 24-bit high-precision ADC chips, and anti-motion algorithms with a low-perfusion threshold down to PI ≥ 0.1% for global SME private label projects.",
};

// ============================================================================
// 🎨 纯原生无依赖 SVG 图标组件库 (彻底杜绝 Vercel 编译时的 Module Not Found 报错)
// ============================================================================
const IconActivity = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
const IconLayers = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-10 5 10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>;
const IconShieldCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconBluetooth = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 7 10 10-5 5V2l5 5L7 17"/></svg>;
const IconVolume2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;

export default function PulseOximeterFamilyPage() {
  
  // 结构化产品形态数据 (映射场景、算法弹性)
  const productTypes = [
    {
      title: "Fingertip Pulse Oximeters",
      desc: "Compact finger-clip SpO2 devices optimized for home healthcare, pharmacy retail networks, and general family physiological spot-checks.",
      tags: ["Adult & Pediatric Adaptive", "Dry Battery / Type-C Option", "OLED & Color TFT Display", "Instant Accurate Reading"],
      icon: IconActivity
    },
    {
      title: "Handheld Pulse Oximeters",
      desc: "Handheld SpO2 monitoring instrumentation engineered for nursing clinics, elder care homes, or clinical extended continuous monitoring requiring heavy-duty external probes.",
      tags: ["Handheld Form Factor", "External Interchangeable Probes", "Larger Screen Visual UI", "High-Capacity Li-ion Battery"],
      icon: IconLayers
    },
    {
      title: "Adult Pulse Oximeters",
      desc: "Standard adult respiratory monitoring devices calibrated with optimized shell housing and anti-slippage ergonomics tailored to global e-commerce and medical brand pipelines.",
      tags: ["Adult Tissue Calibrated", "Ergonomic Clip Cavity", "Configurable High/Low Alarms", "Amazon FBA Ready Package"],
      icon: IconShieldCheck
    },
    {
      title: "Pediatric Pulse Oximeters",
      desc: "Child-friendly pulse oximeter series utilizing fine-tuned child housing dimensions, specialized algorithm response curves for low tissue density, and vivid branding materials.",
      tags: ["Child-Friendly Finger Cavity", "Adaptive Pediatric Algorithm", "Vibrant Shell Colorways", "Custom Cartoon Branding"],
      icon: IconZap
    },
    {
      title: "Bluetooth Pulse Oximeters",
      desc: "Bluetooth Low Energy (BLE) enabled smart SpO2 devices developed to seamless interface with third-party remote patient monitoring (RPM) apps and broader telehealth infrastructure.",
      tags: ["Low-Power Bluetooth Smart", "iOS / Android SDK Provision", "API Stream Protocol Ready", "Secure Data Transmission"],
      icon: IconBluetooth
    },
    {
      title: "Voice-Enabled Pulse Oximeters",
      desc: "Acoustic audio prompt configurations built for geriatric care, visual impairment, or home-based independent living requiring clear spoken SpO2 and pulse rate metrics.",
      tags: ["Acoustic Voice Synthesis", "High-Volume HD Speaker", "Elderly-Friendly Oversized UI", "Audible Multi-Hazard Alarms"],
      icon: IconVolume2
    }
  ];

  // 选型比较矩阵数据对象模型 (避免数组拆分类型错误)
  const selectionRows = [
    { form: "Fingertip Oximeter", user: "Adult / Pediatric", power: "AAA Dry Battery / Type-C", display: "0.96\" OLED / TFT", wireless: "Optional BLE", audio: "Beep / Optional Voice", useCase: "Homecare / Retail Pharmacy" },
    { form: "Pediatric Oximeter", user: "Children / Toddler", power: "AAA Dry Battery / Rechargeable", display: "Color TFT Display", wireless: "Optional BLE", audio: "Custom Audio Alert", useCase: "Pediatric Clinic / Family Brand" },
    { form: "Handheld Oximeter", user: "Clinical / Continuous", power: "Rechargeable Lithium Cell", display: "2.8\" Large Visual UI", wireless: "Supported", audio: "Built-in System Alarm", useCase: "Clinical Ward / Patient Transit" },
    { form: "Bluetooth Oximeter", user: "RPM Patient / Tech-User", power: "AAA Dry Battery / Rechargeable", display: "OLED Dual-Color HD", wireless: "BLE Smart 5.0 Standard", audio: "Beep & App Notification", useCase: "Telehealth Platforms / RPM" },
    { form: "Voice Oximeter", user: "Geriatric / Assisted Care", power: "AAA Dry Battery Standard", display: "High-Contrast Display", wireless: "Optional", audio: "Full Acoustic Voice", useCase: "Senior Living / Homecare" }
  ];

  // 拦截海外采购在 AI 搜索中的长句 FAQ 矩阵
  const faqs = [
    {
      q: "How does YimiLife support custom pediatric pulse oximeter configurations for private label brands?",
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

  // ============================================================================
  // 🔥 GEO 超强秘密武器: 内嵌 JSON-LD 医疗设备产品模式窗 (AI 语义搜索识别直达通道)
  // ============================================================================
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalDevice",
        "@id": "https://yimi-life-geo.vercel.app/products/pulse-oximeter#product-family",
        "name": "Pulse Oximeter Product Family",
        "description": "Professional pulse oximeters incorporating fingertip, handheld, bluetooth, and pediatric configurations built on PulseMatrix technology.",
        "manufacturer": {
          "@type": "MedicalOrganization",
          "name": "Yimi Life Technology",
          "address": "Shenzhen, China"
        },
        "legalStatus": "ISO 13485, CE MDR, FDA 510k Compliant Process"
      },
      {
        "@type": "FAQPage",
        "@id": "https://yimi-life-geo.vercel.app/products/pulse-oximeter#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="mx-auto max-w-7xl space-y-20 px-6 py-16 lg:px-8 lg:py-24 animate-in fade-in duration-500">
      
      {/* 注入隐藏结构化脚本，供 Google 爬虫与 Gemini 直接识别底层实体结构 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Section 1: Hero Banner 区 (深度埋点基础实体) */}
      <div className="grid gap-12 lg:grid-cols-2 items-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="space-y-6 max-w-xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-bold text-blue-400 tracking-wider uppercase">
            <Link href="/products" className="hover:underline opacity-80">Products</Link>
            <IconChevronRight />
            <span className="text-white">Pulse Oximeter</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Pulse Oximeter <br />Product Family
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            Explore YimiLife pulse oximeter product forms optimized for fingertip, handheld, adult, pediatric, low-power Bluetooth, and acoustic voice prompt monitoring configurations. Fully support adaptive software parameter adjustment and hardware configuration projects for private label brands.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="#forms" className="inline-flex items-center justify-center font-bold tracking-wide transition-all h-12 px-8 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 shadow-md">
              View Product Types
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-slate-700 hover:border-white text-white hover:bg-white/10 px-8">Request Product Details</Button>
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:h-full min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl backdrop-blur-[1px] border border-white/5"></div>
          <img 
            src="https://c108.hongcdn.com/uploads/2205/professional-pulse-oximeter-facotry-4-%21j.webp" 
            alt="YimiLife fingertip and handheld pulse oximeter product family structural overview" 
            className="w-4/5 h-auto object-cover rounded-2xl mix-blend-lighten drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Section 2: Product Categorization Cards (建立分类场景实体) */}
      <div id="forms" className="space-y-10 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge className="bg-blue-50 text-blue-700 border-none font-bold shadow-sm">Product Categorization</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Core Product Forms & Configurations</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base">
            Discover precision hardware layouts designed around specific international distributor requirements and client deployment environments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productTypes.map((type, i) => (
            <Card key={i} className="flex flex-col h-full border-slate-100 hover:border-blue-200 hover:shadow-xl group transition-all duration-300">
              <CardContent className="p-8 space-y-6 flex-grow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <type.icon />
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

      {/* Section 3: Model Selection Table (数字化参数网格，GEO模型最爱) */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Pulse Oximeter Model Selection Matrix</h2>
          <p className="text-sm text-slate-500 font-medium">
            Compare architectural chassis variations and peripheral options by technical specification and target user demographics.
          </p>
        </div>

        <div className="border-2 border-slate-100 rounded-[32px] overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="p-6">Product Form</th>
                  <th className="p-6">Target Group</th>
                  <th className="p-6">Power Design</th>
                  <th className="p-6">Display Option</th>
                  <th className="p-6">Wireless BLE</th>
                  <th className="p-6">Audio Architecture</th>
                  <th className="p-6">Typical Use Case</th>
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

      {/* Section 4: Key Parameters Snapshot (技术信息增益值) */}
      <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Key Pulse Oximeter Engineering Parameters</h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            YimiLife instrumentation frameworks feature custom component pipelines engineered to handle high ambient light and tissue noise interference.
          </p>
          <div className="p-5 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
            <div className="text-xs text-slate-400 font-black uppercase tracking-wider mb-1">Core Algorithm Engine</div>
            <div className="text-lg font-extrabold text-blue-600">PulseMatrix™ Signal Optimization Platform</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
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
            <div key={k} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="mt-0.5 text-blue-600 shrink-0"><IconCheckCircle /></div>
              <span className="text-xs md:text-sm font-bold text-slate-700 leading-snug">{param}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Image Gallery (图像实体索引占位) */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Product Engineering Assets & Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Fingertip Oximeter Chassis Layout",
            "Pediatric Ergonomic Enclosure",
            "Handheld Continuous System",
            "BLE App Integrated Framework"
          ].map((label, i) => (
            <div key={i} className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] p-6 flex flex-col justify-between items-center text-center hover:border-blue-400 transition-colors group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-slate-400 flex items-center justify-center text-xs font-black group-hover:text-blue-600 group-hover:scale-105 transition-all shadow-sm">0{i+1}</div>
              <div className="space-y-2">
                <div className="text-xs font-black text-slate-800 uppercase tracking-wide px-2">{label}</div>
                <div className="text-[10px] text-slate-400 font-medium">Engineering Asset View</div>
              </div>
              <div className="text-[10px] bg-white border border-slate-100 text-slate-500 font-bold px-3 py-1 rounded-md">Coming Soon</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: FAQ Matrix (针对采购真实意图的定向拦截问答) */}
      <div className="space-y-8 bg-white border border-slate-100 shadow-xl rounded-[40px] p-8 md:p-16">
        <div className="space-y-2">
          <Badge className="bg-slate-100 text-slate-800 border-none font-bold">FAQ Reference</Badge>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            Sourcing Queries Answered for SME Brands
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Review detailed alignment documentation concerning custom data logic, product housing customization, and private labeling support.
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

      {/* Section 7: Bottom CTA Conversion Hub (轻量贴牌项目入口) */}
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
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 shadow-2xl border-none w-full px-10 font-black uppercase tracking-wider text-sm h-14">
                Contact YimiLife
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-white/40 hover:border-white text-white hover:bg-white/10 w-full px-10 font-bold text-sm h-14">
                Discuss Project Configuration <IconArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Internal Links Subsystem (内链网络闭环) */}
      <div className="flex flex-wrap justify-between items-center pt-8 border-t border-slate-100 text-xs font-bold text-slate-400 gap-4">
        <div>© {new Date().getFullYear()} Yimi Life Technology Co., Ltd. All engineering rights reserved.</div>
        <div className="flex gap-6">
          <Link href="/products" className="hover:text-blue-600 transition-colors">All Product Families</Link>
          <Link href="/products/wearable-monitoring" className="hover:text-blue-600 transition-colors">Wearable Monitoring Development</Link>
        </div>
      </div>

    </div>
  );
}