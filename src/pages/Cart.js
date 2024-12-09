import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';

export default function Cart() {

  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items, 
            size: item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
    
    
  }, [cartItems])




  return (
    <div>
      
    </div>
  )
}
