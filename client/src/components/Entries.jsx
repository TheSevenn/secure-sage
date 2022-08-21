import React from "react";

import Entry from "./Entry";
import { getAllAccounts } from "../api/accountRequests";

export default function Entries(){
    const [accounts,setAccounts] = React.useState([]);

    React.useEffect(()=>{
    getAllAccounts().then(res=>setAccounts(res.data)).catch(err=>console.log(err));
    },[]);
    return (
        <React.Fragment>
              {
                accounts.map((account,index)=>{
                    return <Entry account = {account} key = {index} />
                })
            }
        </React.Fragment>
    )
}