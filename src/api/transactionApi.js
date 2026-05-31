import axiosInstance from "./axiosConfig";

// Deposit
export const deposit = (accountId, data) => {
  return axiosInstance.post(`/transaction/deposit/${accountId}`, data);
};

// Withdraw
export const withdraw = (accountId, data) => {
  return axiosInstance.post(`/transaction/withdraw/${accountId}`, data);
};

// Transfer
export const transfer = (accountId, data) => {
  return axiosInstance.post(`/transaction/transfer/${accountId}`, data);
};

// Get History
export const getTransactionHistory = (accountId) => {
  return axiosInstance.get(`/transaction/history/${accountId}`);
};
