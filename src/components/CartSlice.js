import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
};

const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart:(state,action) => {
            const product = action.payload;
            const existingitem = state.cart.find((item) => item.id ===product.id);
            if(existingitem){
                existingitem.quantity += 1;
            }else{
                state.cart.push({...product, quantity:1});
            }
        },
        removeitem :(state,action) => {
            const product = action.payload;
            const existingitem = state.cart.find((item) => item.id ===product.id);
            if(existingitem.quantity > 1) {
                existingitem.quantity -= 1;
            }else{
                state.cart = state.cart.filter((item) => item.id !== product.id);
            }
        },
        clearitem : (state,action) => {
            const product = action.payload;
            state.cart = state.cart.filter((item) => item.id !==product.id);

        },
        clearCart: (state) => {
            state.cart = []; 
        }

    }
});
export const {addtocart , removeitem , clearitem , clearCart} = cartslice.actions;
export default cartslice.reducer;