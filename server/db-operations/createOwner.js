import authModel from "../models/authSchema.js";


export const createOwner=()=>{
let newOwner = new authModel({
    ownerName:"Aditya Raj Tripathi",
    ownerUserName:"Sevenn",
    ownerEmail:"adityaraj10.art@gmail.com",
    ownerPassword:"Moremonjey77@"
});

 if(authModel.count()==0){
    newOwner.save((err,doc)=>{
        if(err) console.log(err);

        else console.log("owner created");
    })
 }
}