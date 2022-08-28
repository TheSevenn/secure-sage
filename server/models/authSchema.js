import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    ownerName:{
           type:String,
           required:true
    },
    ownerUserName:{
        type:String,
        required:true
    },
    ownerEmail:{
        type:String,
        required:true
    },
    ownerPassword:{
        type:String,
        required:true
    }
    
});

const authModel = mongoose.model("authModel",authSchema);
export default authModel;