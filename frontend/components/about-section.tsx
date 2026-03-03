"use client"

import { Shield, Heart, Scale, Globe, Quote } from "lucide-react"

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
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--teal)]/5 blur-[100px]" />

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

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Image side */}
          <div className="relative group">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/15 to-[var(--teal)]/15 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/about-bg.jpg"
                alt="معهد دونان للاستشارات والتدريب"
                className="w-full h-80 lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

              {/* Floating quote card */}
              <div className="absolute bottom-6 right-6 left-6 glass-card rounded-2xl p-6 border-r-4 border-r-primary/40">
                <Quote className="h-6 w-6 text-primary/40 mb-2" />
                <p className="text-sm text-foreground leading-[1.8]">
                  تأسّس المعهد استجابةً للحاجة الملحّة لنشر الوعي بالقانون الدولي الإنساني في ظل النزاعات المسلحة والأزمات الإنسانية التي تؤثر على المدنيين.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6" id="director">
            {/* Director's Word */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-primary/8 to-transparent rounded-br-full" />
              <div className="relative">
                <h3 className="text-xl font-bold text-primary mb-4">كلمة المدير العام</h3>
                <p className="text-muted-foreground leading-[1.9] mb-4 text-sm">
                  في ظل ما يشهده العالم من نزاعات مسلحة وحروب وأزمات إنسانية تُخلّف آلاف النازحين واللاجئين، وتُلحق الأذى بالمدنيين وخاصةً النساء والأطفال وكبار السن، جاء تأسيس معهد دونان للاستشارات والتدريب.
                </p>
                <p className="text-muted-foreground leading-[1.9] text-sm">
                  نحن ملتزمون بنشر ثقافة القانون الدولي الإنساني وتعزيز احترام الكرامة الإنسانية من خلال التدريب والتوعية وبناء القدرات في دول مجلس التعاون لدول الخليج العربية.
                </p>
              </div>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4">
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
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center group hover:scale-[1.04] hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
