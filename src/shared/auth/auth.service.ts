import axios from "axios";

const API_URL = "https://mern-stack-starter-server.onrender.com/api/auth/";

export const login = async (username: string, password: string) => {
  const response = await axios.post(API_URL + "login", {
    username,
    password,
  });

  if (response.data.accessToken && response.data.refreshToken) {
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  }
  console.log(response)
  return response.data.user;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
