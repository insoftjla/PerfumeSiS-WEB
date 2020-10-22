import {productApi} from "../../utils/productApi";

const SET_BRAND = "product/SET_BRAND";

const initializeState = {
    brands: []
};

const brand = (state = initializeState, action) => {
    switch (action.type) {
        case SET_BRAND:
            return {
                ...state,
                brands: action.brands
            };
        default:
            return state;
    }
};

const setBrandsToState = (brands) => ({type: SET_BRAND, brands})

export const loadBrands = () => async (dispatch) => {
    const response = await productApi.getBrands(0,20);
    const data = response ? response.data : undefined;
    if (data === undefined) {
        return
    }
    dispatch(setBrandsToState(data.content));
}

export default brand;