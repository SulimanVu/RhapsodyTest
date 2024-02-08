import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

const root = createRoot(document.getElementById('app-login')!);
root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
