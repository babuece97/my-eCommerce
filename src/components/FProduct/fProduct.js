import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './pRdct.css';
import { Link } from 'react-router-dom';

const fProducttt = (props) => {
    // console.log(props);
    const { category, name, img, seller, stock, star, price ,key} = props.item; // DEstructing
    return (
        <div className="item">
            <div>
                {/* <img src={props.item.img} alt=""/> WithOut DeS*/}
                <img src={img} alt="" />

            </div>

            <div>
                <h3 className="item-name">
                    {/* <Link to = "/productLink">{name}</Link></h3> */}
                    <Link to = {"/producT/" + key}>{name}</Link></h3>
                <p><small>PoOsted by :{seller} </small></p>
                <p> bUy oNly BdTk :{price} </p>
                <p> HuRRy {stock} is Left </p>

                <h3>{category} productS</h3>
                <h3>{star}  stars  bY usErs</h3>
                { props.showAddToCart && 
                    <button 
                    className="item-button"
                onClick= {()=>props.handelADDDiTemmm(props.item)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />aDD to cArt
                </button>}
            </div> 
            {/* with parameter */}

        </div>
    );
};

export default fProducttt;