import { Navigate } from "react-router-dom";
import { useAuth } from "../pages/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/userlogin" />;
  }

  return children;
};

export default ProtectedRoute;