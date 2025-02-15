import React, { useState } from 'react'
import Fetchdata from '../utils/Fetchdata'
import Productitem from './Productitem';
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom'

function Catogory() {
  const { category } = useParams()
  const navigate = useNavigate();
    const {data , loading , error } = Fetchdata("https://dummyjson.com/products");
    
    
    if(loading) return <p className='text-center '>loading..</p>
    if(error) return <p>{error}</p>
    const catogories = data?.products?[...new Set(data.products.map(item => item.category))] : []
  return (
    <div>
      {!category && (
        <div className=" mt-4 w-full flex justify-evenly bg-white " id='category' >
    <div class="h-[18vh]  text-center cursor-pointer" onClick={() => navigate(`/category/beauty`)}>
      <img alt="beauty Products" src="https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min-1024x683.jpeg" class="w-[8vw] h-[8vw] mt-1 rounded-full   "></img>
        <h2 class="font-bold max-sm:text-xs">Beauty</h2>
        </div>

        <div class="h-[18vh]  text-center cursor-pointer" onClick={() => navigate(`/category/fragrances`)}>
      <img src="https://media.gq.com/photos/6660e0ee755178db8af48a55/master/pass/cologne-lede.png" alt="fragrances" className='w-[8vw] h-[8vw] mt-1 rounded-full  ' />
        <h2 class="font-bold max-sm:text-xs">Fragrance</h2>
        </div>

        <div class="h-[18vh] text-center cursor-pointer" onClick={() => navigate(`/category/furniture`)}>
           <img src="https://bestofexports.com/wp-content/uploads/2021/02/Wooden-Furniture-Manufacturer-1024x683.jpg" alt="Furniture" className='w-[8vw] h-[8vw] mt-1 rounded-full  '  />
        <h2 class="font-bold max-sm:text-xs">Furniture</h2>
        </div>
        
        <div class="h-[18vh]  text-center cursor-pointer" onClick={() => navigate(`/category/groceries`)}>
              <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-07/grocery-list-1024x536.jpg" alt="" className='w-[8vw] h-[8vw] mt-1 rounded-full  ' />
        <h2 class="font-bold max-sm:text-xs">Groceries</h2>
        </div>
       

   
    </div>
 )}{category && <Productitem category={category} /> }   
    </div>
  
     
)
}

export default Catogory