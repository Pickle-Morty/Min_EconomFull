import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://212.42.122.154/api/v1/",
});

export const registryAPI = {
    get: async (uri, token) => {  
        const response = await instance.get(uri, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    getRequest: async (id) => {
        const response = await instance.get(`/get/${id}`);
        return response.data;
    },
    post: async (body) => {
        const response = await instance.post("", body);
        return response.data;
    },
    postStatus: async (body) => {
        const response = await Promise.all([
            instance.post("/action/authorized-body", body),
            instance.post("/action/responsible-body", body),
            instance.post("/action/commission", body),
        ]);
        return response.data;
    },
};
