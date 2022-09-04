import React from "react";
import moment from "moment";

import { deleteAccount } from "../api/accountRequests";
import { IconProvider } from "./_components/IconProvider";
import Update from "./_components/Update";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { buttonStyles } from "../assests/styles";

export default function Entry({ account,counterDelete }) {
    const [showUpdate, setShowUpdate] = React.useState(false);
    // const [curr,setCurr] = React.useState(0);
 

    function handleClickEdit() {
        setShowUpdate(true);
    }

    function handleClickCancel() {
        setShowUpdate(false);
    }

    function handleClickDelete() {
        deleteAccount(account._id).then(res => console.log(res)).catch(err => console.log(err));
        counterDelete();
    }
    return (
        <React.Fragment>
            <section className="account-card">
                {
                    showUpdate ? <Update onClick={handleClickCancel}
                        account={account}
                    /> : <React.Fragment>
                        
                        <div className="icon-container">
                            <IconProvider icon={account.accountName} />
                            <span className="time-passed">{moment(account.addedAt).startOf('second').fromNow()}</span>
                        </div>
                        <p><strong>{account.accountName}</strong></p>
                        <p>{account.email}</p>
                        <p>{account.userName}</p>
                        <p>{account.password}</p>
                        <p>{ account.tags.map((tag, index) => {
                                return <span key={tag}>{tag}</span>
                            })}</p>
                        <div className="button-container">
                            <button className="action-buttons__solid" onClick={handleClickEdit}><EditIcon style={buttonStyles} /></button>
                            <button className="action-buttons__outlined" onClick={handleClickDelete}><DeleteIcon style={buttonStyles} /></button>
                        </div>
                    </React.Fragment>
                }
            </section>
        </React.Fragment>
    )
}