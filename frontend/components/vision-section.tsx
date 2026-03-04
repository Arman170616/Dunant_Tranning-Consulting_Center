"use client"

import { Eye, Target, Sparkles } from "lucide-react"

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-24 lg:py-32 overflow-hidden animated-bg">
      <div className="absolute inset-0 geometric-pattern opacity-15" />
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-primary/6 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">توجهاتنا</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            الرؤية <span className="text-primary">والرسالة</span>
          </h2>
          <div className="section-divider mx-auto max-w-sm" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 group hover:scale-[1.02] hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-primary/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-primary/5 to-transparent rounded-tl-full" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-all shrink-0">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase mb-1">Vision</p>
                  <h3 className="text-2xl font-bold text-foreground">الرؤية</h3>
                  <div className="h-1 w-12 bg-primary/40 rounded-full mt-1" />
                </div>
              </div>

              <p className="text-muted-foreground leading-loose text-sm">
                أن يكون معهد دونان مرجعًا إقليميًا رائدًا في نشر وتعزيز ثقافة القانون الدولي الإنساني، والمساهمة الفاعلة في حماية الإنسان وكرامته أثناء النزاعات المسلحة، وبناء مجتمعات أكثر وعيًا والتزامًا بالمبادئ الإنسانية.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 group hover:scale-[1.02] hover:border-(--teal)/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-(--teal)/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-(--teal)/5 to-transparent rounded-tl-full" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-(--teal)/10 border border-(--teal)/20 group-hover:bg-(--teal)/15 transition-all shrink-0">
                  <Target className="h-8 w-8 text-(--teal)" />
                </div>
                <div>
                  <p className="text-xs font-bold text-(--teal) tracking-widest uppercase mb-1">Mission</p>
                  <h3 className="text-2xl font-bold text-foreground">الرسالة</h3>
                  <div className="h-1 w-12 bg-(--teal)/40 rounded-full mt-1" />
                </div>
              </div>

              <p className="text-muted-foreground leading-loose text-sm">
                نشر وتعزيز مبادئ وقواعد القانون الدولي الإنساني من خلال التدريب، والاستشارات، وبناء القدرات، والتعاون مع اللجان الخليجية للقانون الدولي الإنساني والمؤسسات التطبيقية العسكرية والمدنية، بما يسهم في ترسيخ ثقافة احترام الإنسان وحمايته في أوقات النزاعات المسلحة، وبما يخدم القيم الإنسانية البشرية.
              </p>
            </div>
          </div>
        </div>

        {/* Values Banner */}
        <div className="mt-12 glass-card rounded-3xl p-8 lg:p-10 max-w-5xl mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-l from-primary/3 via-transparent to-(--teal)/3" />
          <div className="relative">
            <Sparkles className="mx-auto h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-6">قيمنا الجوهرية</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "الإنسانية",
                "الحياد",
                "الاستقلالية",
                "التميّز",
                "الشفافية",
                "التعاون",
              ].map((v, i) => (
                <span
                  key={i}
                  className="glass px-6 py-3 rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
