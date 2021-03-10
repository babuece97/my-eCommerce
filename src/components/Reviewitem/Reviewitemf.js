import React from 'react';

const Reviewitemf = (props) => {
    const {name, quantitYy} = props.itemm;
    const reviewItemStyle ={
        borderBottom:'2px solid lightpink',
        marginBottom: '6px',
        paddingBottom: '7px',
        marginLeft: '100px'
    };

    return (
        <div style = {reviewItemStyle}className="review-item">
            <h3 className="item-name">{name}</h3>
            <p> Quantity :{quantitYy}</p>
            <br/>
            <button className="item-button">RemoveE</button>
        </div>
    );
};

export default Reviewitemf;