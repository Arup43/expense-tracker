import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://new-server-lws.herokuapp.com/",
});

export default axiosInstance;
