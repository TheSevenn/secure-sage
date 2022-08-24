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
                {
                    accounts.map((account, index) => {
                        return <Entry account={account} key={index} />
                    })
                }
            </section>
        </React.Fragment>
    )
}