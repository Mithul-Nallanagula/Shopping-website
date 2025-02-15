import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Fetchdata from '../utils/Fetchdata';
import { addtocart } from "./CartSlice";
import { useDispatch } from "react-redux";


function Productitem({ category }) {
    const dispatch = useDispatch();
  
    const { data, loading, error } = Fetchdata(`https://dummyjson.com/products/category/${category}`);

    if (loading) return <p className='text-center'>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="mt-4 flex flex-wrap justify-center gap-4">
            {data?.products?.length > 0 ? (
                data.products.map(product => (
                    <div key={product.id} className="p-4 border bg-white rounded-lg shadow-md w-[20vw] text-center" id='box4'>
                       <Link to={`/product/${product.id}`} >  <img src={product.thumbnail} alt={product.title} className="w-full h-[15vw] object-cover rounded" /></Link>
                        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                        <p className="text-sm">{product.description}</p>
                        <p className="font-bold text-lg">Price: ${product.price}</p>
                        <button className="w-[10vw] h-[4vh] border-2 mt-3 bg-black text-white cursor-pointer rounded-[5px]" onClick={() => dispatch(addtocart(product))}>Add to Cart</button>
                    </div>
                ))
            ) : (
                <p>No products found for this category.</p>
            )}
        </div>
    );
}

export default Productitem;