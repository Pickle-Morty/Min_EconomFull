import { authAPI } from "../../API";
import { stopSubmit } from "redux-form";
import { roleFilter } from "../../utils";

// actions
export const setAuth = (payload) => ({ type: "CHANGE_AUTH", key: "isAuth", payload });
const setRole = (payload) => ({ type: "CHANGE_AUTH", key: "role", payload });
const isLogin = (payload) => ({ type: "CHANGE_AUTH", key: "isLogin", payload });
const setInfoUser = (payload) => ({ type: "CHANGE_AUTH", key: "info", payload });

// thunks
export const getUser = () => (dispatch) => {
    const data = JSON.parse(localStorage.getItem("auth"));
    if (data) {
        console.log('пуф')
        const role = roleFilter(data.roles[0]);
        dispatch(setAuth(true));
        dispatch(setInfoUser(data));
        dispatch(setRole(role));
    } else {
        dispatch(setAuth(false));
    }
};

export const login = (body) => (dispatch) => {
    dispatch(isLogin(true));
    authAPI.login(body).then((data) => {
        dispatch(isLogin(false));
        localStorage.setItem("auth", JSON.stringify(data));
        dispatch(getUser());
    }).catch((err) => {
        dispatch(isLogin(false));
        dispatch(stopSubmit("login", { _error: "Неверный логин или пароль" }));
    });
};

export const logout = () => (dispatch) => {
        localStorage.removeItem("auth");
        dispatch(getUser());      
};


export const checkToken = (token) => (dispatch) => {
    authAPI.checkToken(token).then(request=>{
        request ? console.log() : localStorage.removeItem("auth")
    })   
}

//
//dispatch(setAuth(false))