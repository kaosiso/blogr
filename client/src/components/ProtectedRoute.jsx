import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // not logged in → send to login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
