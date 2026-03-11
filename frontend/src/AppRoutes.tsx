/* eslint-disable react/jsx-sort-props */
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTernaryDarkMode } from 'usehooks-ts';

import { useAuth } from './hooks';
import { useSyncColorScheme } from './hooks/useSyncColorScheme';
import Layout from './pages/Layout';
import routes from './routes';
import ScrollToTop from './utils/scrollToTop';

import DefaultLoader from './components/Loaders/DefaultLoader';
import ProfileEditPage from './pages/ProfileEditFormPage/ProfileEditForm';
import ProtectedRoute from './routes/components/ProtectedRoute';

const ProfilePageNew = lazy(() => import('./pages/ProfilePage'));
const Landing = lazy(() => import('./pages/landing/home-page'));

const SettingsPage = lazy(() => import('./pages/settings'));
const SnippetPage = lazy(() => import('./pages/snippet'));
const AboutPage = lazy(() => import('./pages/about'));
const SignUpPage = lazy(() => import('./pages/signup'));
const SignInPage = lazy(() => import('./pages/signin'));
const LicenseAgreement = lazy(() => import('./pages/license-agreement'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'));
const PublicOffer = lazy(() => import('./pages/publicOffer'));
const ConsentToProcesing = lazy(() => import('./pages/consentToProcessing'));
const ForgotPasswordPage = lazy(() => import('./pages/forgot-password'));
const ResetPasswordPage = lazy(() => import('./pages/reset-password'));
const NotFoundPage = lazy(() => import('./pages/404'));
const EmbeddedPage = lazy(() => import('./pages/embed'));

function AppRoutes() {
  const { isLoggedIn, isAuthResolved } = useAuth();
  const { isDarkMode } = useTernaryDarkMode();

  useSyncColorScheme(isDarkMode);

  if (!isAuthResolved) {
    return <DefaultLoader />;
  }

  return (
    <Suspense fallback={<DefaultLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path={routes.profilePageNew()} element={<ProfilePageNew />} />
        <Route path={routes.editProfilePath()} element={<ProfileEditPage />} />
        <Route
          path={routes.licenseAgreementPath()}
          element={<LicenseAgreement />}
        />
        <Route path={routes.privacyPolicyPath()} element={<PrivacyPolicy />} />
        <Route path={routes.publicOfferPath()} element={<PublicOffer />} />
        <Route
          path={routes.consentToProcessingPath()}
          element={<ConsentToProcesing />}
        />
        <Route index element={<Landing />} />
        <Route element={<Layout />}>
          <Route path={routes.homePagePath()} element={<SnippetPage />} />
          <Route path={routes.snippetPagePath()} element={<SnippetPage />} />
          <Route path={routes.aboutPagePath()} element={<AboutPage />} />
          <Route
            element={
              <ProtectedRoute
                redirectTo={routes.signInPagePath()}
                isAllowed={isLoggedIn}
              />
            }
          >
            <Route
              path={routes.settingsPagePath()}
              element={<SettingsPage />}
            />
          </Route>

          <Route
            element={
              <ProtectedRoute
                redirectTo={routes.myProfilePagePath()}
                isAllowed={!isLoggedIn}
              />
            }
          >
            <Route path={routes.signUpPagePath()} element={<SignUpPage />} />
            <Route path={routes.signInPagePath()} element={<SignInPage />} />
          </Route>

          <Route
            path={routes.forgotPassPagePath()}
            element={<ForgotPasswordPage />}
          />
          <Route
            path={routes.resetPassPagePath()}
            element={<ResetPasswordPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route
          path={routes.embedSnippetPagePath()}
          element={<EmbeddedPage />}
        />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
