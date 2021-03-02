import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';

const Shop = () => {
    const firstEleven = fakeData.slice(3,14);
   const [accessories, setAccessories] = useState(firstEleven);
   console.log(firstEleven);
   console.log(fakeData);
   
   
    return (
        <div>
            <h1>পরামর্শ থাকলে দিতে পারেন।</h1>
           <h3>{accessories.length}</h3>
           <ul>
               {
                   accessories.map(accessory=> <li> {accessory.name}</li>)


               }




           </ul>
        </div>
        
    );
};

export default Shop;