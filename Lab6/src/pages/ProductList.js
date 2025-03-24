import CartIcon from '../components/CartIcon';
import ProductCard from '../components/ProductCard';
import products from '../productList'

function ProductList() {
    return (
        <div className="ProductList">
            <main>
                <h2>Product Page</h2>
                <div className="product-container">
                    {products.map((product) => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </main>
            <CartIcon itemCount={0} />
        </div>
    );
}

export default ProductList;
