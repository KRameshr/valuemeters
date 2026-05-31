import axiosInstance from "./axiosConfig";

// Get Account by User ID
export const getAccountByUserId = (userId) => {
  return axiosInstance.get(`/account/user/${userId}`);
};

// Get Account by Account Number
export const getAccountByNumber = (accountNumber) => {
  return axiosInstance.get(`/account/${accountNumber}`);
};
