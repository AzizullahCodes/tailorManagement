import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('users');

  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
