import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import loginroute from "./routes/loginroute.js"

const app = express()

app.listen(1999,() => {
   console.log("Running on 2100")
})

app.use(express.json())

mongoose.connect("mongodb://localhost:27017")

const db = mongoose.connection

db.on("open" , () =>  {
    console.log("Database successful")
})

db.on("error" , () => {
    console.log("Database Failed")
})

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", loginroute);





app.get("/", (req, res) => {
    res.send("Shopping Web API is running...");
  });