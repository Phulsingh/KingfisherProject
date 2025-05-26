import axios from "axios";

const API = axios.create({
    baseURL: "https://kingfisherproject-3.onrender.com"
});

export default API;

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common["Authorization"];
    }
};
