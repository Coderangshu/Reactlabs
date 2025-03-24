import './App.css';
import { Routes, Route } from 'react-router-dom';
import Orders from './pages/Orders';
import ProductList from './pages/ProductList';
import Favourites from './pages/Favourites';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="*" element={<ProductList />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
