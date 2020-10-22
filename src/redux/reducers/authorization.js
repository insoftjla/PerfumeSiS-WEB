import UserApi from "../../utils/userApi";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = "authorization/SET_AUTH_USER";
const DEL_AUTH_USER = "authorization/DEL_AUTH_USER";


let initialState = {
    user: null,
    isAuth: false
}

const authorization = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                user: action.user,
                isAuth: true
            };
        case DEL_AUTH_USER:
            return {
                ...state,
                user: action.user,
                isAuth: false
            };
        default:
            return state;
    }
}

export const setAuthUser = (user) => ({type: SET_AUTH_USER, user});
export const delAuthUser = () => ({type: DEL_AUTH_USER, user: null});

export const login = (username, password, rememberMe) => async (dispatch) => {

    let response = (await UserApi.login(username, password));
    let data = response ? response.data : undefined;
    if (data === undefined) {
        dispatch(stopSubmit("login", {_error: "Сервер не отвечает!"}))
        return;
    }

    if (data.payload !== undefined &&
        data.responseStatus.resultCode === 200)

        dispatch(setAuthUser(data.payload));
    else
        dispatch(stopSubmit("login", {_error: data.responseStatus.message}))
}

export const checkLogin = () => async (dispatch) => {
    let response = await UserApi.checkLogin();
    let data = response ? response.data : undefined;
    if (data !== undefined && data.payload !== undefined)
        dispatch(setAuthUser(data.payload));
    return response;
}

export const logout = () => (dispatch) => {
    UserApi.logout();
    dispatch(delAuthUser());
}

export default authorization;