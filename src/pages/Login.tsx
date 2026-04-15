import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { loginAs } = useAuth();

  const handleLogin = (role: 'user' | 'admin') => {
    loginAs(role);
    navigate('/dashboard', { replace: true });
  };

  return (
    <section>
      <h2 className="page-title">Masuk ke HydroSmart</h2>
      <p className="page-text">Pilih mode akses untuk simulasi autentikasi.</p>
      <div className="button-row">
        <button className="primary" type="button" onClick={() => handleLogin('user')}>
      <h2 className="text-xl font-semibold">Masuk ke HydroSmart</h2>
      <p className="mt-2 text-slate-600">Pilih mode akses untuk simulasi autentikasi.</p>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => handleLogin('user')}>
          Masuk sebagai User
        </button>
        <button type="button" onClick={() => handleLogin('admin')}>
          Masuk sebagai Admin
        </button>
      </div>
    </section>
  );
}
