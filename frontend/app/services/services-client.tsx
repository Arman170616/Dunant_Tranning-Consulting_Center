"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import {
  ArrowRight, GraduationCap, BookOpen, Clock,
  ChevronDown, ChevronUp, Globe, X,
} from "lucide-react"

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

interface Lecture {
  id: number; title: string; duration: string; topics: string[]; color: string; order: number
}
interface Course {
  id: number; title: string; description: string; duration: string
  level: "junior" | "medium" | "advanced"; topics: string[]; sessions_count: number
}

const DEFAULT_LECTURES: Lecture[] = [
  { id: 1, title: "مقدمة عن القانون الدولي الإنساني", duration: "90 دقيقة", color: "primary", order: 1,
    topics: ["التعريف", "النشأة والتطور", "مصادر القانون", "العلاقة بين القانون الدولي الإنساني وقانون حقوق الإنسان", "المبادئ الأساسية للقانون", "المسؤولية المباشرة وغير المباشرة", "تصنيف النزاعات المسلحة", "استخدامات الإشارات الدولية"] },
  { id: 2, title: "الاستهداف في سياق القانون الدولي الإنساني", duration: "60 دقيقة", color: "teal", order: 2,
    topics: ["أهمية وصف الأهداف", "خصائص الأهداف", "مراحل دورة الاستهداف", "الإطار القانوني والأخلاقي للاستهداف", "الأهداف العسكرية المشروعة في القانون الدولي الإنساني", "معايير تحديد الأهداف", "التدابير الاحتياطية قبل الهجوم", "تطبيق مبادئ القانون الدولي الإنساني على سير العمليات العدائية"] },
]


