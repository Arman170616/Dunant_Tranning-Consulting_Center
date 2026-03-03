"use client"

import { Calendar, MapPin, ArrowLeft } from "lucide-react"

const activities = [
  {
    title: "ورشة عمل القانون الدولي الإنساني",
    date: "15 مارس 2026",
    location: "مسقط، سلطنة عُمان",
    desc: "ورشة عمل متخصصة حول تطبيقات القانون الدولي الإنساني في النزاعات المعاصرة",
    tag: "ورشة عمل",
    color: "primary",
  },
  {
    title: "مؤتمر حماية المدنيين",
    date: "22 أبريل 2026",
    location: "الدوحة، قطر",
    desc: "مؤتمر إقليمي يجمع خبراء القانون الدولي لمناقشة آليات حماية المدنيين",
    tag: "مؤتمر",
    color: "teal",
  },
  {
    title: "دورة تدريبية للقوات المسلحة",
    date: "10 مايو 2026",
    location: "أبوظبي، الإمارات",
    desc: "برنامج تدريبي مكثف لتأهيل أفراد القوات المسلحة على مبادئ القانون الإنساني",
    tag: "دورة تدريبية",
    color: "primary",
  },
  {
    title: "ندوة مصادر القانون الدولي",
    date: "5 يونيو 2026",
    location: "الكويت",
    desc: "ندوة أكاديمية حول مصادر القانون الدولي الإنساني: الاتفاقيات المكتوبة والعرف الدولي",
    tag: "ندوة",
    color: "teal",
  },
]

export default function ActivitiesSection() {
  return (
    <section id="activities" className="relative py-24 lg:py-32 overflow-hidden animated-bg">
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">فعالياتنا</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            الأنشطة <span className="text-primary">والفعاليات</span>
          </h2>
          <div className="section-divider mx-auto max-w-sm mb-6" />
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            نقدّم مجموعة متنوعة من الأنشطة والفعاليات التي تهدف إلى تعزيز المعرفة بالقانون الدولي الإنساني
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((act, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl p-7 lg:p-8 group hover:scale-[1.02] hover:border-primary/25 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative top line */}
              <div className={`absolute top-0 right-0 left-0 h-0.5 ${
                act.color === "teal" ? "bg-gradient-to-l from-transparent via-[var(--teal)]/50 to-transparent" : "bg-gradient-to-l from-transparent via-primary/50 to-transparent"
              }`} />

              {/* Tag */}
              <div className="mb-5">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold border ${
                  act.color === "teal" 
                    ? "bg-[var(--teal)]/10 text-[var(--teal)] border-[var(--teal)]/20"
                    : "bg-primary/10 text-primary border-primary/20"
                }`}>
                  {act.tag}
                </span>
              </div>

              <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {act.title}
              </h4>

              <p className="text-sm text-muted-foreground leading-[1.8] mb-6">{act.desc}</p>

              <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {act.date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {act.location}
                </span>
              </div>

              <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/btn">
                التفاصيل
                <ArrowLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
