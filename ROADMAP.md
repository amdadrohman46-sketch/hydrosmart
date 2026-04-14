# HydroSmart Development Blueprint

Dokumen ini menerjemahkan ide essay HydroSmart menjadi fondasi codebase yang siap dikembangkan bertahap.

## Product direction
- Mobile-first PWA untuk masyarakat umum dan admin BPBD.
- Stack awal: React + TypeScript + Vite, Tailwind, React Query.
- Role access: `user` dan `admin`.

## Feature mapping
1. **Dashboard**: status banjir, level risiko, cuaca singkat, alert terakhir.
2. **Prediction**: prediksi hujan 7 hari, risk scoring, tren, rekomendasi otomatis.
3. **Mitigation**: checklist siaga, jalur evakuasi, nomor darurat.
4. **Profile**: lokasi user, preferensi notifikasi, riwayat alert.
5. **Admin Dashboard**: broadcast alert, validasi laporan warga, override status bahaya.

## Development phases
1. **MVP**: auth + routing + halaman dasar.
2. **Integrasi data**: cuaca, lokasi, status risiko per wilayah.
3. **AI prediction**: klasifikasi aman/siaga/bahaya + rekomendasi.
4. **Mitigasi lanjutan**: notifikasi berbasis zona + simulasi evakuasi.
5. **Skalabilitas admin**: monitoring, audit log, export, offline mode.

## Initial architecture implemented in this repo
- `src/app`: bootstrap aplikasi, routes, provider root.
- `src/contexts`: state global auth.
- `src/components`: shell layout dan route guard.
- `src/pages`: halaman inti sesuai essay.
- `src/features`: slot modul domain untuk integrasi API dan AI berikutnya.
