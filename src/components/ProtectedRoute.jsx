import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/tokenHelper";

function ProtectedRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
