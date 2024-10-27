import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CartIcon from './components/CartIcon';
import ProductList from './components/ProductList';
import products from './productList'

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <ProductList products={products}/>
        </main>
        <CartIcon itemCount={0} />
      <Footer />
    </div>
  );
}

export default App;
