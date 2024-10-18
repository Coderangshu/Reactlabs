import React from 'react';
import ProductCard from './ProductCard';

function ProductList({products}) {
    return (
        // write your code inside the <div> </div>
        // Should contain all the products
        <div data-testid="product-list">
            <h2>Product List</h2>
            <div className="product-container">
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ProductList;