import mongoose from "mongoose";

export const editAccount=async(_id,update,accountModel)=>{
     if(mongoose.Types.ObjectId.isValid(_id))
     {
      let updateAccount ={
        ...update.update,addedAt:Date.now()
      }
   let resul = await accountModel.findByIdAndUpdate(_id,
     updateAccount,{new:true});
   }
}