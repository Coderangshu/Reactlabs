import React from 'react';
import '../csses/ProductCard.css';
import { useDispatch } from 'react-redux';
import { incrementCart, decrementCart } from '../store';

const ProductCard = ({ product }) => {
    // get the incrementCart and decrementCart fucntions using dispatch

    return (
        <div className="product-card" data-testid="product-card">
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <div>
                {/* add the function to onClick for increase */}
                <button onClick={}>+</button>
                {/* add the function to onClick for decrease */}
                <button onClick={}>-</button>
            </div>
        </div>
    );
};

export default ProductCard;
