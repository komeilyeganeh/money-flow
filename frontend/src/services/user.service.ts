import { api } from "./api";

export const userService = {
  async getMe() {
    const response = await api.get("/users/me");
    return response.data;
  },
};
