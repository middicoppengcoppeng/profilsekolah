# Panduan Aset Foto MIS DDI COPPENG COPPENG

Untuk mempermudah pengelolaan foto asli madrasah, saya telah membuatkan struktur folder khusus di dalam folder `public/images/`.

Saat Anda sudah memiliki foto aslinya, Anda hanya perlu:
1. Mengubah nama file foto sesuai dengan tabel di bawah.
2. Memasukkan foto tersebut ke dalam folder yang sesuai.
3. (Opsional) Jika nama file atau formatnya berbeda (misalnya `.png` atau `.jpg`), Anda bisa langsung mengganti referensinya di file komponen terkait.

---

## 1. Logo & Favicon
**Lokasi folder:** `public/` (langsung di luar)

| Nama File Harapan | Digunakan Di | Keterangan |
| :--- | :--- | :--- |
| `logo.png` | Navbar, Footer, About | Logo resmi MIS DDI COPPENG COPPENG (tanpa background / transparan) |
| `favicon.svg` atau `favicon.png` | Tab Browser | Ikon kecil untuk tab browser |
| `og-image.jpg` | Metadata SEO | Foto landscape yang muncul saat link website disebarkan di WhatsApp/Facebook (Rekomendasi ukuran: 1200x630px) |

---

## 2. Hero Section
**Lokasi folder:** `public/images/hero/`

| Nama File Harapan | Digunakan Di | Keterangan |
| :--- | :--- | :--- |
| `hero-bg.jpg` | `Hero.tsx` | Foto utama madrasah (gedung dari depan atau aktivitas siswa berskala besar). Gunakan foto kualitas tinggi. |

---

## 3. Fasilitas
**Lokasi folder:** `public/images/fasilitas/`

| Nama File Harapan | Digunakan Di | Keterangan |
| :--- | :--- | :--- |
| `kelas.jpg` | `Fasilitas.tsx` | Foto ruang kelas |
| `perpustakaan.jpg`| `Fasilitas.tsx` | Foto perpustakaan |
| `mushola.jpg` | `Fasilitas.tsx` | Foto mushola |
| `lapangan.jpg` | `Fasilitas.tsx` | Foto lapangan olahraga |
| `uks.jpg` | `Fasilitas.tsx` | Foto UKS |
| `toilet.jpg` | `Fasilitas.tsx` | Foto toilet/area cuci tangan |

---

## 4. Kegiatan
**Lokasi folder:** `public/images/kegiatan/`

| Nama File Harapan | Digunakan Di | Keterangan |
| :--- | :--- | :--- |
| `belajar.jpg` | `Kegiatan.tsx` | Foto suasana belajar di kelas |
| `upacara.jpg` | `Kegiatan.tsx` | Foto upacara bendera |
| `agama.jpg` | `Kegiatan.tsx` | Foto sholat dhuha / mengaji |
| `pramuka.jpg` | `Kegiatan.tsx` | Foto kegiatan pramuka |
| `lomba.jpg` | `Kegiatan.tsx` | Foto siswa saat lomba / menerima piala |
| `sosial.jpg` | `Kegiatan.tsx` | Foto kegiatan bakti sosial / peduli lingkungan |

---

## 5. Galeri
**Lokasi folder:** `public/images/galeri/`

| Nama File Harapan | Digunakan Di | Keterangan |
| :--- | :--- | :--- |
| `galeri-1.jpg` | `Galeri.tsx` | Foto dokumentasi bebas (akan ditampilkan paling besar) |
| `galeri-2.jpg` | `Galeri.tsx` | Foto dokumentasi bebas |
| `galeri-3.jpg` | `Galeri.tsx` | Foto dokumentasi bebas |
| `galeri-4.jpg` | `Galeri.tsx` | Foto dokumentasi bebas |
| `galeri-5.jpg` | `Galeri.tsx` | Foto dokumentasi bebas |
| `galeri-6.jpg` | `Galeri.tsx` | Foto dokumentasi bebas |
| `galeri-7.jpg` | `Galeri.tsx` | Foto dokumentasi bebas |
| `galeri-8.jpg` | `Galeri.tsx` | Foto dokumentasi bebas |

---

## Cara Menggunakan Foto di Komponen
Saat ini semua komponen masih menggunakan **SVG Placeholder**. Saat foto sudah ada, Anda bisa mengganti kode SVG dengan tag `<img>`.

**Contoh di `Fasilitas.tsx`:**

**Sebelum:**
```tsx
<div className="aspect-video bg-neutral-100 flex items-center justify-center ...">
  <svg>...</svg>
</div>
```

**Sesudah:**
```tsx
<div className="aspect-video rounded-xl overflow-hidden mb-4">
  <img 
    src="/images/fasilitas/kelas.jpg" 
    alt="Ruang Kelas" 
    className="w-full h-full object-cover" 
  />
</div>
```

*(Lakukan hal yang sama untuk `Hero.tsx`, `About.tsx`, `Kegiatan.tsx`, dan `Galeri.tsx`)*
