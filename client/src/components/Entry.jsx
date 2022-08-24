import React from "react";

import { deleteAccount } from "../api/accountRequests";
import Update from "./_components/Update";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <p><strong>{account.accountName}</strong></p>
                <p>{account.email}</p>
                <p>{account.password}</p>
                <div className="button-container">
                    <button onClick={handleClickEdit}><EditIcon /></button>
                    <button onClick={handleClickDelete}><DeleteIcon /></button>
                    <button><ExpandMoreIcon /></button>
                </div>
                {
                    showUpdate ? <Update onClick={handleClickCancel}
                        account={account}
                    /> : " "
                }
            </section>
        </React.Fragment>
    )
}