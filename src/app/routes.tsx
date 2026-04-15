import type { ReactElement } from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import AppShell from '../components/layout/AppShell';
import { useAuth } from '../contexts/AuthContext';
import AdminDashboard from '../pages/AdminDashboard';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Mitigation from '../pages/Mitigation';
import NotFound from '../pages/NotFound';
import Prediction from '../pages/Prediction';
import Profile from '../pages/Profile';

function withShell(element: ReactElement) {
  return <AppShell>{element}</AppShell>;
}

function HomeRedirect() {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />;
}

function NotFoundRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return withShell(<NotFound />);
  }

  return <NotFound />;
}

export const appRouter = createHashRouter([
  { path: '/', element: <HomeRedirect /> },
  { path: '/login', element: <Login /> },
  {
    path: '/dashboard',
    element: <ProtectedRoute>{withShell(<Dashboard />)}</ProtectedRoute>,
  },
  {
    path: '/prediction',
    element: <ProtectedRoute>{withShell(<Prediction />)}</ProtectedRoute>,
  },
  {
    path: '/mitigation',
    element: <ProtectedRoute>{withShell(<Mitigation />)}</ProtectedRoute>,
  },
  {
    path: '/profile',
    element: <ProtectedRoute>{withShell(<Profile />)}</ProtectedRoute>,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute adminOnly>
        {withShell(<AdminDashboard />)}
      </ProtectedRoute>
    ),
  },
  { path: '*', element: <NotFoundRoute /> },
]);
