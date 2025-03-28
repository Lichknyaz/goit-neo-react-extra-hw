import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSlice";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to="/login" />;
}

export default PrivateRoute;
