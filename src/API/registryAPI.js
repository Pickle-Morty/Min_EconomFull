import * as axios from "axios";
import S3FileUpload from 'react-s3';
import { uploadFile } from 'react-s3';

const instance = axios.create({
    baseURL: "http://212.42.122.154/api/v1/claim",
});

export const registryAPI = {
    get: async (uri, token) => { 
        console.log("uri:",uri) 
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
    sendFile: async (file, config) => { 
        try{
            const response = await uploadFile(file, config)
            return response.location
        }catch(err){
            console.log("При отправке файла возникла ошибка:", err)
        }
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
