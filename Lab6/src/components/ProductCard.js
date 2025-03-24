import React from 'react';
import '../csses/ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card" data-testid="product-card">
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <div>
                <button onClick={null}>+</button>
                <button onClick={null}>-</button>
            </div>
        </div>
    );
};

export default ProductCard;
