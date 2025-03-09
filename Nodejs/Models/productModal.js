import mongoose  from "mongoose";

const productschema = mongoose.Schema({
    name:{type:String , required:true , minlength:3},
    price : {type:Number , required:true },
    description : {type:String , required:true},
    imageurl : {type:String , required:true},
     stock: {type:Number ,required:true }
})

export const Product = mongoose.model("Product" , productschema)

