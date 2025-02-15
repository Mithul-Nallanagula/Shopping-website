import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart , removeitem , clearitem , clearCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";


function Cartitem() {
    const navigate = useNavigate();
    const cartitem = useSelector((state) =>  state.cart.cart);
    const dispatch = useDispatch()
    const increse = (item) => {
        dispatch(addtocart(item))
    }
    const decrese = (item) => {
        dispatch(removeitem(item))
    }
    const clear = (item) => {
        dispatch(clearitem(item))
    }
    const price =(item) => {
        return item.price * item.quantity
    }
    const clearall = () => {
        dispatch(clearCart())
    }
    const totalAmount = cartitem.reduce((total, item) => total+ item.price * item.quantity,0)
    return(
        <div className="flex-col flex justify-center   items-center" id="cart3">
           
            
            <div className="  w-[25vw]  m-3">
           {cartitem.length === 0 ? (
            <p>Your Cart is Empty!!</p>
            
           ):(
            <>
             <h1 className="text-4xl text-gray-700 font-extrabold">Your Cart!!</h1>
            <div className="flex  w-[30vw] flex-col" id="cart2">
               
                 {cartitem.map((item) => (
                    <span key={item.id} className=" border-2 justify-between   bg-white w-[30vw] m-2 p-2" id="cart">

                      <span className="flex justify-between">
                        <span className="font-bold" id="item1">{item.title}</span>
                      <span className="font-bold">
                        <button className="border w-[25px] h-[25px] rounded-full font-extrabold " onClick={() => decrese(item) }>-</button>
                        {item.quantity}
                        <button className="border w-[25px] h-[25px] rounded-full" onClick={() => increse(item)}>+</button>
                        </span>
                      </span>
                     <span className="flex justify-evenly mt-2" ><p >{price(item).toFixed(2)}$ </p> <img src="/src/assets/delete-bin-line.png" onClick={() => clear(item)}/></span>
                    </span>

                ))}
            </div>
            </>

               
          
           )}
          {cartitem.length > 0 && (
  <div className="mt-4 flex flex-wrap justify-between items-center w-full">
    <p className="font-bold text-base sm:text-lg md:text-2xl">Total: ${totalAmount.toFixed(2)}</p>
    
    <button 
      id="btnn" 
      className="bg-black text-white font-light px-4 py-2 rounded-md w-full sm:w-[50%] md:w-[30%]"
      onClick={() => clearall()}
    >
      Clear All
    </button>
  </div>
)}



  {cartitem.length === 0 ? (
    <button 
      className="border-2 bg-black text-white px-6 py-3 rounded-2xl cursor-pointer w-full sm:w-[60%] md:w-[40%]"
      onClick={() => navigate('/')}
    >
      Start Shopping
    </button>
  ) : (
    <button 
      className="border-2 w-full sm:w-[60%] md:w-[40%] font-bold py-3 rounded-2xl bg-orange-400"
    >
      Place Order
    </button>
  )}
</div>
        </div>
       
    )}
    

    


export default Cartitem