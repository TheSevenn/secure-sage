// import accountModel from "../models/accountSchema";

export const getAllAccounts = async (accountModel) =>{
     let data = await accountModel.find();
     return data;
}