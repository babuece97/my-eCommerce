import React, {useEffect, useState} from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Reviewitemf from '../Reviewitem/Reviewitemf';

const Rreview = () => {
    const [cart, setCart] = useState([]);
    const removeItem= (itemKey) => {
        const newCart = cart.filter(prdCart =>prdCart.key!== itemKey);
        setCart(newCart);
        removeFromDatabaseCart(itemKey);
    }
    useEffect(()=> {
        // from cart
        const savedCart = getDatabaseCart();
        const productKeyss = Object.keys(savedCart); // Reserve Method keys, To get all keys from Obj
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
            {
                cart.map(pdds=>  <Reviewitemf 
                    key = {pdds.key}     // to remove the error n give to unique key
                    removeItem ={removeItem} //passing a property 
                    itemm = {pdds} >   </Reviewitemf>)
            }
        </div>
    );
};

export default Rreview;