"use client"

import { useEffect, useState } from "react"
import { ChevronDown, BookOpen, Users, Award, GraduationCap } from "lucide-react"

const stats = [
  { icon: BookOpen, value: "+200", label: "برنامج تدريبي" },
  { icon: Users, value: "+5000", label: "متدرب ومستفيد" },
  { icon: Award, value: "+50", label: "خبير ومحاضر" },
  { icon: GraduationCap, value: "+30", label: "دورة متخصصة" },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover scale-110"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 geometric-pattern opacity-20" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/6 w-80 h-80 rounded-full bg-primary/8 blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full bg-(--teal)/6 blur-[120px] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/3 blur-[150px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-20">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-2.5 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-xs font-semibold text-primary">
              القانون الدولي الإنساني
            </span>
          </div>

          {/* Title with decorative elements */}
          <div className="relative inline-block mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.15] text-balance">
              <span className="text-foreground">معهد </span>
              <span className="text-primary glow-text relative">
                دونان
                <svg className="absolute -bottom-2 right-0 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-foreground text-[0.6em]">للاستشارات والتدريب</span>
            </h1>
          </div>

          {/* Parent company */}
          <p className="text-xs sm:text-sm text-muted-foreground/60 mb-8 tracking-wide">
            شركة الحلول الاستراتيجية الشاملة ش.م.م
          </p>

          {/* Subtitle */}
          <p className="mx-auto max-w-3xl text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-5 text-balance">
            مركز تميّز إقليمي رائد في نشر وتعزيز ثقافة القانون الدولي الإنساني
          </p>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground/60 leading-relaxed mb-12">
            نعمل على التدريب والتأهيل والاستشارات في مجال القانون الدولي الإنساني لخدمة دول مجلس التعاون لدول الخليج العربية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#services"
              className="group relative overflow-hidden px-10 py-4.5 rounded-2xl bg-primary text-primary-foreground font-bold text-base transition-all duration-300 hover:shadow-[0_0_50px_oklch(0.78_0.15_75/0.35)]"
            >
              <span className="relative z-10">خدماتنا</span>
              <div className="absolute inset-0 bg-linear-to-l from-(--gold-light) to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#about"
              className="glass-card px-10 py-4.5 rounded-2xl text-foreground font-semibold text-base hover:border-primary/40 transition-all duration-300"
            >
              تعرّف علينا
            </a>
            <a
              href="#contact"
              className="glass px-10 py-4.5 rounded-2xl text-muted-foreground font-medium text-base hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              تواصل معنا
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 lg:p-6 text-center group hover:scale-105 transition-all duration-500 hover:border-primary/30"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-primary mb-1 glow-text">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">اكتشف المزيد</span>
        <ChevronDown className="h-5 w-5 text-primary/60" />
      </div>
    </section>
  )
}
