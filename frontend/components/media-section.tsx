"use client"

import { useEffect, useState, useCallback } from "react"
import { Play, Image as ImageIcon, X } from "lucide-react"

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

function getYouTubeId(url: string): string | null {
  if (!url) return null
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}

interface MediaItem {
  id: number
  type: "video" | "photo"
  title: string
  file_url: string | null
  url: string
  duration: string
}

const DEFAULT_VIDEOS: MediaItem[] = [
  { id: 1, type: "video", title: "مقدمة في القانون الدولي الإنساني", file_url: null, url: "", duration: "12:30" },
  { id: 2, type: "video", title: "حماية المدنيين أثناء النزاعات المسلحة", file_url: null, url: "", duration: "18:45" },
  { id: 3, type: "video", title: "اتفاقيات جنيف الأربع", file_url: null, url: "", duration: "25:00" },
  { id: 4, type: "video", title: "دور اللجنة الدولية للصليب الأحمر", file_url: null, url: "", duration: "15:20" },
]

const DEFAULT_PHOTOS: MediaItem[] = [
  { id: 1, type: "photo", title: "مؤتمر الخليج للقانون الإنساني 2025", file_url: null, url: "", duration: "" },
  { id: 2, type: "photo", title: "ورشة عمل تدريبية - مسقط", file_url: null, url: "", duration: "" },
  { id: 3, type: "photo", title: "حفل تخريج الدفعة الثالثة", file_url: null, url: "", duration: "" },
  { id: 4, type: "photo", title: "زيارة معهد سان ريمو", file_url: null, url: "", duration: "" },
  { id: 5, type: "photo", title: "ندوة حماية الأسرى", file_url: null, url: "", duration: "" },
  { id: 6, type: "photo", title: "لقاء مع خبراء دوليين", file_url: null, url: "", duration: "" },
]

export default function MediaSection() {
  const [activeTab, setActiveTab] = useState<"videos" | "gallery">("videos")
  const [videos, setVideos] = useState<MediaItem[]>(DEFAULT_VIDEOS)
  const [photos, setPhotos] = useState<MediaItem[]>(DEFAULT_PHOTOS)
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null)

  const closeVideo = useCallback(() => setActiveVideo(null), [])

  useEffect(() => {
    fetch(`${API}/api/media/?type=video`)
      .then(r => r.json())
      .then((data: MediaItem[]) => { if (data.length) setVideos(data) })
      .catch(() => {})

    fetch(`${API}/api/media/?type=photo`)
      .then(r => r.json())
      .then((data: MediaItem[]) => { if (data.length) setPhotos(data) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!activeVideo) return
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") closeVideo() }
    window.addEventListener("keydown", h)
    document.body.style.overflow = "hidden"
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = "" }
  }, [activeVideo, closeVideo])

  return (
    <section id="media" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-(--teal)/5 blur-[120px]" />
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
            {videos.map((video, i) => {
              const ytId = getYouTubeId(video.url || "")
              const thumb = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null
              return (
                <button
                  key={video.id ?? i}
                  onClick={() => setActiveVideo(video)}
                  className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.04] hover:border-primary/30 transition-all duration-500 text-right w-full"
                >
                  <div className="relative aspect-video bg-secondary/40 overflow-hidden">
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={video.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-(--teal)/8" />
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Play className="h-6 w-6 text-white fill-white translate-x-0.5" />
                      </div>
                    </div>
                    {video.duration && (
                      <span className="absolute bottom-2 left-2 glass px-2.5 py-1 rounded-lg text-[10px] font-semibold text-foreground">
                        {video.duration}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-relaxed">
                      {video.title}
                    </h4>
                  </div>
                </button>
              )
            })}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((item, i) => (
              <a
                key={item.id ?? i}
                href={item.file_url || item.url || "#"}
                target={item.file_url || item.url ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.03] hover:border-primary/30 transition-all duration-500"
              >
                <div className="relative aspect-4/3 bg-secondary/30">
                  {item.file_url ? (
                    <img src={item.file_url} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(${135 + i * 30}deg, oklch(0.22 0.06 ${75 + i * 40} / 0.4), oklch(0.16 0.04 ${200 + i * 20} / 0.4))`,
                      }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-foreground/15 group-hover:text-foreground/25 transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* ── Video Lightbox ── */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={closeVideo} aria-hidden="true" />
          <div className="relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-3">
              <button onClick={closeVideo} className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm">
                <X className="h-5 w-5" /><span>إغلاق</span>
              </button>
              <p className="text-sm font-semibold text-white/80 truncate max-w-[60%]">{activeVideo.title}</p>
            </div>
            {(() => {
              const ytId = getYouTubeId(activeVideo.url || "")
              return (
                <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] border border-white/10">
                  {ytId ? (
                    <iframe
                      key={activeVideo.id}
                      src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : activeVideo.file_url ? (
                    <video src={activeVideo.file_url} controls autoPlay className="absolute inset-0 h-full w-full" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black text-white/40 text-sm">لا يوجد رابط فيديو</div>
                  )}
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}
