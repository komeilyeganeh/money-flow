import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const accessToken = localStorage.getItem("accessToken");  
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
