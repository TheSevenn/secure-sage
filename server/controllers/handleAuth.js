import bcrypt from "bcrypt";

import generateToken from "../actions/generateToken.js";
import authModel from "../models/authSchema.js";

export const handleAuth = ({authToken},res)=>{
 
    authModel.findOne({ownerUserName:authToken.userName},(err,doc)=>{
       bcrypt.compare(authToken.password,doc.ownerPassword,function(err,result){
          if(err) console.log(err);
          if(result){
            res.status(200).json({"authStatus":true,"message":"login successful",token:generateToken(doc.ownerEmail,doc._id)});
            
          }else res.status(401).json({"authStatus":false,"message":"incorrect username or password"});
        });
    })
}
