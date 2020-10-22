import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import authorization from "./reducers/authorization";
import {reducer as formReducer} from 'redux-form'
import initializedApp from "./reducers/initialized";
import profile from "./reducers/profile";
import product from "./reducers/product";
import brand from "./reducers/brand";

const reducers = combineReducers({
    authorization: authorization,
    initializedApp: initializedApp,
    profile: profile,
    product: product,
    brand: brand,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;