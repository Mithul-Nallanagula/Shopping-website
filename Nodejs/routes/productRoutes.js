import { getallproducts , findbyid , addProduct } from "../Controller/productController.js";
import express from "express"

const router = express.Router();


router.get("/", getallproducts);               
router.get("/:id", findbyid);                  
router.post("/", addProduct);                  

export default router;