import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Productzz from '../FProduct/fProduct';
const ProductDetailf = () => {
    const {prdKey} = useParams ()
    const itemm =fakeData.find(pd =>pd.key === prdKey);
    console.log(itemm);
    return (
        <div>
            <h1> Have a look here to   Detail for the product</h1>
            <Productzz showAddTocart= {false} item = {itemm}></Productzz>
        </div>
    );
};

export default ProductDetailf;