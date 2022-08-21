import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
    
    return (
            <Router>
        <React.Fragment>
            <Routes>
              <Route element={<Login/>} >
                <Route path="/login" />
                <Route path="/" />
              </Route>
              <Route path="/home" element={<Home/>} />
            </Routes>  
        </React.Fragment>
            </Router>
    )
}