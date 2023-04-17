import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    // const cart = props.cart; // Option 1
    // const { cart } = props; // Option 2

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected Item: {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;