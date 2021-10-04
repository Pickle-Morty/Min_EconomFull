import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://212.42.122.154/api/v1/",
});

export const authAPI = {
    login: async (body) => {
        const response = await instance.post("login", body);
        return response.data;
    },
    logout: async () => {
        const response = await instance.get("logout");
        return response.data;
    },
    checkToken: async (token) => {
        const response = true   
        return response
    }
};
