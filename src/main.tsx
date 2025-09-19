import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Only load Tina in development or when editing
const isEditMode = window.location.search.includes('tina-edit') || 
                   window.location.pathname.includes('/admin') ||
                   import.meta.env.DEV;
if (isEditMode) {
  // Dynamically import Tina only when needed
  import('./tina-wrapper').then(({ TinaWrapper }) => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <TinaWrapper>
          <App />
        </TinaWrapper>
      </StrictMode>
    );
  });
} else {
  // Regular app without Tina overhead
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
