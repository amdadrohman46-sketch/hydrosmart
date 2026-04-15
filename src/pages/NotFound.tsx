import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h2 className="page-title">Halaman tidak ditemukan</h2>
      <p className="page-text">
        Kembali ke <Link to="/dashboard">dashboard</Link>.
      </p>
    </section>
  );
}
