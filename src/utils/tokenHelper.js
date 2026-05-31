//  Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

//  Save token
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

//  Remove token
export const removeToken = () => {
  localStorage.removeItem("token");
};

//  Get user data from token
export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;
  const tokenData = JSON.parse(atob(token.split(".")[1]));
  return {
    userId: tokenData.userId,
    email: tokenData.sub,
  };
};

//  Check if logged in
export const isLoggedIn = () => {
  return !!getToken();
};
