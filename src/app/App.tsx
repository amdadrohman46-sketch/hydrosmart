import { RouterProvider } from 'react-router-dom';
import { AppProviders } from './providers';
import { appRouter } from './routes';

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={appRouter} />
    </AppProviders>
  );
}
