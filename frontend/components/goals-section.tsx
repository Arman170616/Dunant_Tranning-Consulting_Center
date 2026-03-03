"use client"

import {
  Megaphone,
  Users,
  Database,
  Swords,
  GraduationCap,
  Handshake,
  HeartHandshake,
} from "lucide-react"

const goals = [
  { icon: Megaphone, title: "نشر الوعي", desc: "رفع مستوى الوعي بالقانون الدولي الإنساني بين جميع شرائح المجتمع" },
  { icon: Users, title: "دعم المؤسسات", desc: "دعم اللجان والمؤسسات الخليجية العاملة في مجال القانون الإنساني" },
  { icon: Database, title: "قاعدة بيانات إقليمية", desc: "بناء قاعدة بيانات إقليمية من الخبراء والمحاضرين الخليجيين المؤهلين" },
  { icon: Swords, title: "تدريب القوات المسلحة", desc: "تدريب أفراد القوات المسلحة والأمنية على مبادئ القانون الدولي الإنساني" },
  { icon: GraduationCap, title: "تطوير المناهج", desc: "مراجعة وتطوير مناهج القانون الدولي الإنساني في الأكاديميات العسكرية" },
  { icon: Handshake, title: "تعزيز الشراكات", desc: "تعزيز الشراكات مع المنظمات المحلية والإقليمية والدولية" },
  { icon: HeartHandshake, title: "احترام الكرامة الإنسانية", desc: "تعزيز احترام الكرامة الإنسانية والحد من الانتهاكات خلال النزاعات" },
]

export default function GoalsSection() {
  return (
    <section id="goals" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-[var(--teal)]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">ما نسعى إليه</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            أهداف <span className="text-primary">المعهد</span>
          </h2>
          <div className="section-divider mx-auto max-w-sm mb-6" />
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            يعمل معهد دونان للاستشارات والتدريب على تحقيق مجموعة من الأهداف الاستراتيجية لنشر وتعزيز ثقافة القانون الدولي الإنساني
          </p>
        </div>

        {/* Goals Grid - Bento style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {goals.map((goal, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-7 group hover:scale-[1.03] hover:border-primary/30 transition-all duration-500 relative overflow-hidden ${
                i === goals.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Number watermark */}
              <span className="absolute top-3 left-4 text-7xl font-extrabold text-primary/[0.04] select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <goal.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{goal.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-[1.8]">{goal.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
