import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Productzz from '../FProduct/fProduct.js';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstEleven = fakeData.slice(3,9);
   const [accessories, setAccessories] = useState(firstEleven);
   const [cart, setCart] =useState([]);
//    console.log(firstEleven);

   const handelADDDiTemmm =(jinish)=> {
    //    console.log('jinis added', jinish);
       const newCart = [...cart, jinish];
       setCart(newCart);
   }
  
   
   
    return (
        <div className="shop-container">
            <div className="product-container">
            
        {
            accessories.map(accessory=> <Productzz 
                showAddToCart={true}
                handelADDDiTemmm = {handelADDDiTemmm}
                item= {accessory}> </Productzz>)
        }
    
            </div>
           <div className="cart-container">
            <Cart cart= {cart}> </Cart>
           </div>

        </div>
        
    );
};

export default Shop;