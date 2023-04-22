import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
    addToDb,
    deleteShoppingCart,
    getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Load API data
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // Find a different and add to cart product with id
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        // Step-1: get id
        for (const id in storedCart) {
            // Step-2: get product from products state by using id
            const addedProduct = products.find((product) => product.id === id);

            // Step-3: add quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // Step-4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct);
        }
        // Step-5: set the cart
        setCart(savedCart);
    }, [products]);

    // Set cart option
    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1

        const exists = cart.find((pd) => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    };

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>
                ))}
            </div>

            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to="/orders">
                        <button className="btn-proceed">
                            Review Order
                            <FontAwesomeIcon className="" icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
