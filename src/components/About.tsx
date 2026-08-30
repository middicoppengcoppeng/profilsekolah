import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const imageRef = useFadeIn()
  const textRef = useFadeIn()

  const stats = [
    { label: 'Tahun Berdiri', value: '1979' },
    { label: 'Status Akreditasi', value: 'B' },
    { label: 'Jumlah Siswa', value: '23' },
    { label: 'Tenaga Pendidik', value: '9' },
  ]

  return (
    <section
      id="tentang"
      className="py-20 lg:py-28 bg-neutral-50"
      aria-labelledby="tentang-title"
    >
      <div className="container-custom">
        <div className="flex flex-col gap-12 lg:gap-16 max-w-4xl mx-auto items-center">
          {/* Image Side */}
          <div className="relative fade-in-section w-full" ref={imageRef as React.RefObject<HTMLDivElement>}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-primary-200 shadow-md">
              <img
                src="/images/hero/foto madrasah.jpeg"
                alt="Foto MIS DDI COPPENG COPPENG"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
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
          <div className="mt-12 lg:mt-0 fade-in-section w-full" ref={textRef as React.RefObject<HTMLDivElement>}>
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

            {/* Visi, Misi, Tujuan */}
            <div className="space-y-4">
              {/* Visi */}
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
                    <p className="text-neutral-600 text-sm leading-relaxed mb-2 font-medium">
                      “Mewujudkan Madrasah Ibtidaiyah yang Religius, Inovatif dan Kompetitif”
                    </p>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-1">Indikator:</p>
                    <ul className="text-neutral-600 text-sm space-y-1 list-decimal ml-4">
                      <li>Terwujudnya sikap religius beriman dan bertakwa kepada Allah SWT dalam aktivitas hidup sehari-hari.</li>
                      <li>Terwujudnya pengembangan kurikulum madrasah unggulan yang menerapkan pembelajaran aktif, kreatif dan inovatif.</li>
                      <li>Terwujudnya semangat berprestasi dan berdaya saing bidang akademik dan non-akademik.</li>
                      <li>Terwujudnya sikap peduli dan berbudaya lingkungan yang melaksanakan upaya pelestarian lingkungan.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Misi */}
              <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Misi</h3>
                    <ul className="text-neutral-600 text-sm space-y-1 list-decimal ml-4">
                      <li>Menyelenggarakan kegiatan religius yang mendukung penguatan aqidah, ibadah, akhlak, dan silaturrahim.</li>
                      <li>Menyelenggarakan kegiatan keagamaan secara kontinyu untuk memperkuat silaturahim antar guru, orang tua dan masyarakat.</li>
                      <li>Mewujudkan madrasah ibtidaiyah yang religious, inovatif dan kompetitif.</li>
                      <li>Meningkatkan kemampuan guru dalam melakukan berbagai inovasi pendidikan dan pembelajaran.</li>
                      <li>Mengembangkan model-model pembelajaran inovatif untuk memperkuat sinergitas kecerdasan intelektual, emosional dan spiritual siswa.</li>
                      <li>Menyediakan fasilitas pembelajaran yang menunjang terwujudnya kreatifitas siswa.</li>
                      <li>Meningkatkan wawasan peserta didik dalam melakukan inovasi dengan memanfaatkan lingkungan sekitar.</li>
                      <li>Menyiapkan Madrasah yang kompetitif di bidang sains dan sosial humaniora.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tujuan */}
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Tujuan</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-2">
                      Dengan berpedoman pada Visi dan Misi yang telah dirumuskan serta kondisi di madrasah, tujuan yang ingin dicapai adalah:
                    </p>
                    <ul className="text-neutral-600 text-sm space-y-1 list-decimal ml-4">
                      <li>Terselenggaranya kegiatan religius yang mendukung penguatan aqidah, ibadah, akhlak, dan silaturrahim.</li>
                      <li>Terselenggaranya kegiatan keagamaan secara kontinyu untuk memperkuat silaturahim antar guru, orang tua dan masyarakat.</li>
                      <li>Menyiapkan guru dan staf sebagai suri tauladan bagi siswa dalam penegakan aqidah, ibadah dan akhlak.</li>
                      <li>Meningkatnya kemampuan guru dalam melakukan berbagai inovasi pendidikan dan pembelajaran.</li>
                      <li>Terselenggaranya model-model pembelajaran inovatif untuk memperkuat sinergitas kecerdasan intelektual, emosional dan spiritual siswa.</li>
                      <li>Tersedianya fasilitas pembelajaran yang menunjang terwujudnya kreatifitas siswa.</li>
                      <li>Terwujudnya wawasan dan pengalaman peserta didik dalam melakukan inovasi dangan memanfaatkan lingkungan sekitar.</li>
                      <li>Tersedianya Madrasah yang kompetitif dibidang sains dan sosial humaniora.</li>
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
