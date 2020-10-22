import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    responseType: "application/json",
    baseURL: "http://localhost:8080/api/v1/public"
})

export const productApi = {

    getProducts(page, size) {
        return instance.get(`/products?page=${page}&size=${size}`)
            .catch();
    },

    getProductById(id) {
        return instance.get(`products/${id}`);
    },

    getBrands(page, size) {
        return instance.get(`/brands?page=${page}&size=${size}`)
            .catch();
    },

    getBrandById(id) {
        return instance.get(`/brand/${id}`)
            .catch();
    }

}