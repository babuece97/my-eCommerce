import React from 'react';
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
            </div>


            {/* <h3>{props.item.key}</h3>
            <h6> Im Mal2</h6>
            <h3>{props.item.category}</h3>
            <h3> Im Mal3</h3> */}
        </div>
    );
};

export default fProducttt;