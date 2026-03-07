"use client"

import { useEffect, useState } from "react"
import { BookOpen, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export default function ServicesSection() {
  const [lectureCount, setLectureCount] = useState("2+")
  const [courseCount, setCourseCount]   = useState("3+")
  const [trainerCount, setTrainerCount] = useState("50+")

  useEffect(() => {
    fetch(`${API}/api/lectures/`).then(r => r.json())
      .then((d: unknown[]) => { if (d.length) setLectureCount(`${d.length}+`) }).catch(() => {})
    fetch(`${API}/api/courses/`).then(r => r.json())
      .then((d: unknown[]) => { if (d.length) setCourseCount(`${d.length}+`) }).catch(() => {})
    fetch(`${API}/api/trainers/`).then(r => r.json())
      .then((d: unknown[]) => { if (d.length) setTrainerCount(`${d.length}+`) }).catch(() => {})
  }, [])

  const serviceCards = [
    { icon: BookOpen,      title: "المحاضرات",           desc: "محاضرات متخصصة في القانون الدولي الإنساني يقدمها خبراء دوليون",        count: lectureCount, href: "/services#lectures" },
    { icon: GraduationCap, title: "الدورات التدريبية",   desc: "دورات مكثفة لتأهيل الكوادر الوطنية في مجال القانون الإنساني",          count: courseCount,  href: "/services#courses"  },
    { icon: Users,         title: "المحاضرين والمدربين", desc: "نخبة من الخبراء والمتخصصين في القانون الدولي الإنساني",                 count: trainerCount, href: null              },
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-(--teal)/5 blur-[100px]" />

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

        {/* Service Category Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {serviceCards.map((item, i) => {
            const inner = (
              <>
                <div className="absolute top-4 left-4 text-5xl font-extrabold text-primary/5 select-none">{item.count}</div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </>
            )
            const cls = "glass-card rounded-2xl p-7 group hover:scale-[1.03] hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            return item.href ? (
              <Link key={i} href={item.href} className={cls}>{inner}</Link>
            ) : (
              <div key={i} className={cls}>{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
