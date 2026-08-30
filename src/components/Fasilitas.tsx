import { useFadeIn } from '../hooks/useFadeIn'

const fasilitasList = [
  {
    id: 1,
    title: 'Ruang Kelas',
    img: '/images/fasilitas/ruang-kelas.jpg',
    desc: 'Ruang kelas yang nyaman, bersih, dan dilengkapi perabot belajar yang memadai untuk menunjang proses pembelajaran.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Perpustakaan',
    img: '/images/fasilitas/perpustakaan.jpg',
    desc: 'Koleksi buku pelajaran, buku cerita, dan referensi islami yang beragam untuk mendukung budaya membaca siswa.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Mushola',
    img: '/images/fasilitas/mushola.jpg',
    desc: 'Tempat ibadah yang bersih dan representatif untuk sholat berjamaah, pembiasaan ibadah, dan kegiatan keagamaan.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Lapangan Olahraga',
    img: '/images/fasilitas/lapangan.jpg',
    desc: 'Lapangan yang cukup luas untuk kegiatan olahraga, upacara bendera, dan berbagai aktivitas luar ruangan siswa.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'UKS',
    img: '/images/fasilitas/uks.jpg',
    desc: 'Unit Kesehatan Sekolah yang siap memberikan pertolongan pertama dan memantau kesehatan siswa sehari-hari.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Toilet & Sanitasi',
    img: '/images/fasilitas/ruang-kelas.jpg',
    desc: 'Toilet yang bersih, terpisah antara putra dan putri, serta fasilitas cuci tangan yang memadai.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
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
            <div key={item.id} className="group">
              {/* Photo */}
              <div className="aspect-video rounded-xl overflow-hidden mb-4 group-hover:shadow-md transition-shadow duration-300">
                <img
                  src={item.img}
                  alt={`Foto ${item.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
