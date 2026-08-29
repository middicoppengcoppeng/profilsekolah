import { useFadeIn } from '../hooks/useFadeIn'

const kegiatanList = [
  {
    id: 1,
    title: 'Pembelajaran di Kelas',
    desc: 'Suasana belajar aktif di dalam kelas dengan pendekatan yang menyenangkan.',
    category: 'Akademik',
  },
  {
    id: 2,
    title: 'Upacara Bendera',
    desc: 'Upacara rutin yang membentuk kedisiplinan dan rasa cinta tanah air.',
    category: 'Pembentukan Karakter',
  },
  {
    id: 3,
    title: 'Kegiatan Keagamaan',
    desc: 'Sholat berjamaah, dzikir pagi, dan berbagai kegiatan ibadah rutin.',
    category: 'Keagamaan',
  },
  {
    id: 4,
    title: 'Pramuka',
    desc: 'Latihan pramuka yang melatih keterampilan, keberanian, dan kemandirian.',
    category: 'Ekstrakurikuler',
  },
  {
    id: 5,
    title: 'Perlombaan',
    desc: 'Berbagai lomba akademik dan non-akademik baik internal maupun antar madrasah.',
    category: 'Prestasi',
  },
  {
    id: 6,
    title: 'Kegiatan Sosial',
    desc: 'Kegiatan bakti sosial, santunan anak yatim, dan peduli lingkungan sekitar.',
    category: 'Sosial',
  },
]

const categoryColors: Record<string, string> = {
  'Akademik': 'bg-blue-100 text-blue-700',
  'Pembentukan Karakter': 'bg-primary-100 text-primary-700',
  'Keagamaan': 'bg-emerald-100 text-emerald-700',
  'Ekstrakurikuler': 'bg-amber-100 text-amber-700',
  'Prestasi': 'bg-purple-100 text-purple-700',
  'Sosial': 'bg-rose-100 text-rose-700',
}

export default function Kegiatan() {
  const ref = useFadeIn()

  return (
    <section
      id="kegiatan"
      className="py-20 lg:py-28 bg-neutral-50"
      aria-labelledby="kegiatan-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 fade-in-section"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <span className="section-tag">Kehidupan Madrasah</span>
          <h2 id="kegiatan-title" className="section-title">
            Kegiatan Siswa
          </h2>
          <p className="section-subtitle">
            Beragam kegiatan yang membentuk siswa menjadi pribadi yang seimbang 
            antara akademik, spiritual, dan sosial.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatanList.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-md transition-all duration-300">
              {/* Photo placeholder */}
              <div className="aspect-video bg-neutral-100 flex flex-col items-center justify-center text-neutral-300 gap-2 border-b border-neutral-100">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs">Foto {item.title}</p>
              </div>

              <div className="p-5">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
