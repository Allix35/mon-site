import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { LegalNotice } from './pages/LegalNotice';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfSale } from './pages/TermsOfSale';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/mentions-legales',
    Component: LegalNotice,
  },
  {
    path: '/politique-confidentialite',
    Component: PrivacyPolicy,
  },
  {
    path: '/cgv',
    Component: TermsOfSale,
  },
]);
