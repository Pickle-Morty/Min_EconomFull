import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://212.42.122.154/api/v1/",
});

export const statisticsAPI = {
    getExl: async () => {
        const response = await instance.get("excel");
        return response.data;
    },
    get: async (token) => {
        const response = await instance.get("stat/", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { interest: response.data};
    },
    getByOrgan: async (token, organId) => {
        const response = await instance.get(`stat/region-activity?economicActivity.id=${organId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { interest: response.data};
    },
}; 