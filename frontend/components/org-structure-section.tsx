"use client"

const leftBranch = {
  name: "مدير البرامج والدورات",
  children: ["قسم تنفيذ البرامج", "قسم تطوير وتصميم البرامج", "قسم الجودة والتقييم"],
}

const rightBranch = {
  name: "المدير الإداري والمالي",
  children: ["قسم الشؤون المالية", "قسم التقنية والدعم الفني", "قسم التسويق والعلاقات العامة"],
}

export default function OrgStructureSection() {
  return (
    <section id="structure" className="relative py-24 lg:py-32 overflow-hidden animated-bg">
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-(--teal)/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">الهيكل الإداري</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            الهيكل <span className="text-primary">التنظيمي</span>
          </h2>
          <div className="section-divider mx-auto max-w-sm mb-6" />
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            الهيكل التنظيمي للمعهد دونان للاستشارات والتدريب
          </p>
        </div>

        {/* Org Chart */}
        <div className="overflow-x-auto pb-6">
          <div className="min-w-[720px] max-w-4xl mx-auto flex flex-col items-center">

            {/* Level 1 — Director General */}
            <div className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-extrabold text-base shadow-lg shadow-primary/20">
              المدير العام
            </div>

            {/* Connector L1 → L2 */}
            <div className="w-px h-8 bg-border/60" />

            {/* Level 2 — Coordination */}
            <div className="px-8 py-3 rounded-xl bg-primary/15 text-primary font-bold text-sm border border-primary/30">
              التنسيق
            </div>

            {/* Connector L2 → L3 */}
            <div className="w-px h-8 bg-border/60" />

            {/* Level 3 — Two managers with horizontal bar */}
            <div className="w-full relative">
              {/* Horizontal bar connecting the two columns */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-border/60" />

              <div className="grid grid-cols-2">

                {/* ── Left branch: Programs Manager ── */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-border/60" />
                  <div className="w-10/12">
                    <div className="glass-card rounded-xl px-4 py-3 font-semibold text-sm text-foreground text-center border border-border/50">
                      {leftBranch.name}
                    </div>
                  </div>
                  <div className="w-px h-6 bg-border/60" />

                  {/* Leaf nodes L4 */}
                  <div className="w-10/12 relative">
                    <div className="absolute top-0 left-[calc(100%/6)] right-[calc(100%/6)] h-px bg-border/60" />
                    <div className="grid grid-cols-3 gap-2">
                      {leftBranch.children.map((child, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-px h-4 bg-border/60" />
                          <div className="w-full rounded-xl p-2.5 text-[11px] font-semibold text-foreground text-center glass-card border border-primary/15 bg-primary/5 leading-snug">
                            {child}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Right branch: Admin Director ── */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-border/60" />
                  <div className="w-10/12">
                    <div className="glass-card rounded-xl px-4 py-3 font-semibold text-sm text-foreground text-center border border-border/50">
                      {rightBranch.name}
                    </div>
                  </div>
                  <div className="w-px h-6 bg-border/60" />

                  {/* Leaf nodes L4 */}
                  <div className="w-10/12 relative">
                    <div className="absolute top-0 left-[calc(100%/6)] right-[calc(100%/6)] h-px bg-border/60" />
                    <div className="grid grid-cols-3 gap-2">
                      {rightBranch.children.map((child, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-px h-4 bg-border/60" />
                          <div className="w-full rounded-xl p-2.5 text-[11px] font-semibold text-foreground text-center glass-card border border-primary/15 bg-primary/5 leading-snug">
                            {child}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
