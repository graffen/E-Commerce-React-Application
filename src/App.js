import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Router>
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products searchQuery={searchQuery} />} />
          <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



