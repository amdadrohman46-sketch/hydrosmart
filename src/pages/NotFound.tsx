import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Halaman tidak ditemukan</h2>
      <Link to="/dashboard" className="mt-2 inline-block text-blue-600">
        Kembali ke dashboard
      </Link>
    </section>
  );
}
