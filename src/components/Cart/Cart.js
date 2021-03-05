import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    console.log(cart);
    // const total =cart.reduce( (total ,prd) => total+prd.price , 0) WITH REDUCE MeTHOD
    let total = 0;
    for (let i = 0; i<cart.length; i++) {
        const product = cart [i];
        total = total + product.price;
    }
     
    let shipping= 0;

     if (total>35) {
         shipping = 0;
     }

     else if (total > 15){
        shipping = 4.99;
    
    }

     else if (total > 0){
         shipping = 12.99;

    }

    const moms = (total/25).toFixed(2);
    const grandTotal = (total + shipping +Number(moms)).toFixed(2);
    const formatNUMber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
             <h3> croy bikroy summary </h3>
             <p>Malamal ordered : {cart.length} </p>
             <p> Product PPrice : {formatNUMber(total)}</p>
             <p> <small> SHIPPING COST : {shipping}</small></p>
             <p><small> MOMs : {moms}</small></p>
             <p>Total pPrice:{grandTotal} </p>

        </div>
    );
};

export default Cart;