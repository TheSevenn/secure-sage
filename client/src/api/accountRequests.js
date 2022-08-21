import axios from "axios";

const api_request_url = "http://127.0.0.1:5500/account";

export const saveAccount = (account) => { return axios.post(`${api_request_url}/new-account`,{account});}

export const getAllAccounts = () => {
    return axios.get(`${api_request_url}/all-accounts`);
}

export const deleteAccount = (account_id) => { return axios.delete(`${api_request_url}/remove-account/${account_id}`)};

export const editAccount = (account_id,update) => { return axios.patch(`${api_request_url}/edit-account/${account_id}`,{update})};
