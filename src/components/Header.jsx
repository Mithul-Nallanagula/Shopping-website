import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const navigate = useNavigate()
  const cartitem = useSelector((state) => state.cart.cart)
  const [query , setQuery] = useState('')
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search/${query}`);
      setQuery('');
    }
  };
  return (
    <div className=' bg-white flex-wrap w-screen h-[80px] flex items-center justify-evenly max-sm:justify-between  '>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspnibYzmgf7HITswAnkIu2w1WXExW-f37FyJzuj1uGVCJRgzRXmgKk5Ragqc-9hf2nE8&usqp=CAU' className='flex w-[250px]  cursor-pointer sm:w-[150px] max-sm:w-[100px] ' onClick={() => navigate("/")} ></img>
        <input type="text" placeholder='Browse Any Item' onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} value={query} className='max-sm:text-xs max-sm:h-[25px] h-[40px] w-[30vw] p-2 bg-gray-200 outline-none sm:w-[40vw]'></input>
        <div className='flex w-[10vw] h-[5vh] justify-between items-center md:mr-[3vw] max-sm:mr-1 max-sm:w-[30vw]'>
            <h2 className='text-2xl cursor-pointer xl:text-xl md:text-xl md:m-3 sm:text-[15px] max-sm:text-xs  ' onClick={() => navigate("/")} >Home</h2>
            <h2 className='text-2xl cursor-pointer xl:text-xl md:text-xl ] sm:text-[15px] sm:m-3 max-sm:text-xs max-sm:m-3 ' onClick={() => navigate("/Cart")}>Cart({cartitem.length})</h2>

        </div>
    </div>
  )
}

export default Header