const LEVEL_MAP = {
  junior:   { label: "Junior",   cls: "bg-green-500/15  text-green-400  border-green-500/25"  },
  medium:   { label: "Medium",   cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25" },
  advanced: { label: "Advanced", cls: "bg-red-500/15    text-red-400    border-red-500/25"    },
}

interface RegForm { full_name: string; email: string; phone: string; employer: string }

export default function ServicesClient() {
  const [lectures, setLectures]     = useState<Lecture[]>(DEFAULT_LECTURES)
  const [courses, setCourses]       = useState<Course[]>([])
  const [coursesLoaded, setCoursesLoaded] = useState(false)
  const [expanded, setExpanded]     = useState<Record<number, boolean>>({})

  const [regCourse, setRegCourse]     = useState<Course | null>(null)
  const [form, setForm]               = useState<RegForm>({ full_name: "", email: "", phone: "", employer: "" })
  const [submitting, setSubmitting]   = useState(false)
  const [submitted, setSubmitted]     = useState(false)
  const [regError, setRegError]       = useState("")

  useEffect(() => {
    fetch(`${API}/api/lectures/`).then(r => r.json())
      .then((d: Lecture[]) => { if (d.length) setLectures(d) }).catch(() => {})
    fetch(`${API}/api/courses/`).then(r => r.json())
      .then((d: Course[]) => { setCourses(d) }).catch(() => {})
      .finally(() => setCoursesLoaded(true))
  }, [])

  const toggle = (id: number) => setExpanded(p => ({ ...p, [id]: !p[id] }))

  const closeModal = useCallback(() => {
    setRegCourse(null)
    setForm({ full_name: "", email: "", phone: "", employer: "" })
    setSubmitted(false); setRegError("")
  }, [])

  useEffect(() => {
    if (!regCourse) return
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal() }
    window.addEventListener("keydown", h)
    document.body.style.overflow = "hidden"
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = "" }
  }, [regCourse, closeModal])

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!regCourse) return
    setSubmitting(true); setRegError("")
    try {
      const res = await fetch(`${API}/api/course-registrations/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, course: regCourse.id }),
      })
      if (res.ok) { setSubmitted(true) } else { setRegError("حدث خطأ، يرجى المحاولة مرة أخرى") }
    } catch { setRegError("تعذّر الاتصال بالخادم") }
    finally { setSubmitting(false) }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Sticky Top Bar ── */}
      <div className="border-b border-border/40 bg-card/70 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
          <Link href="/#services" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors shrink-0">
            <ArrowRight className="h-4 w-4" />
            <span className="hidden sm:inline">العودة للرئيسية</span>
            <span className="sm:hidden">رجوع</span>
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <a href="#courses" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" /><span className="hidden sm:inline">الدورات التدريبية</span>
            </a>
            <a href="#lectures" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" /><span className="hidden sm:inline">المحاضرات</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        {/* ── Page Header ── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-primary mb-3 tracking-[0.2em] uppercase">ما نقدمه</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            خدماتنا <span className="text-primary">التدريبية</span>
          </h1>
          <div className="mx-auto w-24 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mb-5" />
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            برامج تدريبية ومحاضرات متخصصة في مجال القانون الدولي الإنساني
          </p>
        </div>

        {/* ════ TRAINING COURSES ════ */}
        <section id="courses" className="mb-20 scroll-mt-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                الدورات <span className="text-primary">التدريبية</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-1">برامج تدريبية شاملة ومتخصصة</p>
            </div>
            <div className="h-8 w-1 rounded-full bg-primary/50 shrink-0" />
          </div>

          {coursesLoaded && courses.length === 0 && (
            <p className="text-center text-muted-foreground py-12">لا توجد دورات متاحة حالياً</p>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const level = LEVEL_MAP[course.level] ?? LEVEL_MAP.medium
              return (
                <div key={course.id} className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/30 hover:-translate-y-1 transition-all duration-400">
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Top: duration + level */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-primary" />{course.duration}
                      </span>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${level.cls}`}>
                        {level.label}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-foreground text-center mb-3 group-hover:text-primary transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed mb-5">{course.description}</p>

                    <div className="h-px bg-border/40 mb-4" />

                    {course.topics.length > 0 && (
                      <div className="mb-5">
                        <p className="text-[11px] font-semibold text-muted-foreground text-left mb-2">المحاور الرئيسية:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {course.topics.map((t, ti) => (
                            <span key={ti} className="text-[11px] text-muted-foreground border border-border/60 rounded-full px-2.5 py-0.5 bg-secondary/30">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground mt-auto mb-5">
                      <Globe className="h-3.5 w-3.5 text-primary" />
                      <span>{course.sessions_count} جلسة تدريبية</span>
                    </div>
                  </div>

                  <button
                    onClick={() => { setRegCourse(course); setSubmitted(false) }}
                    className="w-full py-3.5 text-sm font-bold bg-foreground text-background hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    التسجيل في الدورة
                  </button>
                </div>
              )
            })}
          </div>
        </section>

        {/* ════ LECTURES ════ */}
        <section id="lectures" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                تفاصيل <span className="text-primary">المحاضرات</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-1">محاضرات متخصصة يقدمها خبراء دوليون</p>
            </div>
            <div className="h-8 w-1 rounded-full bg-primary/50 shrink-0" />
          </div>

          <div className="flex flex-col gap-6">
            {lectures.map((lecture, idx) => {
              const isTeal   = lecture.color === "teal"
              const isOpen   = !!expanded[lecture.id]
              const colorCls = isTeal ? "text-(--teal)" : "text-primary"
              const bgBorder = isTeal ? "bg-(--teal)/10 border-(--teal)/20" : "bg-primary/10 border-primary/20"
              const topLine  = isTeal ? "bg-linear-to-l from-transparent via-(--teal)/50 to-transparent" : "bg-linear-to-l from-transparent via-primary/50 to-transparent"
              const numBg    = isTeal ? "bg-(--teal)/15 text-(--teal)" : "bg-primary/15 text-primary"
              const ordinal  = ["الأولى","الثانية","الثالثة","الرابعة","الخامسة","السادسة"][idx] ?? `${idx+1}`

              return (
                <div key={lecture.id} className="glass-card rounded-3xl overflow-hidden relative">
                  <div className={`absolute top-0 right-0 left-0 h-1 ${topLine}`} />
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border shrink-0 ${bgBorder}`}>
                          <BookOpen className={`h-5 w-5 sm:h-6 sm:w-6 ${colorCls}`} />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-foreground">المحاضرة {ordinal}</h4>
                          <p className={`${colorCls} font-semibold text-sm mt-1`}>{lecture.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 glass rounded-full px-4 py-2 w-fit">
                        <Clock className={`h-4 w-4 ${colorCls}`} />
                        <span className="text-sm font-medium text-foreground">{lecture.duration}</span>
                      </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[600px]" : "max-h-0"}`}>
                      <div className="grid sm:grid-cols-2 gap-3 mb-4">
                        {lecture.topics.map((topic, ti) => (
                          <div key={ti} className="flex items-start gap-3 glass rounded-xl px-4 py-3">
                            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold shrink-0 mt-0.5 ${numBg}`}>{ti + 1}</span>
                            <span className="text-sm text-secondary-foreground leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => toggle(lecture.id)}
                      className={`flex items-center gap-2 text-sm font-semibold ${colorCls} hover:opacity-80 transition-colors mt-2`}
                    >
                      {isOpen ? "إخفاء المحتويات" : "عرض المحتويات"}
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      {/* ── Registration Modal ── */}
      {regCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} aria-hidden="true" />
          <div className="relative w-full max-w-md bg-card border border-border/40 rounded-3xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="bg-foreground text-background px-6 py-5">
              <button onClick={closeModal} className="absolute top-4 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="إغلاق">
                <X className="h-4 w-4 text-white" />
              </button>
              <p className="text-xs text-white/60 mb-1 text-center">تسجيل في الدورة</p>
              <h3 className="text-base font-extrabold text-center leading-snug">{regCourse.title}</h3>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-xs text-white/60">
                  <Clock className="h-3 w-3" />{regCourse.duration}
                </span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${LEVEL_MAP[regCourse.level].cls}`}>
                  {LEVEL_MAP[regCourse.level].label}
                </span>
              </div>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 border border-green-500/30">
                    <GraduationCap className="h-7 w-7 text-green-400" />
                  </div>
                  <p className="text-base font-bold text-foreground mb-2">تم التسجيل بنجاح!</p>
                  <p className="text-sm text-muted-foreground">سنتواصل معك قريبًا للتأكيد</p>
                  <button onClick={closeModal} className="mt-6 text-sm text-primary hover:underline">إغلاق</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" translate="no">
                  {[
                    { key: "full_name", label: "الاسم الكامل", type: "text", placeholder: "أدخل اسمك الكامل", required: true, dir: "rtl" },
                    { key: "email",     label: "البريد الإلكتروني", type: "email", placeholder: "example@email.com", required: true, dir: "ltr" },
                    { key: "phone",     label: "رقم الهاتف",  type: "tel",   placeholder: "05XXXXXXXX",         required: true, dir: "ltr" },
                    { key: "employer",  label: "جهة العمل",   type: "text",  placeholder: "اختياري",             required: false, dir: "rtl" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 text-left">
                        {f.label} {f.required && <span className="text-red-400">*</span>}
                      </label>
                      <input
                        type={f.type}
                        required={f.required}
                        dir={f.dir}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof RegForm]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full rounded-xl border border-border/60 bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                    </div>
                  ))}

                  {regError && <p className="text-xs text-red-400 text-center">{regError}</p>}

                  <div className="flex gap-3 mt-1">
                    <button type="button" onClick={closeModal} className="flex-1 py-2.5 rounded-xl border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors">
                      إلغاء
                    </button>
                    <button type="submit" disabled={submitting} className="flex-1 py-2.5 rounded-xl bg-foreground text-background text-sm font-bold hover:bg-primary hover:text-white transition-colors disabled:opacity-60">
                      {submitting ? "جاري التسجيل..." : "تأكيد التسجيل"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
