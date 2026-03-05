"use client"

import { Shield, Heart, Scale, Globe } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "حماية الكرامة الإنسانية",
    desc: "نسعى لحماية كرامة الإنسان خلال النزاعات المسلحة وتعزيز الوعي بحقوقه",
  },
  {
    icon: Heart,
    title: "القيم الإنسانية",
    desc: "تعزيز القيم الإنسانية والأخلاقية في المجتمع من خلال البرامج التدريبية",
  },
  {
    icon: Scale,
    title: "القانون الدولي",
    desc: "نشر ثقافة القانون الدولي الإنساني بين جميع شرائح المجتمع",
  },
  {
    icon: Globe,
    title: "شراكات إقليمية",
    desc: "التعاون مع المؤسسات واللجان الوطنية في دول مجلس التعاون الخليجي",
  },
]

const stats = [
  { value: "+40", label: "شراكة دولية" },
  { value: "6", label: "دول خليجية" },
  { value: "+15", label: "سنة خبرة" },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-(--teal)/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">من نحن</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            عن معهد <span className="text-primary">دونان</span> للاستشارات والتدريب
          </h2>
          <div className="section-divider mx-auto max-w-sm mb-6" />
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            مؤسسة رائدة في مجال القانون الدولي الإنساني تعمل على نشر الوعي وبناء القدرات في منطقة الخليج العربي
          </p>
        </div>

        {/* Director General's Message — full-width card */}
        <div id="director" className="mb-20 max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl border border-border/30 bg-card flex flex-col lg:flex-row"
            style={{ minHeight: "560px" }}
            dir="ltr"
          >
            {/* ── Left: Text Content ── */}
            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-between relative z-10">
              {/* Title */}
              <div>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-primary mb-2 text-right" dir="rtl">
                  كلمة المدير العام
                </h3>
                <p className="text-base lg:text-lg font-bold text-foreground mb-10">
                  Director General&apos;s <span className="text-primary">Message</span>
                </p>

                {/* Decorative quote + paragraph */}
                <div className="relative" dir="ltr">
                  <span
                    className="absolute top-0 left-0 text-8xl leading-none select-none font-serif text-primary/20"
                    aria-hidden="true"
                  >&ldquo;</span>
                  <p className="text-sm text-muted-foreground leading-loose pl-10" dir="rtl">
                    معهد دونان للاستشارات والتدريب يُعنى بنشر وتعزيز ثقافة القانون الدولي الإنساني، وترسيخ مبادئه في المجتمعات الخليجية، انطلاقًا من الإيمان العميق بضرورة حماية الإنسان وكرامته أثناء النزاعات المسلحة، خصوصًا في ظل ما شهدته منطقتنا العربية خلال العقود الأخيرة من نزاعات مسلحة وصراعات دامية خلّفت آثارًا إنسانية جسيمة، تمثلت في سقوط أعداد كبيرة من الضحايا الأبرياء من المدنيين، ولا سيما النساء والأطفال وكبار السن والعجزة، فضلًا عن حالات النزوح والتشريد والتجويع وانتهاك الكرامة الإنسانية.
                  </p>
                </div>
              </div>

              {/* Name + Stats at bottom */}
              <div className="mt-10" dir="rtl">
                <p className="text-base font-bold text-foreground">سالم بن أحمد بن عبدالله المسهلي</p>
                <p className="text-sm text-primary font-semibold mb-7">المدير العام</p>

                <div className="grid grid-cols-3 gap-3">
                  {stats.map((s, i) => (
                    <div key={i} className="glass-card rounded-xl p-4 text-center">
                      <div className="text-2xl font-extrabold text-primary mb-0.5 glow-text">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Director Photo ── */}
            <div className="relative lg:w-[46%] shrink-0" style={{ minHeight: "320px" }}>
              {/* Dark warm base */}
              <div className="absolute inset-0 bg-[#0e0a05]" />
              {/* Warm golden radial spotlight */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(150,90,10,0.55)_0%,rgba(90,50,5,0.35)_35%,rgba(30,18,3,0.25)_65%,transparent_85%)]" />
              {/* Fade toward text */}
              <div className="absolute inset-y-0 left-0 w-36 bg-linear-to-r from-card to-transparent z-10" />
              {/* Mobile bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card to-transparent z-10 lg:hidden" />

              <img
                src="/director.jpg"
                alt="سالم بن أحمد بن عبدالله المسهلي - المدير العام"
                className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
                onError={(e) => {
                  const target = e.currentTarget
                  target.parentElement!.style.display = "none"
                }}
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center group hover:scale-[1.04] hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
