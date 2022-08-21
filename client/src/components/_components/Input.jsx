import React, {useState} from "react";

export default function UserName(props){
    const [userName,setUserName] = useState("");

    function handleUserName(e){
        console.log(e.target.value);
        setUserName(e.target.value);
        props.fetchUserName(e.target.value);
    }
    return (
        <React.Fragment>
            {/* <label htmlFor="userName">{props.head}</label> */}
            <input type="text" id="userName" name = "userName" value = {userName} onChange = {handleUserName} placeholder="email" />
        </React.Fragment>
    )
}

export function Password(props){

    const [password,setPassword] = useState("");

    function handlePassword(e){
        console.log(e.target.value);
        setPassword(e.target.value);
        props.fetchPassword(e.target.value);
    }
    return(
        <React.Fragment>
            {/* <label htmlFor="password">{props.head}</label> */}
            <input type="password" id="password" name="password" value = {password} onChange = {handlePassword} placeholder="password" />
        </React.Fragment>
    )
}