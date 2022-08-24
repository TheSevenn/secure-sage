import React from "react";

import { editAccount } from "../../api/accountRequests";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

export default function Update({onClick,account}){

      const [update,setUpdate] = React.useState({
        accountName:account.accountName,
        email:account.email,
        userName:account.userName,
        password:account.password,
        tags:account.tags
      });

      function handleUpdateFor_accountName(e){
        setUpdate({...update,accountName:e.target.value});
      }
      function handleUpdateFor_email(e){
        setUpdate({...update,email:e.target.value});
      }
      function handleUpdateFor_userName(e){
        setUpdate({...account,userName:e.target.value});
      }
      function handleUpdateFor_password(e){
        setUpdate({...account,password:e.target.value});
      }
      function handleUpdateFor_tags(e){
        setUpdate({...account,tags:e.target.value});
      }

      function handleClickSaveChanges(e){
          e.preventDefault();
          editAccount(account._id,update).then(res=>console.log("response is: "+res.data)).catch(err=>console.log("error occured while updating: "+err));
          onClick();
      }

       return (
        <React.Fragment>
                <h1>Edit Account Details</h1>

                <input type="text" name="accountName" placeholder="accont name" value = {update.accountName}
                onChange={handleUpdateFor_accountName} />

                <input type="text" name="accountEmail" placeholder="email/phone" value = {update.email}
                onChange={handleUpdateFor_email} />

                <input type="text" name="userName" placeholder="user name" value= {update.userName}
                onChange={handleUpdateFor_userName} />

                <input required type="text" name="password" placeholder="password/pin" value = {update.password}
                onChange={handleUpdateFor_password} />

                <input type="text" name="tags" placeholder="tags" value={update.tags}
                onChange={handleUpdateFor_tags} />

                <button type="submit" onClick={onClick}><CloseIcon/></button>
                <button type="submit" onClick={handleClickSaveChanges}><DoneIcon/></button>
        </React.Fragment>
       )
}