import React from 'react';
import useCart from '../../hooks/useCart';

import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products,setProducts]= useProducts();
    const [cart,setCart]=useCart(products);
    const handleRemove = key=>{
    const newCart = cart.filter(product=>product.key!==key)
    }
    return (
        <div>

        <div className='product-container'>
            {
                cart.map(product=><ReviewItem 
                    key={product.key}
                    handleRemove={handleRemove}
                product={product}
                >  

                </ReviewItem>)
            }
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