"use client"

import { ScrollText, BookMarked, Gavel, ExternalLink } from "lucide-react"

const sources = [
  {
    icon: ScrollText,
    title: "الاتفاقيات المكتوبة",
    id: "conventions",
    desc: "نصوص الاتفاقيات والمعاهدات الدولية المتعلقة بالقانون الدولي الإنساني، بما في ذلك اتفاقيات جنيف الأربع والبروتوكولات الإضافية",
    items: [
      "اتفاقية جنيف الأولى - تحسين حال الجرحى والمرضى",
      "اتفاقية جنيف الثانية - تحسين حال الجرحى والمرضى في البحار",
      "اتفاقية جنيف الثالثة - معاملة أسرى الحرب",
      "اتفاقية جنيف الرابعة - حماية الأشخاص المدنيين",
      "البروتوكول الإضافي الأول والثاني",
    ],
    color: "primary",
  },
  {
    icon: BookMarked,
    title: "القانون العرفي",
    id: "customary-law",
    desc: "مصادر ومراجع القانون الدولي الإنساني العرفي الذي يُلزم جميع الأطراف بغض النظر عن التصديق على الاتفاقيات",
    items: [
      "القواعد العرفية للقانون الدولي الإنساني",
      "دراسة اللجنة الدولية للصليب الأحمر",
      "ممارسات الدول والإلزام القانوني",
      "التطبيق في النزاعات غير الدولية",
    ],
    color: "teal",
  },
  {
    icon: Gavel,
    title: "السوابق القضائية",
    id: "case-law",
    desc: "أحكام وقرارات المحاكم الدولية والمحاكم الجنائية الدولية في مجال القانون الدولي الإنساني",
    items: [
      "أحكام محكمة العدل الدولية",
      "قرارات المحكمة الجنائية الدولية",
      "أحكام المحكمة الجنائية الدولية ليوغسلافيا السابقة",
      "أحكام المحكمة الجنائية الدولية لرواندا",
      "فتاوى محكمة العدل الدولية",
    ],
    color: "primary",
  },
]

export default function IHLSourcesSection() {
  return (
    <section id="ihl-sources" className="relative py-24 lg:py-32 overflow-hidden animated-bg">
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">المصادر القانونية</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            مصادر القانون الدولي <span className="text-primary">الإنساني</span>
          </h2>
          <div className="section-divider mx-auto max-w-sm mb-6" />
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            المصادر الأساسية للقانون الدولي الإنساني من اتفاقيات مكتوبة وقانون عرفي وسوابق قضائية
          </p>
        </div>

        {/* Sources */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {sources.map((source, i) => (
            <div
              key={i}
              id={source.id}
              className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-primary/25 transition-all duration-500"
            >
              {/* Top decorative line */}
              <div className={`absolute top-0 right-0 left-0 h-0.5 ${
                source.color === "teal"
                  ? "bg-gradient-to-l from-transparent via-[var(--teal)]/40 to-transparent"
                  : "bg-gradient-to-l from-transparent via-primary/40 to-transparent"
              }`} />

              {/* Number watermark */}
              <span className="absolute top-4 left-6 text-8xl font-extrabold text-primary/[0.03] select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 lg:min-w-[250px] shrink-0">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border shrink-0 ${
                      source.color === "teal"
                        ? "bg-[var(--teal)]/10 border-[var(--teal)]/20"
                        : "bg-primary/10 border-primary/20"
                    }`}>
                      <source.icon className={`h-7 w-7 ${source.color === "teal" ? "text-[var(--teal)]" : "text-primary"}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{source.title}</h3>
                      <div className={`h-1 w-10 rounded-full mt-2 ${
                        source.color === "teal" ? "bg-[var(--teal)]/40" : "bg-primary/40"
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground leading-[1.8] mb-5">{source.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {source.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-3 glass rounded-xl px-4 py-3 group/item hover:bg-primary/5 transition-colors">
                          <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${
                            source.color === "teal" ? "bg-[var(--teal)]/50" : "bg-primary/50"
                          }`} />
                          <span className="text-sm text-secondary-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">
            مواقع <span className="text-primary">ذات صلة</span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { name: "الأمم المتحدة", url: "https://www.un.org/ar/" },
              { name: "اللجنة الدولية للصليب الأحمر", url: "https://www.icrc.org/ar" },
              { name: "معهد سان ريمو", url: "https://www.iihl.org/" },
              { name: "منصات حقوق الإنسان", url: "#" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl px-5 py-3 flex items-center gap-3 hover:scale-105 hover:border-primary/30 transition-all duration-300 group"
              >
                <ExternalLink className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
