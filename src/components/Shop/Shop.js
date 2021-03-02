import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';

const Shop = () => {
    const firstEleven = fakeData.slice(3,14);
   const [accessories, setAccessories] = useState(firstEleven);
   console.log(firstEleven);
   console.log(fakeData);
   
   
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
               {
                   accessories.map(accessory=> <li> {accessory.name}</li>)
               }
            </ul>
            </div>
           <div className="cart-container">
               <h3>Im cart</h3>
           </div>

        </div>
        
    );
};

export default Shop;