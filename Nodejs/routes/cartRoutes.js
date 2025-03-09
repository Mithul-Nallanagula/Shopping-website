import express from "express";
import verifyToken from "../Controller/Middleware/authMiddleware.js";
import { 
    getCartItems, 
    addItemToCart, 
    updateCartItem, 
    removeItemFromCart, 
    clearCart 
} from "../Controller/cartController.js";

const router = express.Router();


router.get("/",verifyToken, getCartItems);

router.post("/",verifyToken, addItemToCart);


router.put("/:id",verifyToken, updateCartItem);


router.delete("/:id",verifyToken, removeItemFromCart);

router.delete("/",verifyToken, clearCart);

export default router;