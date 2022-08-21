import mongoose from "mongoose";

const accountSchema=new mongoose.Schema({
    accountName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    userName:{
        type:String,
        required:false
    },

    password:{
        type:String,
        required:true
    },

    tags:{
        type:Array,
        required:false
    },

    addedAt:{
        type:Date,
        default:Date.now
    }
});
const accountModel = mongoose.model("accountModel",accountSchema);
export default accountModel;

// accountModel will become the collection name 