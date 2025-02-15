import React from "react";
import { useParams } from "react-router-dom";
import Fetchdata from "../utils/Fetchdata";
import { addtocart } from "./CartSlice";
import { useDispatch } from "react-redux";

function Productdetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product, loading, error } = Fetchdata(`https://dummyjson.com/products/${id}`);
 
  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <>
      {/* Product Image & Details */}
      <div className="p-6 mt-3 border-2 flex flex-col items-center justify-center md:flex-row md:items-start md:gap-6 lg:gap-12">
        {/* Product Image */}
        <img 
          src={product?.images[0]} 
          alt={product?.title}  
          className="bg-white w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] object-cover" 
        />  

        {/* Product Info */}
        <div className="text-center md:text-left md:w-[50vw] lg:w-[40vw]">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="text-lg">{product?.description}</p>
          <p className="font-bold text-lg">Price: ${product?.price}</p>
          <p className="text-sm md:text-base">Stock: {product?.stock}</p>

          {/* Add to Cart Button */}
          <button 
            className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[12vw] border-2 h-[5vh] bg-black text-white rounded-md cursor-pointer mt-3 p-2"
            onClick={() => dispatch(addtocart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Warranty, Shipping, Return Info Section */}
      <div className="mt-2 bg-white w-full flex flex-wrap justify-center gap-6 py-6 md:gap-8">
        <div className="flex flex-col items-center w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
          <img src="https://www.shutterstock.com/image-vector/circle-check-mark-shape-vector-600nw-2470360977.jpg" className="w-[10vw] max-w-[60px]"/>
          <h1 className="font-bold text-sm md:text-base">{product?.warrantyInformation}</h1>
        </div>

        <div className="flex flex-col items-center w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yi0djlxZnT8c0nYgWrX_pimeI7rSixOCzA&s" className="w-[10vw] mt-[1.2vw]  max-w-[60px]"/>
          <h1 className="font-bold text-sm md:text-base">{product?.shippingInformation}</h1>
        </div>

        <div className="flex flex-col items-center w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhTpyWmwtyAmUotDgSTEEf5UFQz3nqF5yHQ&s" className="w-[10vw] max-w-[60px]"/>
          <h1 className="font-bold text-sm md:text-base">Min Order: {product?.minimumOrderQuantity}</h1>
        </div>

        <div className="flex flex-col items-center w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVkhlJdZ1-IXr9zNK9USnVHR0WDReGBkP9A&s" className="w-[10vw] max-w-[60px]"/>
          <h1 className="font-bold text-sm md:text-base">{product?.returnPolicy}</h1>
        </div>
      </div>

    
      <div className="flex flex-wrap justify-center gap-4 p-4 " id="imp">
  {product?.reviews?.map((item, index) => (
    <div 
      key={index} 
      className="bg-white flex flex-col items-center justify-center 
                w-[90vw] 
                p-3  rounded-lg shadow-md"
      id="main1"
    >
      <h1 className="font-extrabold text-sm ">Date: {item.date}</h1>
      <h1 className="font-bold text-sm">Rating: {item.rating}</h1>
      <h1 className="mt-2 text-sm ">
        Comment: <span className="font-bold">{item.comment}</span>
      </h1>
      <h1 className="mt-2 text-sm  ">
        Written By: <span className="font-bold">{item.reviewerName}</span>
      </h1>
      <h1 className="mt-2 text-sm  ">
        Email: <span className="font-bold">{item.reviewerEmail}</span>
      </h1>
    </div>
  ))}
</div>
    </>
  );
}

export default Productdetail;