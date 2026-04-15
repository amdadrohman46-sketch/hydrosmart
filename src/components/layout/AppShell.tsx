import type { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Prediction', to: '/prediction' },
  { label: 'Mitigation', to: '/mitigation' },
  { label: 'Profile', to: '/profile' },
  { label: 'Admin', to: '/admin' },
];

export default function AppShell({ children }: PropsWithChildren) {
  const location = useLocation();
  const { role, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white px-4 py-3">
        <h1 className="font-semibold">HydroSmart</h1>
        <small>Role: {role}</small>
        <div>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </header>
      <nav className="flex gap-2 overflow-x-auto border-b bg-white px-4 py-2 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? 'font-semibold text-blue-600' : 'text-slate-600'}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <main className="mx-auto max-w-5xl p-4">{children}</main>
    </div>
  );
}
