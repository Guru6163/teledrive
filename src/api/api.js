import axios from "axios";

const API_BASE_URL = "https://foodcore-backend.onrender.com";

const headers = {
  "Content-Type": "application/json",
};

export const login = async (email, password) => {
  const url = `${API_BASE_URL}/api/user/login`;
  try {
    const response = await axios.post(url, { email, password }, { headers });
    return response.data
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Login");
  }
};

export const getAllCustomers = async () => {
  const url = `${API_BASE_URL}/api/user/allUsers`;
  try {
    const response = await axios.get(url, { headers });
    return response.data
  } catch (error) {
    console.log(error);
    throw new Error("Failed");
  }
};
