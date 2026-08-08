import type { LoginRequest } from "../types/auth";
import { api } from "./api";

export const authService = {
  async login(data: LoginRequest) {
    const response = await api.post("/auth/login", data);
    return response.data;
  },

  async logout(refreshToken: string) {
    await api.post("/auth/logout", undefined, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
  },
};
