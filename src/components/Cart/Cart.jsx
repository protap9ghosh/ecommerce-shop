import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    // const cart = props.cart; // Option 1
    // const { cart } = props; // Option 2

    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected Item: {cart.length}</p>
            <p>Total price:</p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;
