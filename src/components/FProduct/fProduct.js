import React from 'react';

const fProducttt = (props) => {
    console.log(props.item.name);
    return (
        <div>
            
            <h3>{props.item.name }</h3>
            <h6> Im jinisgggggggggg</h6>
            <h3>{props.item.key}</h3>
        </div>
    );
};

export default fProducttt;