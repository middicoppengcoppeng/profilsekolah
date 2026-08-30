import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const galeriItems = [
  { id: 1, label: 'Hasil Belajar', img: '/images/galeri/hasil belajar.jpeg' },
  { id: 2, label: 'Lomba Menari', img: '/images/galeri/lomba menari.jpeg' },
  { id: 3, label: 'Sholat Berjamaah', img: '/images/galeri/sholat berjamaah.jpeg' },
  { id: 4, label: 'Pramuka', img: '/images/galeri/pramuka.jpeg' },
  { id: 5, label: 'Mengaji Bersama', img: '/images/galeri/mengaji bersama.jpeg' },
  { id: 6, label: 'Makan Bersama', img: '/images/galeri/makan bersama.jpeg' },
  { id: 7, label: 'Lomba Gerak Jalan', img: '/images/galeri/lomba gerak jalan.jpeg' },
  { id: 8, label: 'Foto Kegiatan Lainnya', img: '' },
]

export default function Galeri() {
  const ref = useFadeIn()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (id: number) => setLightbox(id)
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => setLightbox((prev) => (prev && prev > 1 ? prev - 1 : galeriItems.length))
  const nextImage = () => setLightbox((prev) => (prev && prev < galeriItems.length ? prev + 1 : 1))

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'ArrowRight') nextImage()
  }

  return (
    <section
      id="galeri"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="galeri-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 fade-in-section"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <span className="section-tag">Dokumentasi</span>
          <h2 id="galeri-title" className="section-title">
            Galeri Foto
          </h2>
          <p className="section-subtitle">
            Dokumentasi kegiatan dan suasana di MIS DDI COPPENG COPPENG. 
            Klik foto untuk melihat lebih besar.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galeriItems.map((item) => (
            <button
              key={item.id}
              className={`group relative bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200 
                hover:border-primary-300 hover:shadow-md transition-all duration-300 cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-primary-500
                ${item.id === 1 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:h-64' : 'aspect-square'}`}
              onClick={() => openLightbox(item.id)}
              aria-label={`Buka foto: ${item.label}`}
              id={`galeri-item-${item.id}`}
            >
              {/* Photo or Placeholder */}
              {item.img ? (
                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-300 gap-2">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs px-2 text-center">{item.label}</p>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary-700/0 group-hover:bg-primary-700/20 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Tampilan foto penuh"
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            onClick={closeLightbox}
            aria-label="Tutup lightbox"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Foto sebelumnya"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="max-w-4xl w-full mx-16 aspect-square md:aspect-video bg-neutral-900 rounded-xl flex flex-col items-center justify-center text-neutral-400 gap-3 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {galeriItems[lightbox - 1]?.img ? (
              <img src={galeriItems[lightbox - 1].img} alt={galeriItems[lightbox - 1].label} className="w-full h-full object-contain" />
            ) : (
              <>
                <svg className="w-16 h-16 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">{galeriItems[lightbox - 1]?.label}</p>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm pointer-events-none">
              <p className="text-xs text-white">
                {lightbox} / {galeriItems.length} — {galeriItems[lightbox - 1]?.label}
              </p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Foto berikutnya"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
