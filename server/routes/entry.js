import express from "express";
const router = express.Router();

import accountModel from "../models/accountSchema.js";
import { addAccount } from "../db-operations/addAccount.js";
import { getAllAccounts } from "../db-operations/getAllAccounts.js";
import { deleteAccount } from "../db-operations/deleteAccount.js";
import { editAccount } from "../db-operations/editAccount.js";

router.post("/new-account",(req,res)=>{
    if(req.body)
    addAccount(req.body.account);
    console.log(req.body);
});

router.get("/all-accounts",async(req,res)=>{
   const data=await getAllAccounts(accountModel);
   res.json(data)
});

router.delete("/remove-account/:_id",(req,res)=>{
    console.log("req for: "+req.params._id);
     deleteAccount(accountModel,req.params._id);
     res.json({"status":"done"});
});

router.patch("/edit-account/:_id",(req,res)=>{
    const update=req.body;
    editAccount(req.params._id,update,accountModel);
    res.send(req.body);
})

export default router;