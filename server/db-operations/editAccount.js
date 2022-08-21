import mongoose from "mongoose";

export const editAccount=async(_id,update,accountModel)=>{
     if(mongoose.Types.ObjectId.isValid(_id))
     {
   let resul = await accountModel.findByIdAndUpdate(_id,
     update.update,{new:true});
   }
}