import { lazy } from 'react';

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));

export interface Route {
  path: string;
  component: React.ComponentType;
}

export const routes: Route[] = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/register',
    component: () => <RegisterPage />,
  },
  {
    path: '/reset-password',
    component: () => <div>reset-password</div>,
  },
];
