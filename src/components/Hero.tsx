const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center bg-primary-950 overflow-hidden pt-16 md:pt-20"
      aria-label="Hero section"
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              Madrasah Ibtidaiyah
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Pendidikan Dasar yang{' '}
              <span className="text-secondary-400">Membentuk Ilmu</span>{' '}
              dan Akhlak
            </h1>

            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              MIS DDI COPPENG COPPENG hadir untuk membentuk generasi muslim yang cerdas, berkarakter, 
              dan berakhlak mulia melalui pendidikan dasar yang mengintegrasikan ilmu umum 
              dengan nilai-nilai keislaman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#ppdb"
                onClick={(e) => handleNavClick(e, '#ppdb')}
                className="btn-white text-base py-3 px-7"
                id="hero-cta-daftar"
              >
                Daftar Sekarang
              </a>
              <a
                href="#tentang"
                onClick={(e) => handleNavClick(e, '#tentang')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-950"
                id="hero-cta-profil"
              >
                Lihat Profil
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { number: '1990', label: 'Tahun Berdiri' },
                { number: '300+', label: 'Siswa Aktif' },
                { number: '20+', label: 'Tenaga Pendidik' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.number}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-primary-800/50 border border-white/10">
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 gap-4">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">Foto Gedung Madrasah</p>
                <p className="text-xs text-white/20">Ganti dengan foto asli</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Akreditasi</p>
                  <p className="font-bold text-neutral-900 text-sm">Terakreditasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 0 0 30L0 60Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  )
}
