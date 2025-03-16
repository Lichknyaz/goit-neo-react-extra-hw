import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSlice";
import { Navigate } from "react-router-dom";

function RestrictedRoute({ component: Component, redirectTo = "/contacts" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default RestrictedRoute;
