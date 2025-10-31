import { Navbar } from './components/Navbar';
import { useState } from 'react';
import { ProductDetails } from './ProductDetails';

export function ExplorePage({ products, likedProducts, setLikedProducts, cart, setCart, cartMessage, setCartMessage }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function likePost(product) {
    if (likedProducts.some(p => p.id === product.id)) {
      setLikedProducts(likedProducts.filter(p => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  }

  function handleShowDetails(product) {
    setSelectedProduct(product);
  }

  function addToCart(product) {
    const existingItem = cart.find(p => p.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartMessage('Product added to cart!');
    setTimeout(() => setCartMessage(''), 2000);
  }

  if (selectedProduct) {
    return <ProductDetails products={products} selectedProduct={selectedProduct} cart={cart} setCart={setCart} cartMessage={cartMessage} setCartMessage={setCartMessage} />;
  }
  

  return (
    <div className="min-h-screen">
      <Navbar cart={cart} />
      {cartMessage && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {cartMessage}
        </div>
      )}

      <div className='products-container flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 flex-row flex-wrap mt-5 sm:mt-8 md:mt-10 p-2 sm:p-4'>
        {products.map((product, index) => {
          return (
            <div key={index} className='product w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col justify-center items-center gap-2 mb-6 sm:mb-8 md:mb-10 p-2'>
              <img className='w-32 sm:w-36 md:w-40 xl:w-55 h-36 sm:h-40 md:h-48 max-w-full object-cover rounded-lg' src={product.image} alt={product.name} />
              <center className='name font-extrabold text-sm sm:text-base md:text-lg text-center px-2'>{product.name}</center>
              <p className='price text-base sm:text-lg mt-auto font-semibold'>Rs. {product.price}</p>
              <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-auto w-full'>
                <button onClick={() => handleShowDetails(product)} className='bg-black cursor-pointer text-white rounded-full w-full sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 font-bold text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-300'>Show Details</button>
                <button onClick={() => addToCart(product)} className='bg-blue-600 cursor-pointer text-white rounded-full w-full sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 font-bold text-xs sm:text-sm hover:bg-blue-700 transition-colors duration-300'>Add to Cart</button>
                {likedProducts.some(p => p.id === product.id) ? (
                  <svg onClick={() => likePost(product)} className="size-6 sm:size-7 md:size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                  </svg>
                ) : (
                  <svg onClick={() => likePost(product)} className="size-6 sm:size-7 md:size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
