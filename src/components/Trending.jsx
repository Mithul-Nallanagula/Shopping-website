import React from 'react'
import Fetchdata from '../utils/Fetchdata'
import { Link } from 'react-router-dom';


function Trending() {
    const {data , loading , error} = Fetchdata("https://dummyjson.com/products");
    if(loading)  return <p className='text-center'>Loading....</p>


     
   return (
    <>
   <h1 className='text-center mt-2 font-extrabold'>Discount Products</h1>
    <div className='h-[30vh] relative w-screen bg-white mt-3 flex justify-evenly items-center  overflow-x-scroll '>
         
     {data?.products.map((item) => 
     <div key={item.id} className='flex justify-center  h-full m-2  items-center'>
      
          {
            item.discountPercentage > 17 ? (
                <div className= '  w-[30vw] items-center flex h-[10vh]  object-cover     m-3'>
                 <Link to={`/product/${item.id}`} ><img src={item.thumbnail} className='block cursor-pointer '  alt="" /></Link>
               </div>
            ):(null)
          }
        </div>

    )}</div>
   </> 
   )
    
  

}

export default Trending