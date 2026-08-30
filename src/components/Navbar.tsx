import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Program', href: '#program' },
  { label: 'Fasilitas', href: '#fasilitas' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'PPDB', href: '#ppdb' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-neutral-100 shadow-sm'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo & Name */}
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, '#beranda')}
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
          aria-label="MIS DDI COPPENG COPPENG - Beranda"
        >
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Logo MIS DDI COPPENG"
            className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
          />
          <div className="hidden sm:block">
            <p className="font-bold text-neutral-900 text-sm md:text-base leading-tight">MIS DDI COPPENG COPPENG</p>
            <p className="text-neutral-500 text-xs">Desa Soga, Kec. Marioriwawo, Kab. Soppeng</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#ppdb"
            onClick={(e) => handleNavClick(e, '#ppdb')}
            className="btn-primary hidden sm:inline-flex text-sm py-2 px-4"
            id="navbar-cta-daftar"
          >
            Daftar Sekarang
          </a>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
          >
            <span className="block w-5 h-0.5 bg-neutral-700 mb-1.5 transition-all duration-200" />
            <span className={`block w-5 h-0.5 bg-neutral-700 mb-1.5 transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className="block w-5 h-0.5 bg-neutral-700 transition-all duration-200" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-white border-t border-neutral-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-100">
            <a
              href="#ppdb"
              onClick={(e) => handleNavClick(e, '#ppdb')}
              className="btn-primary w-full justify-center"
              id="mobile-cta-daftar"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
