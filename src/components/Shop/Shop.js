import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';

const Shop = () => {
    const firstEleven = fakeData.slice(3,14);
   const [products, setProducts] = useState(firstEleven);
    return (
        <div>
            <h1>পরামর্শ থাকলে দিতে পারেন।</h1>
           <h3>{products.length}</h3>
           <ul>
               {
                   products.map(product=> <li> {product.name}</li>)


               }




           </ul>
        </div>
    );
};

export default Shop;