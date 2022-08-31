import axios from "axios";

const api_request_url = "http://127.0.0.1:5500/private";

export const authRequest =(authToken)=> axios.post(`${api_request_url}/auth`,{authToken})

export const logOutRequest = () => axios.post(`${api_request_url}/logout`)

