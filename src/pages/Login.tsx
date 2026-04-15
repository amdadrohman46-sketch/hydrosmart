import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

type Role = 'user' | 'admin';

const roleButtons: Array<{ label: string; role: Role; className?: string }> = [
  { label: 'Masuk sebagai User', role: 'user', className: 'primary' },
  { label: 'Masuk sebagai Admin', role: 'admin' },
];

export default function Login() {
  const navigate = useNavigate();
  const { loginAs } = useAuth();

  const handleLogin = (role: Role) => {
    loginAs(role);
    navigate('/dashboard', { replace: true });
  };

  return (
    <section>
      <h2 className="page-title">Masuk ke HydroSmart</h2>
      <p className="page-text">Pilih mode akses untuk simulasi autentikasi.</p>

      <div className="button-row">
        {roleButtons.map(({ label, role, className }) => (
          <button
            key={role}
            className={className}
            type="button"
            onClick={() => handleLogin(role)}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
