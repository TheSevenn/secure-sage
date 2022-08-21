import React from "react";

import Navbar from "./Navbar";
import Entries from "./Entries";
import AddEntry from "./AddEntry";

export default function Home(){
    return (
        <React.Fragment>
            <Navbar/>
            <AddEntry/>
            <Entries/>
        </React.Fragment>
    )
}