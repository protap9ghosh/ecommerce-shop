import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                    ></Product>
                ))}
            </div>

            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;