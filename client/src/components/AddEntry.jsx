import React from "react";

import { saveAccount } from "../api/accountRequests";
export default function AddEntry() {

    const [account, setAccount] = React.useState({
        accountName: "",
        email:"",
        userName: "",
        password: "",
        tags: ""
    });

    function handleChangeFor_accountName(e) {
        setAccount({ ...account, accountName: e.target.value });
        console.log(account);
    }
    function handleChangeFor_email(e) {
        setAccount({ ...account, email: e.target.value });
        console.log(account);
    }
    function handleChangeFor_userName(e) {
        setAccount({ ...account, userName: e.target.value });
        console.log(account);
    }
    function handleChangeFor_password(e) {
        setAccount({ ...account, password: e.target.value });
        console.log(account);
    }
    function handleChangeFor_tags(e) {
        setAccount({ ...account, tags: e.target.value });
        console.log(account);
    }
   
    function handleClick(e) {
           console.log("clicked");
           e.preventDefault();

           saveAccount(account).then(res=>console.log("Account saved and respond recieved: "+res.data)).catch(err=>console.log("Error occured: "+err));
    }
    return (
        <React.Fragment>
            <h1>Add New Account Details</h1>

            <input required type="text" name="accountName" placeholder="accont name" onChange={handleChangeFor_accountName} />
            <input type="text" name="accountEmail" placeholder="email/phone" onChange={handleChangeFor_email} />
            <input type="text" name="userName" placeholder="user name" onChange={handleChangeFor_userName} />
            <input required type="text" name="password" placeholder="password/pin" onChange={handleChangeFor_password} />
            <input type="text" name="tags" placeholder="tags" onChange={handleChangeFor_tags} />

            <button type="submit" onClick={handleClick}>Add Account</button>
        </React.Fragment>
    )
}