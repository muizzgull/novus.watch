import { Navbar } from "./components/Navbar";
// import { likedProducts } from "./likedProducts";
import { useState } from "react";
import { ProductDetails } from "./ProductDetails";



export function LikedPage({ likedProducts, setLikedProducts }) {


  function likePost(product) {
    if(likedProducts.some(p => p.id === product.id)) {
      setLikedProducts(likedProducts.filter(p => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
    
  }


  const [selectedProduct, setSelectedProduct] = useState(null);
  if (selectedProduct) {
    return <ProductDetails selectedProduct={selectedProduct} />
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex justify-center mt-2 mb-4 sm:mb-6 md:mb-8 px-4">
        <h1 className="text-black font-rm text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Your Liked Products</h1>
      </div>

      <div className="flex justify-center items-center px-4">
        {(likedProducts || []).length === 0 ? (
            <p className="text-lg sm:text-xl text-gray-600 p-6 sm:p-8 md:p-10 border border-dashed border-gray-300 rounded-xl text-center max-w-md">
              You have not Liked any product Yet!
            </p>
          ) : (
        <div className="liked-posts-container flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {(likedProducts || []).map((likedProduct, i) => {
            function handleShowDetails(product) {
              setSelectedProduct(product);
            }
          return (
              <div key={i} className="liked-post rounded-2xl bg-white border-2 mt-4 sm:mt-6 md:mt-8 lg:mt-10 pt-3 sm:pt-4 md:pt-5 mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex flex-col justify-center items-center w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 p-3 sm:p-4">
                <div className="flex flex-col flex-wrap justify-center items-center w-full">
                  <img className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-38 max-w-full h-auto object-cover rounded-lg mb-2" src={likedProduct.image} alt={likedProduct.name} />
                  <center className='name font-extrabold text-sm sm:text-base md:text-lg wrap-word text-center px-2'>{likedProduct.name}</center>
                  <p className='price font-extrabold text-lg sm:text-xl text-red-600 mt-1'>{likedProduct.price}</p>
                </div>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-7 p-3 sm:p-4 md:p-5 w-full'>
                  <button onClick={() => handleShowDetails(likedProduct)} className='bg-black cursor-pointer text-white rounded-4xl w-full sm:w-32 md:w-35 h-8 sm:h-9 md:h-10 font-bold text-sm hover:bg-gray-800 transition-colors duration-300'>Show Details</button>
                  {likedProducts.some(p => p.id === likedProduct.id) ?
                    <svg onClick={() => likePost(likedProduct)} className="size-6 sm:size-7 md:size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
                    :
                    <svg onClick={() => likePost(likedProduct)} className="size-6 sm:size-7 md:size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                  }
                </div>
              </div>
            );
          })}
        </div>
  )}
      </div>
    </div>
  )
}