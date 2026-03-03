"use client"

import { useState } from "react"
import { BookOpen, GraduationCap, Users, Clock, ChevronDown, ChevronUp } from "lucide-react"

const lecture1Topics = [
  "التعريف",
  "النشأة والتطور",
  "مصادر القانون",
  "العلاقة بين القانون الدولي الإنساني وقانون حقوق الإنسان",
  "المبادئ الأساسية للقانون",
  "المسؤولية المباشرة وغير المباشرة",
  "تصنيف النزاعات المسلحة",
  "استخدامات الإشارات الدولية",
]

const lecture2Topics = [
  "أهمية وصف الأهداف",
  "خصائص الأهداف",
  "مراحل دورة الاستهداف",
  "الإطار القانوني والأخلاقي للاستهداف",
  "الأهداف العسكرية المشروعة في القانون الدولي الإنساني",
  "معايير تحديد الأهداف",
  "التدابير الاحتياطية قبل الهجوم",
  "تطبيق مبادئ القانون الدولي الإنساني على سير العمليات العدائية",
]

export default function ServicesSection() {
  const [expanded1, setExpanded1] = useState(false)
  const [expanded2, setExpanded2] = useState(false)

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[var(--teal)]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">ما نقدمه</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            خدماتنا <span className="text-primary">التدريبية</span>
          </h2>
          <div className="section-divider mx-auto max-w-sm mb-6" />
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            نقدّم مجموعة متنوعة من المحاضرات والدورات التدريبية المتخصصة في مجال القانون الدولي الإنساني
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: BookOpen, title: "المحاضرات", desc: "محاضرات متخصصة في القانون الدولي الإنساني يقدمها خبراء دوليون", count: "12+" },
            { icon: GraduationCap, title: "الدورات التدريبية", desc: "دورات مكثفة لتأهيل الكوادر الوطنية في مجال القانون الإنساني", count: "30+" },
            { icon: Users, title: "المحاضرين والمدربين", desc: "نخبة من الخبراء والمتخصصين في القانون الدولي الإنساني", count: "50+" },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 group hover:scale-[1.03] hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-5xl font-extrabold text-primary/5 select-none">{item.count}</div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lectures Detail */}
        <div id="lectures" className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            تفاصيل <span className="text-primary">المحاضرات</span>
          </h3>

          <div className="flex flex-col gap-6">
            {/* Lecture 1 */}
            <div className="glass-card rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">المحاضرة الأولى</h4>
                      <p className="text-primary font-semibold text-sm mt-1">مقدمة عن القانون الدولي الإنساني</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 glass rounded-full px-4 py-2 w-fit">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">90 دقيقة</span>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${expanded1 ? "max-h-[600px]" : "max-h-0"}`}>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {lecture1Topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 glass rounded-xl px-4 py-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary text-[10px] font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-secondary-foreground leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setExpanded1(!expanded1)}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-[var(--gold-light)] transition-colors mt-2"
                >
                  {expanded1 ? "إخفاء المحتويات" : "عرض المحتويات"}
                  {expanded1 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Lecture 2 */}
            <div className="glass-card rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-transparent via-[var(--teal)]/50 to-transparent" />
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/20 shrink-0">
                      <BookOpen className="h-6 w-6 text-[var(--teal)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">المحاضرة الثانية</h4>
                      <p className="text-[var(--teal)] font-semibold text-sm mt-1">الاستهداف في سياق القانون الدولي الإنساني</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 glass rounded-full px-4 py-2 w-fit">
                    <Clock className="h-4 w-4 text-[var(--teal)]" />
                    <span className="text-sm font-medium text-foreground">60 دقيقة</span>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${expanded2 ? "max-h-[600px]" : "max-h-0"}`}>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {lecture2Topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 glass rounded-xl px-4 py-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-[10px] font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-secondary-foreground leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setExpanded2(!expanded2)}
                  className="flex items-center gap-2 text-sm font-semibold text-[var(--teal)] hover:opacity-80 transition-colors mt-2"
                >
                  {expanded2 ? "إخفاء المحتويات" : "عرض المحتويات"}
                  {expanded2 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
