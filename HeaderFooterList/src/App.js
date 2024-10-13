import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import products from './productList';

function App() {
  return (
    <div className="App">
            <Header />
              <main>
                <ProductList products={products}/>
              </main>
            <Footer />
        </div>
  );
}

export default App;
