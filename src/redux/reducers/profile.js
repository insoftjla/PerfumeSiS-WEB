import UserApi from "../../utils/userApi";
import {stopSubmit} from "redux-form";
import {logout, setAuthUser} from "./authorization";

const IS_UPDATE_DATA = "authorization/IS_UPDATE_DATA";
const IS_EDIT_PERSON_DATA = "authorization/IS_EDIT_PERSON_DATA";
const IS_ADD_LOCATION_DATA = "authorization/IS_ADD_LOCATION_DATA";


let initialState = {
    isUpdateData: false,
    isEditPersonData: false,
    isAddLocationData: false,
}

const profile = (state = initialState, action) => {
    switch (action.type) {
        case IS_UPDATE_DATA:
            return {
                ...state,
                isUpdateData: action.isUpdateData,
            };
        case IS_EDIT_PERSON_DATA:
            return {
                ...state,
                isEditPersonData: action.isEditPersonData,
            };
        case IS_ADD_LOCATION_DATA:
            return {
                ...state,
                isAddLocationData: action.isAddLocationData,
            };
        default:
            return state;
    }
}
export const setIsUpdateData = (isUpdateData) => ({type: IS_UPDATE_DATA, isUpdateData});
export const setIsEditPersonData = (isEditPersonData) => ({type: IS_EDIT_PERSON_DATA, isEditPersonData});
export const setIsAddLocationData = (isAddLocationData) => ({type: IS_ADD_LOCATION_DATA, isAddLocationData});

export const updatePersonData = (personalData) => async (dispatch) => {
    dispatch(setIsUpdateData(true));
    let response = (await UserApi.updatePersonalData(personalData));
    let data = response ? response.data : undefined;
    if (data === undefined) {
        dispatch(stopSubmit("personal", {_error: "Сервер не отвечает!"}))
        return;
    } else {
        dispatch(setAuthUser(data.payload));
    }
    dispatch(setIsEditPersonData(false));
    dispatch(setIsUpdateData(false));
}

export const addLocation = (location) => async (dispatch) => {
    dispatch(setIsUpdateData(true));
    let response = (await UserApi.addLocation(location));
    let data = response ? response.data : undefined;
    if (data === undefined) {
        dispatch(stopSubmit("location", {_error: "Сервер не отвечает!"}));
        return;
    } else {
        dispatch(setAuthUser(data.payload));
    }
    dispatch(setIsAddLocationData(false));
    dispatch(setIsUpdateData(false));
}

export const updatePassword = (password) => async (dispatch) => {
    dispatch(setIsUpdateData(true));
    let response = (await UserApi.updatePassword(password));
    let data = response ? response.data : undefined;
    debugger
    if (data === undefined) {
        dispatch(stopSubmit("password", {_error: "Сервер не отвечает!"}));
        dispatch(setIsUpdateData(false));
        return;
    }
    if (data.responseStatus !== null && data.responseStatus.resultCode !== 200){
        dispatch(stopSubmit("password", {_error: data.responseStatus.message}));
        dispatch(setIsUpdateData(false));
        return
    }
    dispatch(logout())
    dispatch(setIsUpdateData(false));
}

export default profile;