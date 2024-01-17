import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({
  isPermition,
  children,
  redirectTo = "/",
}) {
  if (!isPermition) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}
