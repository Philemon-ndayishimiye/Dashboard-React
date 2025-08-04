import { createContext, useState } from "react";

export const LoginCheckContext = createContext();

export const LoginCheckProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState({
    email: "admin@gmail.com",
    password: "12345",
  });

  return (
    <LoginCheckContext.Provider value={{ loginUser }}>
      {children}
    </LoginCheckContext.Provider>
  );
};
