import React from "react";
// import { useEffect } from "react";

import { deleteAccount } from "../api/accountRequests";
import Update from "./_components/Update";

export default function Entry({ account }) {
    const [ showUpdate,setShowUpdate ] = React.useState(false);
    // const [ hideUpdate,setHideUpdate ] = React.useState(false);
//   useEffect(()=>{
//   },[active]);

  function handleClickEdit() {
       setShowUpdate(true);
  }

  function handleClickCancel(){
      setShowUpdate(false);
  }
   
    function handleClickDelete() {
        console.log("clicked");
        deleteAccount(account._id).then(res => console.log(res)).catch(err => console.log(err));
    }
    return (
        <React.Fragment>
            <p><strong>{account.accountName}</strong></p>
            <p>{account.email}</p>
            <p>{account.password}</p>
            <button onClick={handleClickEdit}>EDIT</button>
            <button onClick={handleClickDelete}>delete</button>
            <button>Expand</button>
           
            { 
            showUpdate ? <Update onClick = {handleClickCancel}
            account = {account}
            /> : " "
            }
        </React.Fragment>
    )
}