import { createBrowserRouter, redirect } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./pages/Home').then(m => ({ Component: m.Home })),
  },
  {
    path: '/portfolio',
    lazy: () => import('./pages/Portfolio').then(m => ({ Component: m.Portfolio })),
  },
  {
    path: '/portfolio-demo',
    loader: () => redirect('/portfolio'),
    Component: () => null,
  },
  {
    path: '/mentions-legales',
    lazy: () => import('./pages/LegalNotice').then(m => ({ Component: m.LegalNotice })),
  },
  {
    path: '/politique-confidentialite',
    lazy: () => import('./pages/PrivacyPolicy').then(m => ({ Component: m.PrivacyPolicy })),
  },
  {
    path: '/cgv',
    lazy: () => import('./pages/TermsOfSale').then(m => ({ Component: m.TermsOfSale })),
  },
  {
    path: '*',
    lazy: () => import('./pages/NotFound').then(m => ({ Component: m.NotFound })),
  },
]);