import React, {useEffect, useState} from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Rreview = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        // from cart
        const savedCart = getDatabaseCart();
        const productKeyss = Object.keys(savedCart); // Reserve Method keys
        const cartProducts = 
        productKeyss.map( keY => {
            const productt = fakeData.find( prdss => prdss.key === keY);
            productt.quantitYy = savedCart [keY];
            return productt;
        });
        setCart(cartProducts);

    }, [])
    return (
        <div>
            <h1> My name is REWWWiewwww</h1>
            <h1> carttt  itemms :{cart.length}</h1>
        </div>
    );
};

export default Rreview;