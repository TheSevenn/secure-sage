import React from "react";
import {useNavigate} from "react-router-dom";

import UserName, {Password} from "./_components/Input";
import { authRequest } from "../api/authRequest";

export default function Login(){

    const [userName,setUserName] = React.useState("");
    const [password,setPassword] = React.useState("");
    const navigate = useNavigate();
    // const [validation,setValidaton] = React.useState(false);
    
    function fetchUserName(data){
        setUserName(data);
    }
    function fetchPassword(data){
        setPassword(data);
    }

    function handleClick(){
        const authToken = {
            userName,
            password
        }
      authRequest(authToken).then(res=> {
        if(res.data.authStatus&&res.data.token){ 
            localStorage.setItem("token",JSON.stringify(res.data.token));
            navigate("/home")
        }else if(!res.data.authStatus) navigate("/login")})
        .catch(error=>navigate("/login"));
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
            <button className="button-theme" tabIndex={-1} onClick = {handleClick}>Login</button>
            </div>
        </React.Fragment>
    )
}