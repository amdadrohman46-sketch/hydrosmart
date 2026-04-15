import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

export type UserRole = 'user' | 'admin';

type AuthState = {
  isAuthenticated: boolean;
  role: UserRole;
  loginAs: (role: UserRole) => void;
  logout: () => void;
};

type StoredAuth = {
  isAuthenticated: boolean;
  role: UserRole;
};

const AUTH_STORAGE_KEY = 'hydrosmart-auth';

function readStoredAuth(): StoredAuth {
  if (typeof window === 'undefined') {
    return { isAuthenticated: false, role: 'user' };
  }

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) {
    return { isAuthenticated: false, role: 'user' };
  }

  try {
    const parsed = JSON.parse(raw) as Partial<StoredAuth>;
    if (parsed.isAuthenticated === true && (parsed.role === 'user' || parsed.role === 'admin')) {
      return { isAuthenticated: true, role: parsed.role };
    }
  } catch {
    // ignore invalid stored auth and fallback to defaults
  }

  return { isAuthenticated: false, role: 'user' };
}

const initialAuth = readStoredAuth();
const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth.isAuthenticated);
  const [role, setRole] = useState<UserRole>(initialAuth.role);

  const value = useMemo<AuthState>(
    () => ({
      isAuthenticated,
      role,
      loginAs: (nextRole) => {
        const nextAuth: StoredAuth = { isAuthenticated: true, role: nextRole };
        setRole(nextRole);
        setIsAuthenticated(true);
        window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth));
      },
      logout: () => {
        setRole('user');
        setIsAuthenticated(false);
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
      },
    }),
    [isAuthenticated, role],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
}
