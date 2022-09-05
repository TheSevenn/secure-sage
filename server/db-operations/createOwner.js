import bcrypt from "bcrypt";

import authModel from "../models/authSchema.js";

export const createOwner=()=>{
const saltRounds = 10;
const password = '';
let newOwner = new authModel({
    ownerName:"",
    ownerUserName:"",
    ownerEmail:"",
    ownerPassword: bcrypt.hashSync(password,saltRounds,(err,res)=>{
        return res;
    })
});

 authModel.find({},(err,doc)=>{
    if(doc.length==0){
        newOwner.save((err,doc)=>{
            if(err) console.log(err);
    
            else console.log("owner created");
        })
     }
 })

}