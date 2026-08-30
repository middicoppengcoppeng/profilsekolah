import { useFadeIn } from '../hooks/useFadeIn'

const programs = [
  {
    id: 1,
    emoji: '📚',
    title: 'Program Wajib / Kurikuler Inti',
    desc: 'Kurikulum Merdeka dan Praktik Ibadah sebagai fondasi utama pendidikan siswa.',
    color: 'bg-emerald-50 border-emerald-200',
    titleColor: 'text-emerald-800',
  },
  {
    id: 2,
    emoji: '🎯',
    title: 'Ekstrakurikuler',
    desc: 'Meliputi kegiatan Keagamaan, Akademik, Pramuka, dan Olahraga untuk mengembangkan minat dan bakat.',
    color: 'bg-blue-50 border-blue-200',
    titleColor: 'text-blue-800',
  },
  {
    id: 3,
    emoji: '⭐',
    title: 'Program Unggulan',
    desc: 'Program Literasi Madrasah dan Madrasah Digital untuk mempersiapkan siswa menghadapi era modern.',
    color: 'bg-violet-50 border-violet-200',
    titleColor: 'text-violet-800',
  },
  {
    id: 4,
    emoji: '🕌',
    title: 'Program Pembiasaan',
    desc: 'Shalat Dhuha, Tilawah, Hafalan, Kultum, Shalat Dzuhur berjamaah, Jumat Sedekah & Bersih, serta Karakter 5S.',
    color: 'bg-orange-50 border-orange-200',
    titleColor: 'text-orange-800',
  },
]

export default function Program() {
  const ref = useFadeIn()

  return (
    <section
      id="program"
      className="py-20 lg:py-28 bg-neutral-50"
      aria-labelledby="program-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 fade-in-section"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <span className="section-tag">Program Kami</span>
          <h2 id="program-title" className="section-title">
            Program Pendidikan
          </h2>
          <p className="section-subtitle">
            Kami menyediakan berbagai program pendidikan yang dirancang untuk mengembangkan 
            potensi siswa secara menyeluruh — dari aspek akademik, keagamaan, hingga karakter.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`p-5 rounded-xl border ${program.color} hover:shadow-sm transition-all duration-200`}
            >
              <div className="text-3xl mb-3">{program.emoji}</div>
              <h3 className={`font-bold text-sm mb-2 ${program.titleColor}`}>
                {program.title}
              </h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
