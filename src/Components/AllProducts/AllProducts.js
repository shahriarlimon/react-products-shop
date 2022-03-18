import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProducts/SingleProduct';

const AllProducts = (props) => {
    const {setCartCount}=props;
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h3>All Products</h3>
           <div className='row g-2'>
           {
                products.map(product=><SingleProduct setCartCount={setCartCount} key={product.id} product={product}></SingleProduct>)
            }
           </div>
            
        </div>
    );
};

export default AllProducts;