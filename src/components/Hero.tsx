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
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-700 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Main content — fills remaining height after navbar */}
      <div className="flex-1 pt-16 md:pt-20 flex items-center">
        <div className="container-custom w-full py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase mb-5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
                Madrasah Ibtidaiyah
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
                Pendidikan Dasar yang{' '}
                <span className="text-secondary-400">Membentuk Ilmu</span>{' '}
                dan Akhlak
              </h1>

              {/* Description */}
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                MIS DDI COPPENG COPPENG hadir untuk membentuk generasi muslim yang cerdas,
                berkarakter, dan berakhlak mulia melalui pendidikan dasar islami.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#ppdb"
                  onClick={(e) => handleNavClick(e, '#ppdb')}
                  className="btn-white text-sm py-2.5 px-6"
                  id="hero-cta-daftar"
                >
                  Daftar Sekarang
                </a>
                <a
                  href="#tentang"
                  onClick={(e) => handleNavClick(e, '#tentang')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-950"
                  id="hero-cta-profil"
                >
                  Lihat Profil
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 border-t border-white/10">
                {[
                  { number: '1979', label: 'Tahun Berdiri' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-white">{stat.number}</p>
                    <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm xl:max-w-md rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/hero/gedung.jpg"
                  alt="Gedung MIS DDI COPPENG COPPENG"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 -left-4 bg-white rounded-xl shadow-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Akreditasi</p>
                    <p className="font-bold text-neutral-900 text-sm">Akreditasi B</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L1440 50L1440 25C1200 50 960 0 720 16C480 32 240 0 0 25L0 50Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  )
}
