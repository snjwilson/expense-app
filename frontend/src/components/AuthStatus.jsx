import { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AuthStatus = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  console.log(accessToken);
  let location = useLocation();

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <h1 className="text-5xl">Logged In</h1>;
};

export default AuthStatus;
