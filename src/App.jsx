import { Routes, Route } from 'react-router-dom';
import './App.css'
import '../public/home/images/home-background.jpg';
import { HomePage } from './HomePage';
import { PolicyPage } from './PolicyPage';
import { ContactPage } from './ContactPage';
import { ExplorePage } from './ExplorePage';
import { ProductDetails } from './ProductDetails';
import { LikedPage } from './LikedPage';
import { products } from './products';

import { useEffect, useState } from 'react';


export function App() {
  products
  

  const [likedProducts, setLikedProducts] = useState(() => {
    const storedLikedProducts = localStorage.getItem('stored-liked-products');
    return storedLikedProducts ? JSON.parse(storedLikedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('stored-liked-products', JSON.stringify(likedProducts));
  }, [likedProducts])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explore" element={<ExplorePage products={products} likedProducts={likedProducts} setLikedProducts={setLikedProducts}/>}/>
        <Route path="/liked" element={<LikedPage products={products} likedProducts={likedProducts} setLikedProducts={setLikedProducts} />} />
      </Routes>
    </div>
  )
}

export default App
