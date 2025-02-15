import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Fetchdata from '../utils/Fetchdata';
import { addtocart } from './CartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Searchitem() {
    const navigate = useNavigate();
    const { query } = useParams();
    const dispatch = useDispatch()
    const { data, loading, error } = Fetchdata(`https://dummyjson.com/products`);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p>{error}</p>;

    const filteredProducts = data?.products?.filter((item) => {
        return(
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        );
    });
    return(
        <div className="mt-4 flex flex-wrap justify-center gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg bg-white shadow-md w-[20vw] text-center" id='box2'>
              <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className="w-full h-[15vw] object-cover rounded" />
              </Link>
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="font-bold text-lg">Price: ${product.price}</p>
              <button
                className="w-[10vw] h-[4vh] border-2 mt-3 bg-black text-white cursor-pointer rounded-[5px]"
                onClick={() => dispatch(addtocart(product))} id='btn2'
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
            <div className='flex flex-col justify-center items-center'>
          <p>No products found for "{query}".</p>
          <button id="btn3"className='border-2 bg-black text-white w-[10vw] h-[3vw] rounded-2xl cursor-pointer' onClick={() => navigate('/') } >Go to Home</button>
          </div>
        )}
      </div>
    );
}

export default Searchitem