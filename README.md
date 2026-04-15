# HydroSmart

Starter frontend untuk aplikasi mitigasi banjir HydroSmart (React + TypeScript + Vite).

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
