import axios from "axios";
import { configs } from "eslint-plugin-react-refresh";

const api = axios.create({
baseURL:"https://sm-production-f635.up.railway.app/swagger/index.html",
Headers:{
    "Content-Type":"application/jsonn",

    },
});


// Add the token 

api.interceptors.request.use((config) =>{
    const token = localStorage.getItem("accessToken");

    if (token){
        config.headers.Authorization = `Bearer ${token}`;

    }
    return config;
});

export default api;
