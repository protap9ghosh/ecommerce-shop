import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
    const { img, name, seller, ratings, quantity, price } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button
                onClick={() => handleAddToCart(props.product)}
                className="btn-cart"
            >
                Add To Cart
                <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
