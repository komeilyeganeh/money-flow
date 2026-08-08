import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;
    if (error.response?.status !== 401 || originalReq._retry) {
      return Promise.reject(error);
    }

    originalReq._retry = true;
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      return Promise.reject(error);
    }
    try {
      const response = await refreshApi.post("/auth/refresh", {
        refreshToken,
      });

      const { accessToken, refreshToken: newRefreshToken } = response.data;

      localStorage.setItem("accessToken", accessToken);

      localStorage.setItem("refreshToken", newRefreshToken);

      originalReq.headers.Authorization = `Bearer ${accessToken}`;

      return api(originalReq);
    } catch (refreshError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      window.location.href = "/login";

      return Promise.reject(refreshError);
    }
  },
);
