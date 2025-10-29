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
      <div className="flex justify-center mt-2 mb-8">
        <h1 className="text-black font-rm text-5xl">Your Liked Products</h1>
      </div>

      <div className="flex justify-center items-center">
        {(likedProducts || []).length === 0 ? (
            <p className="text-xl text-gray-600 p-10 border border-dashed border-gray-300 rounded-xl">
              You have not Liked any product Yet!
            </p>
          ) : (
        <div className="liked-posts-container flex flex-wrap justify-center items-center gap-100 gap-y-17">
          

        {(likedProducts || []).map((likedProduct, i) => {
          function handleShowDetails(product) {
            setSelectedProduct(product);
          }
        return (
        
              <div key={i} className="liked-post rounded-2xl bg-white border-2 mt-10 pt-5 mb-10 flex flex-col justify-center items-center w-25% h-110">
                <div className="flex flex-col justify-center items-center">
                  <img className="w-38" src={likedProduct.image} />
                  <p className='name font-extrabold text-l'>{likedProduct.name}</p>
                  <p className='price font-extrabold text-xl text-red-600'>{likedProduct.price}</p>
                </div>
                <div className='flex justify-center items-center gap-7 p-5'>
                  <div className='flex justify-center items-center gap-7 mt-3 p-5'>
                    <button onClick={() => handleShowDetails(likedProduct)} className='bg-black cursor-pointer text-white rounded-4xl w-35 h-10 font-bold'>Show Details</button>
                {likedProducts.some(p => p.id === likedProduct.id) ? <svg onClick={() => likePost(likedProduct)} className="size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg> : <svg onClick={() => likePost(likedProduct)} className="size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>}
                  </div>
                </div>
                <h1>

                </h1>
              </div>
            );
          })}
        </div>
  )}
      </div>
    </div>
  )
}