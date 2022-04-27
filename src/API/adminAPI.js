import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://212.42.122.154/api/v1/",
});

const bodyY = {
    email: "example@gmail.com",
    name: "Person",
    organId: 2,
    password: "admin",
    patronymic: "adminnnnn",
    phoneNumber: "123456789",
    regionId: 1,
    roleId: 2,
    surname: "regadmi",
    username: "OshhhhhhhAdmin123"
}

export const adminAPI = {
    createUser: async (body,token) => {
        console.log( "body: ", body)
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
        console.log("id: ", token)
        const response = await instance.delete(`account/delete/${id}`, {
            headers: {
                'Authorization': `Bearer  ${token}`
            }
        } )
        return response
    },
};
