import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

type LoginLocationState = {
  from?: string;
};

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, loginAs } = useAuth();

  const state = location.state as LoginLocationState | null;
  const nextPath = state?.from ?? '/dashboard';

  if (isAuthenticated) {
    return <Navigate to={nextPath} replace />;
  }

  const handleLogin = (role: 'user' | 'admin') => {
    loginAs(role);
    navigate(nextPath, { replace: true });
  };

  return (
    <section>
      <h2 className="page-title">Masuk ke HydroSmart</h2>
      <p className="page-text">Pilih mode akses untuk simulasi autentikasi.</p>

      <div className="button-row">
        <button className="primary" type="button" onClick={() => handleLogin('user')}>
          Masuk sebagai User
        </button>
        <button type="button" onClick={() => handleLogin('admin')}>
          Masuk sebagai Admin
        </button>
      </div>
    </section>
  );
}
