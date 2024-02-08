import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App';

const root = createRoot(document.getElementById('app-shell')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
