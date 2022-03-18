import React from 'react';
import ReactModal from '../ReactModal/ReactModal';


const SingleProduct = (props) => {
    const {image,price,title}=props.product;
    const {setCartCount}=props;
    return (
        <div className='col-md-4'>
            <div className='card border p-3'>
            <h4>{title.slice(0,10)}</h4>
            <img className='w-50 ms-5 my-3' src={image} alt="" />
            <h3>Price: {price}</h3>
            <div className='d-flex justify-content-around mt-2'>
                <button onClick={setCartCount} className='btn btn-primary'>Add to cart</button>
                <ReactModal product={props.product} className='btn'></ReactModal>
                <button className='btn btn-danger'>Delete</button>
            </div>
            </div>
            
        </div>
    );
};

export default SingleProduct;