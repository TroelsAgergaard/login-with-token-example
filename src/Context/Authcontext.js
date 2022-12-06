import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthticated, setIsAuthticated] = useState(undefined);
  return (
    <AuthContext.Provider value={{ isAuthticated, setIsAuthticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

