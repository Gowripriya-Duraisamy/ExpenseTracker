import axios from "axios";
import { globalContext } from "../context/auth-context";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      const accessToken = await globalContext.refreshToken();
      originalRequest.headers.Authorization = "Bearer " + accessToken;
      return axiosInstance(originalRequest);
    }
    return error.response;
  }
);

export default axiosInstance;
