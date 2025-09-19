import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TinaProvider, TinaCMS } from 'tinacms';
import App from './App.tsx';
import './index.css';

// Import Tina config
import config from '../.tina/config';

// Create TinaCMS instance
const cms = new TinaCMS(config);

// Create React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TinaProvider cms={cms}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </TinaProvider>
    </QueryClientProvider>
  </StrictMode>,
);