import React from "react";
import Fetchdata from "../utils/Fetchdata";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";

function Productlist() {
  const dispatch = useDispatch();
  const { data, loading, error } = Fetchdata("https://dummyjson.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-auto bg-white mt-3 flex flex-wrap gap-4 p-4" >
      {data?.products?.map((item) => (
        <div key={item.id} className="border-2 h-[40vh] w-[15vw] p-2 flex-col items-center text-center rounded-[5px]" id="box">

        <Link to={`/product/${item.id}`} > <img src={item.thumbnail} className="cursor-pointer" alt={item.title} /> </Link>

          <p className="truncate overflow-hidden">{item.title}</p>
          <p className="font-bold mt-1  ">{item.price}$</p>
         {item.stock <= 4 ? (<p >Only <span className="font-bold inline">{item.stock} </span>in Stock</p>) : (<p>Instock:<span className="font-bold inline">{item.stock}</span></p>)}
         <button id="btn1"className="w-[10vw] h-[4vh] border-2 mt-3 bg-black text-white cursor-pointer rounded-[5px]" onClick={() => dispatch(addtocart(item))} >Add to Cart</button>


        </div>
      ))}
    </div>
  );
}

export default Productlist;