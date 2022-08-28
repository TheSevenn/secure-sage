import React from "react";
import {Link} from "react-router-dom";

import UserName, {Password} from "./_components/Input";
import { authRequest } from "../api/authRequest";

export default function Login(){

    const [userName,setUserName] = React.useState("");
    const [password,setPassword] = React.useState("");
    // const [validation,setValidaton] = React.useState(false);
    
    function fetchUserName(data){
        setUserName(data);
    }
    function fetchPassword(data){
        setPassword(data);
    }

    function getAuth(status){
        // setValidaton(status.authentication);
    }
   
    function handleClick(){
        const details = {
            userName,
            password
        }
     authRequest(details).then(res=> getAuth(res.data)).catch(error=>console.log("Error occured: "+error));
    }

    return (
        <React.Fragment>
             <h2 className="card-title" >
                Login to SAGE</h2>
             <div className="login-card">
            <UserName head = {"User Name:"} 
            name = {"userName"} fetchUserName = {fetchUserName} />

            <Password head = {"Passwords:"} 
            name = {"password"} fetchPassword = {fetchPassword} />
            <Link to="/home">
            <button className="button-theme" tabIndex={-1} onClick = {handleClick}>Login</button>
            </Link>
            </div>
        </React.Fragment>
    )
}