import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage on startup
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      return {
        userId: tokenData.userId,
        email: tokenData.sub,
        name: tokenData.name,
      };
    } catch {
      return null;
    }
  });

  // Login — save token and set user
  const login = (token) => {
    localStorage.setItem("token", token);
    try {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const userData = {
        userId: tokenData.userId,
        email: tokenData.sub,
        name: tokenData.name || tokenData.sub?.split("@")[0],
      };
      localStorage.setItem("operatorName", userData.name);
      localStorage.setItem("email", userData.email);
      setUser(userData);
    } catch (err) {
      console.error("Token parse error:", err);
    }
  };

  // Logout — clear everything
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
