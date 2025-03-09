import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET_KEY="MITHUL04";

export const registerUser = (req,res) => {
        const { name, email , password} = req.body;
         if(!name || !email || !password ){
            return res.status(400).json({message:"All feilds are Mandatory!!"})
         }
         User.findOne({email}).then((data) => {
            if(data){
                return res.status(400).json({message:"User already existed!!"})
            }
           bcrypt.hash(password , 10).then((hashed) => {
            const newuser = new User({name:name, email:email , password : hashed})

            newuser.save()
            .then((user) => res.status(201).json({ message: "User registered successfully", user }))
            .catch((err) => res.status(500).json({ message: "Failed to register user", err }));
           })

         })
         .catch((err) => res.status(500).json({ message: "Error checking user existence", err }));
        };

export const Loginuser = (req,res) => {
    const {email, password} = req.body;

    if( !email || !password ){
        return res.status(400).json({message:"All feilds are Mandatory!!"})
     }

     User.findOne({email}).then((data) => {
        if(!data){
            return res.status(404).json({ message: "User not found" });
        
        }
        bcrypt.compare(password , data.password).then((ismatch) => {
            if(!ismatch){
               return res.status(401).json({message:"Invalid Password"})
            }
            const token = jwt.sign({id:data._id, email:data.email}, SECRET_KEY , {expiresIn:"7d"})

            res.status(200).json({ message: "Login successful", token });

           

        })
        
     })
      
     .catch((err) => res.status(500).json({ message: "Error logging in user", err }));
 
}