import React from "react";

import Entry from "./Entry";
import { getAllAccounts } from "../api/accountRequests";

export default function Entries() {
    const [accounts, setAccounts] = React.useState([]);

    React.useEffect(() => {
        getAllAccounts().then(res => setAccounts(res.data)).catch(err => console.log(err));
    }, []);
    return (
        <React.Fragment>
            <section className="all-accounts-section">
                <h1 className="all-accounts__title">Your Accounts</h1>
                <div className="account-container__card">
                { 
                    accounts.map((account, index) => {
                        if(account)
                        return <Entry account={account} key={index} />

                        return <p>Nothing to see here. Add some accounts</p>
                    })
                }
                </div>
            </section>
        </React.Fragment>
    )
}