import { createContext } from "react";

const AuthContext = createContext({
  user: sessionStorage.getItem("user"),
  accessToken: sessionStorage.getItem("accessToken"),
});

export default AuthContext;
