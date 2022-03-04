import axios, { Axios} from "axios"

//https://viacep.com.br/ws/49035660/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;