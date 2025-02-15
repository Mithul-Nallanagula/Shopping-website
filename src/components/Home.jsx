import React from 'react'
import Header from './Header'
import Catogory from './Catogory'
import Trending from './Trending'
import Fetchdata from '../utils/Fetchdata'
import Productlist from './Productlist'
function Home() {
  const {data,loading, error} = Fetchdata('https://dummyjson.com/products')
  if(loading) return (
    <div className="flex justify-center items-center h-[30vh]">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
  )
  return (
   <>
     
     <Catogory/>
     <Trending />
     <Productlist/>
   </>
  )
}

export default Home