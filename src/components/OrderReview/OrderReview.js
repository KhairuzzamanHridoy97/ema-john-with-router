import React from 'react';
import useCart from '../../hooks/useCart';

import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products,setProducts]= useProducts();
    const [cart]=useCart(products)
    return (
        <div>

        <div className='product-container'>
            
        </div>
        <div>
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default OrderReview;

/* 
   <h3>{products.length}</h3>
            <h2>{cart.length} </h2>
            <h2>This is Order Review</h2>
            <Cart cart={cart}></Cart>
*/