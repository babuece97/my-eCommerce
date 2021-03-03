import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Productzz from '../FProduct/fProduct.js';

const Shop = () => {
    const firstEleven = fakeData.slice(3,9);
   const [accessories, setAccessories] = useState(firstEleven);
   console.log(firstEleven);
   
   
    return (
        <div className="shop-container">
            <div className="product-container">
            
        {
            accessories.map(accessory=> <Productzz item= {accessory}> </Productzz>)
        }
    
            </div>
           <div className="cart-container">
               <h3>Im cart</h3>
           </div>

        </div>
        
    );
};

export default Shop;