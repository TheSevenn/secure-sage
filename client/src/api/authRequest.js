import axios from "axios";

const api_request_url = "http://127.0.0.1:5500/private";

export const authRequest =(details)=>{ return axios.post(`${api_request_url}/authenticate`,{details});}