import { Navigate } from "react-router-dom";
import { useAuth } from "../../pages/backend/Provider/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    // user is not authenticated
    return <Navigate to="/pages/login" />;
  }

  return children;
};