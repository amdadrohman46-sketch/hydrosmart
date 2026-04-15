import type { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Prediction', to: '/prediction' },
  { label: 'Mitigation', to: '/mitigation' },
  { label: 'Profile', to: '/profile' },
  { label: 'Admin', to: '/admin' },
];

export default function AppShell({ children }: PropsWithChildren) {
  const location = useLocation();
  const { role, logout } = useAuth();

  const getNavLinkClassName = (to: string) =>
    location.pathname === to ? 'app-nav-link active' : 'app-nav-link';

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1 className="app-title">HydroSmart</h1>
          <small className="app-role">Role aktif: {role}</small>
        </div>

        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>

      <nav className="app-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.to} to={item.to} className={getNavLinkClassName(item.to)}>
            {item.label}
          </Link>
        ))}
      </nav>

      <main className="app-content">{children}</main>
    </div>
  );
}
