"use client"

import { useState } from "react"
import { Play, Image as ImageIcon } from "lucide-react"

const videos = [
  { title: "مقدمة في القانون الدولي الإنساني", duration: "12:30" },
  { title: "حماية المدنيين أثناء النزاعات المسلحة", duration: "18:45" },
  { title: "اتفاقيات جنيف الأربع", duration: "25:00" },
  { title: "دور اللجنة الدولية للصليب الأحمر", duration: "15:20" },
]

const gallery = [
  "مؤتمر الخليج للقانون الإنساني 2025",
  "ورشة عمل تدريبية - مسقط",
  "حفل تخريج الدفعة الثالثة",
  "زيارة معهد سان ريمو",
  "ندوة حماية الأسرى",
  "لقاء مع خبراء دوليين",
]

export default function MediaSection() {
  const [activeTab, setActiveTab] = useState<"videos" | "gallery">("videos")

  return (
    <section id="media" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--teal)]/5 blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">المحتوى المرئي</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            الوسائط <span className="text-primary">المتعددة</span>
          </h2>
          <div className="section-divider mx-auto max-w-sm" />
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-primary text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.15_75/0.2)]"
                : "glass text-muted-foreground hover:text-foreground hover:border-primary/20"
            }`}
          >
            <Play className="h-4 w-4" />
            الفيديوهات
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "gallery"
                ? "bg-primary text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.15_75/0.2)]"
                : "glass text-muted-foreground hover:text-foreground hover:border-primary/20"
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            معرض الصور
          </button>
        </div>

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((video, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.04] hover:border-primary/30 transition-all duration-500"
              >
                <div className="relative aspect-video bg-secondary/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-[var(--teal)]/8" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 border border-primary/25 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                      <Play className="h-6 w-6 text-primary fill-primary" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 glass px-2.5 py-1 rounded-lg text-[10px] font-semibold text-foreground">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-relaxed">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.03] hover:border-primary/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] bg-secondary/30">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(${135 + i * 30}deg, oklch(0.22 0.06 ${75 + i * 40} / 0.4), oklch(0.16 0.04 ${200 + i * 20} / 0.4))`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-foreground/15 group-hover:text-foreground/25 transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
