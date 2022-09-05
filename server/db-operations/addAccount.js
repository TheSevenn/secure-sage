import accountModel from "../models/accountSchema.js";

export const addAccount = (account) => {
  // create new instance of model
  let newAccount = new accountModel({
    accountName: account.accountName,
    email: account.email,
    userName: account.userName,
    password: account.password,
    tags: account.tags.split(",")
  });
  newAccount.save((err, doc) => {
    if (err) console.log("and eroor occured: " + err);

    else console.log("account Added");
  })
}