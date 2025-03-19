import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CartIcon from './components/CartIcon';
import Reset from './components/Reset';
import ProductList from './components/ProductList';
import products from './productList'
import Checkout from './components/CheckoutForm';


function App() {

    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showCheckout ? 'hidden' : 'unset';
    }, [showCheckout]);


    const openCheckout = () => setShowCheckout(true);
    const closeCheckout = () => setShowCheckout(false);

    return (
        <div className="App">
            <div className={showCheckout ? 'blurred' : ''}>
                <Header />
                <main>
                    <ProductList products={products} />
                </main>
                <button onClick={openCheckout} className="cart-button">
                    <CartIcon />
                </button>
                <Reset />
                <Footer />
            </div>

            {/* Render the Checkout modal overlay */}
            {showCheckout && <Checkout onClose={closeCheckout} />}
        </div>
    );
}

export default App;
