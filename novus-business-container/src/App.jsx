import { Routes, Route } from 'react-router-dom';
import './App.css'
import '../public/home/images/home-background.jpg';
import { HomePage } from './HomePage';
import { PolicyPage } from './PolicyPage';
import { ContactPage } from './ContactPage';
import { ExplorePage } from './ExplorePage';
import { ProductDetails } from './ProductDetails';
import { LikedPage } from './LikedPage';
import { CartPage } from './CartPage';
import { products } from './products';

import { useEffect, useState } from 'react';


export function App() {
  products
  

  const [likedProducts, setLikedProducts] = useState(() => {
    const storedLikedProducts = localStorage.getItem('stored-liked-products');
    return storedLikedProducts ? JSON.parse(storedLikedProducts) : [];
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('stored-cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('stored-liked-products', JSON.stringify(likedProducts));
  }, [likedProducts])

  useEffect(() => {
    localStorage.setItem('stored-cart', JSON.stringify(cart));
  }, [cart])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explore" element={<ExplorePage products={products} likedProducts={likedProducts} setLikedProducts={setLikedProducts} cart={cart} setCart={setCart} cartMessage={cartMessage} setCartMessage={setCartMessage}/>}/>
        <Route path="/liked" element={<LikedPage products={products} likedProducts={likedProducts} setLikedProducts={setLikedProducts} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  )
}

export default App
