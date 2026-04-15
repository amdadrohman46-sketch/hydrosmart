# HydroSmart

Starter frontend untuk aplikasi mitigasi banjir HydroSmart (React + TypeScript + Vite).

## Struktur folder (rapi & tidak saling menimpa)

- `src/app` → bootstrap app (provider + routing).
- `src/components` → komponen reusable (shell, route guard).
- `src/contexts` → global state/context.
- `src/pages` → halaman route.

Setiap folder punya fungsi jelas supaya tidak tumpang tindih.

## Cara run (lokal)

### 1) Requirement
- Node.js 20+ (disarankan LTS)
- npm 10+

Cek versi:

```bash
node -v
npm -v
```

### 2) Install dependency

```bash
npm install
```

### 3) Jalankan development server

```bash
npm run dev
```

Aplikasi akan jalan di URL yang tampil di terminal (biasanya `http://localhost:5173`).

> Routing sekarang pakai **hash router**, jadi URL akan berbentuk `/#/login`, `/#/dashboard`, dll. Ini sengaja supaya UI tetap muncul walau server web tidak support SPA fallback.

## Script penting

- `npm run dev` → jalankan mode development.
- `npm run build` → build production.
- `npm run preview` → preview hasil build.

## Alur login demo

- Saat pertama buka app, kamu akan diarahkan ke halaman `/login`.
- Klik **Masuk sebagai User** atau **Masuk sebagai Admin**.
- Tombol **Logout** ada di header.

## Troubleshooting

### Error `403 Forbidden` saat `npm install`
Biasanya karena policy network/proxy di environment.

Coba:

```bash
npm config set registry https://registry.npmjs.org/
npm install
```

Kalau masih gagal, cek apakah jaringan kantor/VPN memblokir npm registry.

### Frontend blank / tidak muncul
Coba langkah ini:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```

Lalu buka `http://localhost:5173/#/login` langsung untuk memastikan route login muncul.
