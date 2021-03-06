import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://212.42.122.154/api/v1/",
});

export const fieldsAPI = {
    getRegions: async (token) => {
        const response = await instance.get("region/get-all", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    getOrgans: async (token) => {
        const response = await instance.get("organ/get-all", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    getEconomics: async (token) => {
        const response = await instance.get("activity/get-all", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    getCauses: async (token) => {
        const response = await instance.get("cause/get-all", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    getSubjects: async (token) => {
        const response = await instance.get("subject/get-all", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    post: async (body, type) => {
        const response = await instance.post(`${type}/create`, body);
        console.log(response)
        return response.data;
    },
    remove: async (body, type) => {///region/delete/6
        console.log(
            "type:" + type +
            "\nbody: " + body
        )
        if (type == "activity") {
            const response = await instance.delete(`${type}/delete/${body}` );
            return response.data
        }
        const response = await instance.post(`${type}/delete/${body}`);
        
        return response.data;
    },
    getAll: async (token) => {
        const response = await Promise.all([
            fieldsAPI.getRegions(token),
            fieldsAPI.getOrgans(token),
            fieldsAPI.getEconomics(token),
            fieldsAPI.getCauses(token),
            fieldsAPI.getSubjects(token),
        ]);
        return {
            region: response[0],
            organ: response[1],
            activity: response[2],
            cause: response[3],
            subject: response[4],
        };
    },
};

