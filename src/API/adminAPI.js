import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://212.42.122.154/api/v1/",
});

const body = {
    email: "example@gmail.com",
    name: "Person",
    organId: 2,
    password: "admin",
    patronymic: "admin",
    phoneNumber: "123456789",
    regionId: 1,
    roleId: 2,
    surname: "regadmi",
    username: "OshAdmin123"
}

export const adminAPI = {
    createUser: async (token) => {
        const response = await axios.post("http://212.42.122.154/api/v1/account", body, {
            headers: {
                'Authorization': `Bearer  ${token}`
            }
        })
        console.log(response)
        return response
    },
    getAllUser: async (token) => {
        const response = await instance.get("account/get-all", {
            headers: {
                'Authorization': `Bearer  ${token}`
            }
        } )
        return response
    },
    deleteUser: async (token, id) => {
        const response = await instance.get(`account/delete/${id}`, {
            headers: {
                'Authorization': `Bearer  ${token}`
            }
        } )
        return response
    },
};
