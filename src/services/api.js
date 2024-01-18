import axios from "axios";

const apiSistemaPdv = axios.create({
    baseURL: "https://desafio-m05-t06-grupo-06.onrender.com",
});
export default apiSistemaPdv;
