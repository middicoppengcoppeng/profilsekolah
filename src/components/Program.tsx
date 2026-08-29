import { useFadeIn } from '../hooks/useFadeIn'

const programs = [
  {
    id: 1,
    emoji: '📖',
    title: 'Tahfidz Al-Qur\'an',
    desc: 'Program hafalan Al-Qur\'an yang terstruktur, membimbing siswa menghafal ayat-ayat suci dengan tajwid yang benar.',
    color: 'bg-emerald-50 border-emerald-200',
    titleColor: 'text-emerald-800',
  },
  {
    id: 2,
    emoji: '🕌',
    title: 'Bahasa Arab',
    desc: 'Pembelajaran bahasa Arab sebagai bahasa Al-Qur\'an, membekali siswa dengan kemampuan membaca dan memahami teks Arab.',
    color: 'bg-blue-50 border-blue-200',
    titleColor: 'text-blue-800',
  },
  {
    id: 3,
    emoji: '📚',
    title: 'Literasi',
    desc: 'Program literasi yang membangun kemampuan membaca, menulis, dan berpikir kritis pada siswa sejak dini.',
    color: 'bg-violet-50 border-violet-200',
    titleColor: 'text-violet-800',
  },
  {
    id: 4,
    emoji: '🔢',
    title: 'Numerasi',
    desc: 'Penguatan kemampuan berhitung dan logika matematika melalui pendekatan yang menyenangkan dan kontekstual.',
    color: 'bg-orange-50 border-orange-200',
    titleColor: 'text-orange-800',
  },
  {
    id: 5,
    emoji: '⚜️',
    title: 'Pramuka',
    desc: 'Kegiatan kepramukaan yang melatih kedisiplinan, kepemimpinan, kemandirian, dan jiwa kesetiakawanan.',
    color: 'bg-amber-50 border-amber-200',
    titleColor: 'text-amber-800',
  },
  {
    id: 6,
    emoji: '⚽',
    title: 'Olahraga',
    desc: 'Kegiatan olahraga yang mendukung kesehatan fisik dan mental siswa serta membentuk semangat sportivitas.',
    color: 'bg-sky-50 border-sky-200',
    titleColor: 'text-sky-800',
  },
  {
    id: 7,
    emoji: '🌙',
    title: 'Kegiatan Keagamaan',
    desc: 'Sholat berjamaah, doa bersama, peringatan hari besar Islam, dan kegiatan keagamaan lainnya.',
    color: 'bg-primary-50 border-primary-200',
    titleColor: 'text-primary-800',
  },
  {
    id: 8,
    emoji: '🎨',
    title: 'Seni & Kreativitas',
    desc: 'Pengembangan bakat seni dan kreativitas siswa melalui berbagai kegiatan seni yang menyenangkan.',
    color: 'bg-rose-50 border-rose-200',
    titleColor: 'text-rose-800',
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
