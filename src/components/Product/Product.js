import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
     //console.log(props,product,key);
    const { img, name, seller, price, stock,key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
    <h4 className="product-name"> <Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock-order soon</small></p>
                {props.showaddToCart === true && <button 
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />Add to card
                        </button>}
            </div>
        </div>
    );
};

export default Product;