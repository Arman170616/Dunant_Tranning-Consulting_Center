"use client"

import { Shield, Heart, Scale, Globe, Quote, User } from "lucide-react"

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

        {/* Director General's Message */}
        <div id="director" className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-primary mb-3 tracking-[0.2em] uppercase">كلمة المدير العام</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Director General&apos;s <span className="text-primary">Message</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
            {/* Director Photo */}
            <div className="lg:col-span-2 flex flex-col items-center gap-5">
              <div className="relative group w-full max-w-sm mx-auto">
                <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-primary/20 to-(--teal)/20 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-secondary/40 border border-border/50">
                  <img
                    src="/images/director.jpg"
                    alt="سالم بن أحمد بن عبدالله المسهلي - المدير العام"
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = "none"
                      const fallback = target.nextElementSibling as HTMLElement | null
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  {/* Fallback avatar */}
                  <div
                    className="absolute inset-0 flex-col items-center justify-center bg-linear-to-br from-primary/10 to-(--teal)/10 hidden"
                    aria-hidden="true"
                  >
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 border border-primary/30 mb-4">
                      <User className="h-12 w-12 text-primary/60" />
                    </div>
                    <p className="text-sm text-muted-foreground">صورة المدير العام</p>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute bottom-0 right-0 left-0 h-1/3 bg-linear-to-t from-background/70 to-transparent" />
                </div>
              </div>

              {/* Director name card */}
              <div className="glass-card rounded-2xl px-6 py-4 text-center w-full max-w-sm mx-auto border-t-2 border-t-primary/30">
                <p className="text-base font-bold text-foreground mb-0.5">سالم بن أحمد بن عبدالله المسهلي</p>
                <p className="text-xs text-primary font-semibold">المدير العام — معهد دونان للاستشارات والتدريب</p>
              </div>
            </div>

            {/* Director Message Text */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-36 h-36 bg-linear-to-br from-primary/8 to-transparent rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-primary/5 to-transparent rounded-tl-full" />

                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/30 mb-5" />

                  <p className="text-sm text-muted-foreground leading-[2] mb-5">
                    معهد دونان للاستشارات والتدريب يُعنى بنشر وتعزيز ثقافة القانون الدولي الإنساني، وترسيخ مبادئه في المجتمعات الخليجية، انطلاقًا من الإيمان العميق بضرورة حماية الإنسان وكرامته أثناء النزاعات المسلحة، خصوصًا في ظل ما شهدته منطقتنا العربية خلال العقود الأخيرة من نزاعات مسلحة وصراعات دامية خلّفت آثارًا إنسانية جسيمة، تمثلت في سقوط أعداد كبيرة من الضحايا الأبرياء من المدنيين، ولا سيما النساء والأطفال وكبار السن والعجزة، فضلًا عن حالات النزوح والتشريد والتجويع وانتهاك الكرامة الإنسانية.
                  </p>

                  <p className="text-sm text-muted-foreground leading-[2] mb-5">
                    ومن هذا المنطلق، جاء تأسيس معهد دونان استجابة لحاجة ملحّة إلى نشر الوعي بالقانون الدولي الإنساني، وتعزيز احترام قواعده ومبادئه، والمساهمة في الحد من المعاناة الإنسانية عبر التعليم والتدريب وبناء ثقافة إنسانية راسخة في مختلف شرائح المجتمع.
                  </p>

                  <p className="text-sm text-muted-foreground leading-[2]">
                    سيعمل المعهد على تقديم البرامج التدريبية والاستشارية وبناء القدرات، بالتعاون مع اللجان الخليجية للقانون الدولي الإنساني والجهات المعنية، مستهدفًا القوات المسلحة، والمؤسسات الأكاديمية، والكوادر التعليمية، ومنظمات المجتمع المدني.
                  </p>

                  {/* Signature */}
                  <div className="mt-8 pt-6 border-t border-border/40 flex items-center gap-4">
                    <div className="h-10 w-1 rounded-full bg-primary/40" />
                    <div>
                      <p className="text-sm font-bold text-foreground">سالم بن أحمد بن عبدالله المسهلي</p>
                      <p className="text-xs text-primary mt-0.5">المدير العام</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-20">
          {[
            { value: "+15", label: "سنة خبرة" },
            { value: "6", label: "دول خليجية" },
            { value: "+40", label: "شراكة دولية" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-extrabold text-primary mb-1 glow-text">{stat.value}</div>
              <div className="text-[11px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
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
