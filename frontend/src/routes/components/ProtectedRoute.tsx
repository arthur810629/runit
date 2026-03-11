import { Navigate, Outlet } from 'react-router-dom';

import routes from '../../routes';

type ProtectedRouteProps = {
  isAllowed: boolean;
  redirectTo?: string;
};

function ProtectedRoute({
  isAllowed,
  redirectTo = routes.homePagePath(),
}: ProtectedRouteProps) {
  if (isAllowed) {
    return <Outlet />;
  }

  return <Navigate replace to={redirectTo} />;
}

export default ProtectedRoute;
