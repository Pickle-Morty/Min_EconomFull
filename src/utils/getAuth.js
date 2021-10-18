const auth = JSON.parse(localStorage.getItem("auth"))

export const getAuth = {
    token:() => {
        if (auth) {
            return auth.accessToken
        }
    },
    role:() => {
        
        if (auth) {
            return auth.roles[0]
        }
        return 0
    } 
}


