import { Cart } from "../Models/cartModal.js";
import { Product } from "../Models/productModal.js";

// Get all cart items
export const getCartItems = (req, res) => {
    Cart.find()
         .populate("productId")// Populate product details
        .then((items) => res.status(200).json(items))
        .catch((err) => res.status(500).json({ message: "Failed to fetch cart items", err }));
};

// Add item to cart
export const addItemToCart = (req, res) => {
    const { productId , quantity } = req.body;

    Product.findById(productId).then((product) => {
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const newCartItem = new Cart({ productId, quantity });

        newCartItem.save()
        .then((item) => {
       
            const cartItemWithProduct = {
                _id: item._id,
                product: {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                 
                    stock: product.stock,
                },
                quantity: item.quantity,
            };

            res.status(201).json({ message: "Item added to cart", item: cartItemWithProduct });
        })
            .catch((err) => res.status(500).json({ message: "Failed to add item to cart", err }));
    });
};

// Update cart item quantity
export const updateCartItem = (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    Cart.findByIdAndUpdate(id, { quantity }, { new: true })
        .populate("productId")
        .then((updatedItem) => {
            if (!updatedItem) {
                return res.status(404).json({ message: "Cart item not found" });
            }
            res.status(200).json({ message: "Cart item updated", updatedItem });
        })
        .catch((err) => res.status(500).json({ message: "Failed to update cart item", err }));
};

// Remove item from cart
export const removeItemFromCart = (req, res) => {
    const { id } = req.params;

    Cart.findByIdAndDelete(id)
        .then((deletedItem) => {
            if (!deletedItem) {
                return res.status(404).json({ message: "Cart item not found" });
            }
            res.status(200).json({ message: "Item removed from cart" });
        })
        .catch((err) => res.status(500).json({ message: "Failed to remove item from cart", err }));
};

// Clear cart
export const clearCart = (req, res) => {
    Cart.deleteMany({})
        .then(() => res.status(200).json({ message: "Cart cleared" }))
        .catch((err) => res.status(500).json({ message: "Failed to clear cart", err }));
};