import React from "react";

import Navbar from "./Navbar";
import Entries from "./Entries";
import AddEntry from "./AddEntry";

export default function Home({handleAuth}){
    return (
        <React.Fragment>
            <Navbar handleAuth={handleAuth}/>
            <section className="main-accounts-section">
               <AddEntry/>
               <Entries/>
            </section>
        </React.Fragment>
    )
}