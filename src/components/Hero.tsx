const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative h-screen flex flex-col bg-primary-950 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/foto madrasah.jpeg"
          alt="Background Gedung MIS DDI COPPENG COPPENG"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/80" />
      </div>

      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-700 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/3 pointer-events-none z-0" />

      {/* Main content — fills remaining height after navbar */}
      <div className="flex-1 pt-16 md:pt-20 flex items-center relative z-10">
        <div className="container-custom w-full py-8 flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-block px-5 py-1.5 rounded-full bg-secondary-500/90 text-white text-xs font-bold tracking-widest uppercase mb-5 shadow-sm backdrop-blur-sm">
            Madrasah Ibtidaiyah
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl">
            Pendidikan Dasar yang{' '}
            <span className="text-secondary-400">Membentuk Ilmu</span>{' '}
            dan Akhlak
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
            MIS DDI COPPENG COPPENG hadir untuk membentuk generasi muslim yang cerdas,
            berkarakter, dan berakhlak mulia melalui pendidikan dasar islami.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#ppdb"
              onClick={(e) => handleNavClick(e, '#ppdb')}
              className="btn-white text-sm py-3 px-8"
              id="hero-cta-daftar"
            >
              Daftar Sekarang
            </a>
            <a
              href="#tentang"
              onClick={(e) => handleNavClick(e, '#tentang')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-950"
              id="hero-cta-profil"
            >
              Lihat Profil
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats & Akreditasi */}
          <div className="flex flex-wrap justify-center gap-8 pt-2 border-t border-white/20 min-w-[200px]">
            <div>
              <p className="text-2xl font-bold text-white">1979</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Tahun Berdiri</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">B</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Akreditasi</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L1440 50L1440 25C1200 50 960 0 720 16C480 32 240 0 0 25L0 50Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  )
}
