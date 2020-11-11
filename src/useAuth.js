import { useContext } from "react";
import { AuthProviderContext } from "./AuthProvider";

function useAuth() {
  return useContext(AuthProviderContext);
}

export default useAuth;
