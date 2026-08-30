import { useFadeIn } from '../hooks/useFadeIn'

const fasilitasList = [
  {
    id: 1,
    title: 'Ruang Kelas',
    icon: '🏫',
    desc: 'Tempat belajar yang nyaman.',
  },
  {
    id: 2,
    title: 'Ruang Guru',
    icon: '👨‍🏫',
    desc: 'Ruang kerja dan istirahat untuk dewan guru.',
  },
  {
    id: 3,
    title: 'Ruang Kepala Madrasah',
    icon: '🏢',
    desc: 'Ruang khusus untuk Kepala Madrasah.',
  },
  {
    id: 4,
    title: 'Tempat Ibadah',
    icon: '🕌',
    desc: 'Tempat untuk kegiatan keagamaan dan shalat berjamaah.',
  },
  {
    id: 5,
    title: 'Perpustakaan',
    icon: '📚',
    desc: 'Pusat literasi dan sumber belajar siswa.',
  },
  {
    id: 6,
    title: 'Lab. IPA',
    icon: '🔬',
    desc: 'Fasilitas untuk kegiatan praktikum sains.',
  },
  {
    id: 7,
    title: 'Lapangan Olahraga',
    icon: '⚽',
    desc: 'Area untuk kegiatan olahraga dan ekstrakurikuler.',
  },
  {
    id: 8,
    title: 'Ruang TIK',
    icon: '💻',
    desc: 'Laboratorium komputer untuk pembelajaran digital.',
  },
  {
    id: 9,
    title: 'UKS',
    icon: '🏥',
    desc: 'Unit Kesehatan Sekolah untuk pertolongan pertama.',
  },
  {
    id: 10,
    title: 'Kantin',
    icon: '🍽️',
    desc: 'Menyediakan makanan dan minuman sehat untuk siswa.',
  },
  {
    id: 11,
    title: 'Toilet',
    icon: '🚻',
    desc: 'Fasilitas sanitasi yang bersih dan memadai.',
  },
  {
    id: 12,
    title: 'WiFi',
    icon: '📶',
    desc: 'Akses internet untuk menunjang pembelajaran.',
  },
]

export default function Fasilitas() {
  const ref = useFadeIn()

  return (
    <section
      id="fasilitas"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="fasilitas-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 fade-in-section"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <span className="section-tag">Fasilitas</span>
          <h2 id="fasilitas-title" className="section-title">
            Fasilitas Madrasah
          </h2>
          <p className="section-subtitle">
            Fasilitas yang memadai untuk mendukung proses belajar mengajar yang 
            nyaman dan kondusif bagi seluruh siswa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fasilitasList.map((item) => (
            <div key={item.id} className="group p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-2xl flex-shrink-0 border border-primary-100 group-hover:bg-primary-100 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
