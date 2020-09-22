import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity,key,price} = props.product;
    const ReviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginleft:'200px'
    };
    return (
        <div className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p> <small>${price}</small></p>
            <br></br>
            <button 
                className="main-button"
                onClick={ () => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;