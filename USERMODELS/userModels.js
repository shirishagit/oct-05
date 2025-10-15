import mongoose, { Collection } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    eMail:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
})

export default mongoose.Model("Users",userSchema)

