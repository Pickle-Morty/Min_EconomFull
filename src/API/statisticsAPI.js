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
    getByOrgan: async (token, data) => {
        let uri = "stat/region-activity?"
        Object.keys(data).map(key => {
            if(data[key]){
                uri = uri + `${key}.id=${data[key]}&`
            }
        })
        const response = await instance.get(uri, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return { interest: response.data};
    },
}; 