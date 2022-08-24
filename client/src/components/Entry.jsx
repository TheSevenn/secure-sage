import React from "react";

import { deleteAccount } from "../api/accountRequests";
import { IconProvider } from "./_components/IconProvider";
import Update from "./_components/Update";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { buttonStyles } from "../assests/styles";

export default function Entry({ account }) {
    const [showUpdate, setShowUpdate] = React.useState(false);

    function handleClickEdit() {
        setShowUpdate(true);
    }

    function handleClickCancel() {
        setShowUpdate(false);
    }

    function handleClickDelete() {
        console.log("clicked");
        deleteAccount(account._id).then(res => console.log(res)).catch(err => console.log(err));
    }
    return (
        <React.Fragment>
            <section className="account-card">
                {
                    showUpdate ? <Update onClick={handleClickCancel}
                        account={account}
                    /> :<React.Fragment>
                         <span><IconProvider icon={account.accountName}/></span>
                          <p><strong>{account.accountName}</strong></p>
                    <p>{account.email}</p>
                    <p>{account.password}</p>
                    <div className="button-container">
                        <button onClick={handleClickEdit}><EditIcon style={buttonStyles} /></button>
                        <button onClick={handleClickDelete}><DeleteIcon style={buttonStyles}/></button>
                        <button><ExpandMoreIcon style={buttonStyles} /></button>
                    </div>
                    </React.Fragment> 
                }
            </section>
        </React.Fragment>
    )
}