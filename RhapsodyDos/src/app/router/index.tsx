import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Suspense>
);

export default Router;
