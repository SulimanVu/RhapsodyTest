import { lazy } from 'react';

const AppLogin = lazy(() => import('login/App'));
// const AppUno = lazy(() => import('uno/App'));

export interface Route {
  path: string;
  component: React.ComponentType;
}

export const routes: Route[] = [
  {
    path: '/login/*',
    component: AppLogin,
  },
  // {
  //   path: '/uno',
  //   component: AppUno,
  // }
];
