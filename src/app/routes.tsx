import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import AdminDashboard from '../pages/AdminDashboard';
import Dashboard from '../pages/Dashboard';
import Mitigation from '../pages/Mitigation';
import NotFound from '../pages/NotFound';
import Prediction from '../pages/Prediction';
import Profile from '../pages/Profile';

function withShell(element: JSX.Element) {
  return <AppShell>{element}</AppShell>;
}

export const appRouter = createBrowserRouter([
  { path: '/', element: <Navigate to="/dashboard" replace /> },
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
  { path: '*', element: <NotFound /> },
]);
