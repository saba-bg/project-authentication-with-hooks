import React, { useState, createContext, useEffect } from "react";

export const AuthProviderContext = createContext();
export const AuthProviderContextDispatcher = createContext();

const STORAGE_KEY = {
  TOKEN: "token"
};

const initialState = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY.TOKEN) || false);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (state) {
      const data = JSON.stringify(state);
      localStorage.setItem(STORAGE_KEY.TOKEN, data);
    }
  }, [state]);

  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;
