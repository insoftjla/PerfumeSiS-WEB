import {productApi} from "../../utils/productApi";

const SET_PRODUCTS = "product/SET_PRODUCTS";

const initializeState = {
    products: []
};

const product = (state = initializeState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};

const setProductsToState = (products) => ({type: SET_PRODUCTS, products})

export const loadProducts = () => async (dispatch) => {
    const response = await productApi.getProducts(0,20);
    const data = response ? response.data : undefined;
    if (data === undefined) {
        return
    }
    dispatch(setProductsToState(data.content));
}

export default product;