import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  const stats = [
    { label: 'Tahun Berdiri', value: '1990' },
    { label: 'Status Akreditasi', value: 'Terakreditasi' },
    { label: 'Jumlah Siswa', value: '300+' },
    { label: 'Tenaga Pendidik', value: '20+' },
  ]

  return (
    <section
      id="tentang"
      className="py-20 lg:py-28 bg-neutral-50"
      aria-labelledby="tentang-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative fade-in-section" ref={ref as React.RefObject<HTMLDivElement>}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-primary-100 border border-primary-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-300 gap-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">Foto Madrasah</p>
                <p className="text-xs text-primary-200">Ganti dengan foto asli</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-secondary-100 rounded-2xl -z-10" />
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />

            {/* Stats grid */}
            <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl shadow-md px-4 py-3 border border-neutral-100">
                  <p className="font-bold text-primary-700 text-lg leading-tight">{stat.value}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Side */}
          <div className="mt-12 lg:mt-0 fade-in-section" ref={useFadeIn() as React.RefObject<HTMLDivElement>}>
            <span className="section-tag">Tentang Kami</span>
            <h2 id="tentang-title" className="section-title">
              Mengenal MIS DDI COPPENG COPPENG
            </h2>

            <p className="text-neutral-600 leading-relaxed mb-6">
              Madrasah Ibtidaiyah DDI Coppeng adalah lembaga pendidikan dasar Islam yang telah berdiri 
              sejak tahun 1990 di Desa Soga, Kec. Marioriwawo, Kab. Soppeng. Madrasah ini bernaung di bawah Darud Da'wah 
              Wal-Irsyad (DDI) dan berkomitmen untuk memberikan pendidikan berkualitas yang mengintegrasikan 
              ilmu pengetahuan umum dengan nilai-nilai keislaman.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-8">
              Selama puluhan tahun, MIS DDI COPPENG COPPENG telah melahirkan ribuan alumni yang sukses di berbagai 
              bidang. Kami terus berupaya meningkatkan kualitas pendidikan agar setiap siswa dapat tumbuh 
              menjadi pribadi yang cerdas, berakhlak mulia, dan siap menghadapi tantangan zaman.
            </p>

            {/* Visi Misi */}
            <div className="space-y-4">
              <div className="p-4 bg-primary-50 rounded-xl border border-primary-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Visi</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Terwujudnya madrasah yang unggul dalam prestasi, berkarakter islami, dan berdaya saing global.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Misi</h3>
                    <ul className="text-neutral-600 text-sm space-y-1">
                      <li>• Menyelenggarakan pendidikan yang mengintegrasikan ilmu umum dan agama</li>
                      <li>• Membentuk karakter siswa yang disiplin, mandiri, dan bertanggung jawab</li>
                      <li>• Menciptakan lingkungan belajar yang nyaman, aktif, dan menyenangkan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
