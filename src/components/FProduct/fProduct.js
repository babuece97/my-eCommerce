import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './pRdct.css';

const fProducttt = (props) => {
    console.log(props.item);
    const { category, name, img, seller, stock, star, price } = props.item; // DEstructing
    return (
        <div className="item">
            <div>
                {/* <img src={props.item.img} alt=""/> WithOut DeS*/}
                <img src={img} alt="" />

            </div>

            <div>
                <h3 className="item-name">{name}</h3>
                <p><small>PoOsted by :{seller} </small></p>
                <p> bUy oNly BdTk :{price} </p>
                <p> HuRRy {stock} is Left </p>

                <h3>{category} productS</h3>
                <h3>{star}  stars  bY usErs</h3>
                <button className="item-button"><FontAwesomeIcon icon={faShoppingCart} />aDD to cArt</button>
            </div>

        </div>
    );
};

export default fProducttt;