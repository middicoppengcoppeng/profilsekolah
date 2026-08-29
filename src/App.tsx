import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Keunggulan from './components/Keunggulan'
import Program from './components/Program'
import Fasilitas from './components/Fasilitas'
import Kegiatan from './components/Kegiatan'
import Galeri from './components/Galeri'
import PPDB from './components/PPDB'
import Kontak from './components/Kontak'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="font-sans text-neutral-800 bg-neutral-50 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Keunggulan />
        <Program />
        <Fasilitas />
        <Kegiatan />
        <Galeri />
        <PPDB />
        <Kontak />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
