import axios from "axios";

const api_request_url = "http://127.0.0.1:5500/account";
const setHeaders = {
    headers:{
        authorization:JSON.parse(localStorage.getItem("token"))
    }
}

export const saveAccount = (account) => { return axios.post(`${api_request_url}/new-account`,{account},setHeaders);}

export const getAllAccounts = () => {
    return axios.get(`${api_request_url}/all-accounts`,setHeaders);
}

export const deleteAccount = (account_id) => { return axios.delete(`${api_request_url}/remove-account/${account_id}`,setHeaders)};

export const editAccount = (account_id,update) => { return axios.patch(`${api_request_url}/edit-account/${account_id}`,{update},setHeaders)};
