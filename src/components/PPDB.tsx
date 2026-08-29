import { useFadeIn } from '../hooks/useFadeIn'

// Nomor WhatsApp panitia PPDB — ganti dengan nomor resmi
const WA_NUMBER = '6281234567890'
const WA_MESSAGE = encodeURIComponent('Halo, saya ingin mendapatkan informasi mengenai pendaftaran siswa baru MIS DDI Coppeng - Coppeng.')

const persyaratan = [
  'Berusia 6–7 tahun pada saat masuk (atau memenuhi syarat usia)',
  'Fotokopi akta kelahiran (3 lembar)',
  'Fotokopi Kartu Keluarga (3 lembar)',
  'Fotokopi Kartu Tanda Penduduk orang tua (3 lembar)',
  'Pas foto terbaru ukuran 3×4 (4 lembar)',
  'Surat keterangan sehat dari dokter',
]

export default function PPDB() {
  const ref = useFadeIn()

  return (
    <section
      id="ppdb"
      className="py-20 lg:py-28 bg-primary-950 text-white relative overflow-hidden"
      aria-labelledby="ppdb-title"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-700 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary-400 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 fade-in-section"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wide uppercase mb-4 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
            Penerimaan Peserta Didik Baru
          </span>
          <h2 id="ppdb-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            PPDB Tahun Ajaran 2025/2026
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            MIS DDI Coppeng - Coppeng membuka pendaftaran siswa baru untuk tahun ajaran 2025/2026. 
            Daftarkan putra-putri Anda sekarang dan jadikan mereka generasi muslim yang 
            cerdas dan berakhlak mulia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Info PPDB */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Informasi Pendaftaran</h3>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Tahun Ajaran', value: '2025 / 2026' },
                { label: 'Periode Pendaftaran', value: 'Januari – Juni 2025' },
                { label: 'Lokasi Pendaftaran', value: 'Kantor MIS DDI Coppeng - Desa Soga, Kec. Marioriwawo, Kab. Soppeng' },
                { label: 'Jam Layanan', value: 'Senin – Sabtu, 08.00 – 12.00 WITA' },
                { label: 'Kontak Panitia', value: '0812-XXXX-XXXX (Placeholder)' },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3 border-b border-white/10 pb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs">{info.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
                id="ppdb-cta-daftar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Daftar Sekarang via WA
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                id="ppdb-cta-hubungi"
              >
                Hubungi Panitia
              </a>
            </div>
          </div>

          {/* Persyaratan */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Persyaratan Pendaftaran</h3>
            <div className="space-y-3">
              {persyaratan.map((syarat, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-secondary-500/30 border border-secondary-400/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-400 text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{syarat}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-secondary-500/10 rounded-xl border border-secondary-400/20">
              <p className="text-secondary-300 text-sm">
                <strong className="text-secondary-400">Catatan:</strong>{' '}
                Untuk informasi lebih lanjut mengenai persyaratan, jadwal, dan teknis pendaftaran, 
                silakan hubungi panitia PPDB melalui WhatsApp atau datang langsung ke madrasah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
