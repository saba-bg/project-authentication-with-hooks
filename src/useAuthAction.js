import { useContext } from "react";
import { AuthProviderContextDispatcher } from "./AuthProvider";

function useAuthActions() {
  return useContext(AuthProviderContextDispatcher);
}

export default useAuthActions;
