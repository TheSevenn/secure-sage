export const deleteAccount=(accountModel,account_id)=>{
   try {
      accountModel.findByIdAndDelete(account_id,(err,doc)=>{
        if(!err){ console.log("account with id "+doc._id+" is deleted");
      return true;
   }
        console.log("error occured: "+err);
      })
   } catch (error) {
    console.log("error occured while the account: "+error);
   }
} 