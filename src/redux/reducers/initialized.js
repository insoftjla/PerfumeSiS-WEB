import {checkLogin} from "./authorization";
import {loadProducts} from "./product";
import {loadBrands} from "./brand";

const INITIALIZATION_SUCCEEDED = "INITIALIZATION_SUCCEEDED"

let initialState = {
    isInitialized: false
}

const initializedApp = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCEEDED:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
}

const setInitializeTrue = () => ({type: INITIALIZATION_SUCCEEDED})

export const initializeApp = () => async (dispatch) => {
    let checkAuth = dispatch(checkLogin());
    await Promise.all([checkAuth])
    dispatch(loadProducts());
    dispatch(loadBrands());
    dispatch(setInitializeTrue());
}

export default initializedApp;