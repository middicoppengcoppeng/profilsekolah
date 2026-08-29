import { useFadeIn } from '../hooks/useFadeIn'

const keunggulan = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Pendidikan Islami',
    desc: 'Pembelajaran yang mengintegrasikan pendidikan umum dengan nilai-nilai keislaman secara menyeluruh dan seimbang.',
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Pembentukan Karakter',
    desc: 'Mendorong siswa menjadi pribadi yang disiplin, mandiri, jujur, dan bertanggung jawab sejak usia dini.',
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Pembelajaran Aktif',
    desc: 'Menciptakan proses belajar yang aktif, kreatif, dan menyenangkan agar siswa gemar belajar.',
  },
  {
    id: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Lingkungan Kondusif',
    desc: 'Menyediakan lingkungan belajar yang nyaman, aman, dan mendukung perkembangan optimal setiap siswa.',
  },
  {
    id: 5,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Guru Berpengalaman',
    desc: 'Diampu oleh tenaga pendidik yang berpengalaman, berkompetensi, dan berdedikasi tinggi.',
  },
  {
    id: 6,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Bernaung di DDI',
    desc: 'Bagian dari Darud Da\'wah Wal-Irsyad, ormas Islam terpercaya dengan rekam jejak pendidikan panjang.',
  },
]

export default function Keunggulan() {
  const ref = useFadeIn()

  return (
    <section
      id="keunggulan"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="keunggulan-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 fade-in-section"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <span className="section-tag">Mengapa Kami</span>
          <h2 id="keunggulan-title" className="section-title">
            Keunggulan MIS DDI Coppeng - Coppeng
          </h2>
          <p className="section-subtitle">
            Kami berkomitmen untuk memberikan pendidikan terbaik yang mempersiapkan 
            siswa menjadi generasi yang cerdas dan berakhlak mulia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keunggulan.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 mb-4 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
