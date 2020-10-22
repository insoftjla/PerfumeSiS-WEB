import axios from "axios";
import Cookies from "cookie-universal"


const instance = axios.create({
    withCredentials: true,
    responseType: "application/json",
    baseURL: "http://localhost:8080/api/v1"
})


const UserApi = {

    login(username, password) {
        return instance.post(`/auth/login`, { username, password })
            .catch(error => {
                console.log(error);
            })
    },

    logout() {
        const cookies = new Cookies();
        cookies.remove("token_api")
    },

    checkLogin() {
        return instance.get(`/user`)
            .catch(error => {
                console.log("ERROR: checkLogin in api.js");
            })
    },

    updatePersonalData(data){
        return instance.put(`user/`, data)
            .catch(error => {
                console.log(error);
            })
    },

    updatePassword(password){
        return instance.put(`user/password`, {password})
            .catch(error => {
                console.log(error);
            })
    },

    addLocation (location){
        return instance.post(`user/location`, location)
            .catch(error => {
                console.log(error);
            })
    }
}

export default UserApi;