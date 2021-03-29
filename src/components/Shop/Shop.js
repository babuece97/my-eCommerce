import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Productzz from '../FProduct/fProduct.js';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const firstEleven = fakeData.slice(3,9);
   const [accessories, setAccessories] = useState(firstEleven);
   const [cart, setCart] =useState([]);
//    console.log(firstEleven);

   const handelADDDiTemmm =(jinish)=> {
    const toBeAddedKey = jinish.key;
    const sameItem = cart.find(prd=>prd.key === toBeAddedKey.key);
    let count =1;
    let newCart;
    if (sameItem){
        const count = sameItem.quantity +1;
        sameItem.quantity= count;
        const others = cart.filter(prd => prd.key !== toBeAddedKey );
        newCart =[...others, sameItem];
    }
    else {
        jinish.quantity  = 1;
        newCart =[...cart, jinish];
    }  
       setCart(newCart); 
       addToDatabaseCart(jinish.key,count);
   }
  
   
   
    return (
        <div className="twin-container">
            <div className="product-container">
            
        {
            accessories.map(accessory=> <Productzz 
                key={accessory.key}
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