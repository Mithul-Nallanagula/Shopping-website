import express from "express";
import { 
    getCartItems, 
    addItemToCart, 
    updateCartItem, 
    removeItemFromCart, 
    clearCart 
} from "../Controller/cartController.js";

const router = express.Router();


router.get("/", getCartItems);

router.post("/", addItemToCart);


router.put("/:id", updateCartItem);


router.delete("/:id", removeItemFromCart);

router.delete("/", clearCart);

export default router;