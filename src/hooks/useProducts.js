import { useEffect, useState } from "react";

const useProducts =()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    //return necessary things
    return [products,setProducts];
}

export default useProducts;







































// import React from 'react';

// const useProducts = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default useProducts;