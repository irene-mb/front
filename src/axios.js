import axios from "axios";

const instance = axios.create({
    baseURL: "https://geo-58gl.onrender.com/",
});

export default instance;
