import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

export type UserRole = 'user' | 'admin';

type AuthState = {
  isAuthenticated: boolean;
  role: UserRole;
  loginAs: (role: UserRole) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<UserRole>('user');

  const value = useMemo<AuthState>(
    () => ({
      isAuthenticated,
      role,
      loginAs: (nextRole) => {
        setRole(nextRole);
        setIsAuthenticated(true);
      },
      logout: () => {
        setRole('user');
        setIsAuthenticated(false);
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
