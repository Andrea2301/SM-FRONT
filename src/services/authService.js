import api from "../api";

export const register =  async (userData) => {
    const response = await api.post("/api/Auth/register",userData)
    return response.data;
};