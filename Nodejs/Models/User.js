import mongoose from "mongoose";

const userscheme = mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    email: {
        type:String , 
        required:true,
        unique : true
    },
    password:{
            type:String , 
            required:true 
        }
    

},{timestamps: true});


const User = mongoose.model("User" , userscheme)

export default User