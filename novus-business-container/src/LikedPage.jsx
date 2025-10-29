import { Navbar } from "./components/Navbar";
import { likedProducts } from "./likedProducts";
import { useState } from "react";
import { ProductDetails } from "./ProductDetails";


export function LikedPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  if (selectedProduct) {
    return <ProductDetails products={likedProducts} selectedProduct={selectedProduct} />
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex justify-center items-center">
        <div className="liked-posts-container flex flex-wrap justify-center items-center gap-100 gap-y-17">
          {likedProducts.map((likedProduct, i) => {
            function handleShowDetails(product) {
              setSelectedProduct(product);
            }

            return (
              <div key={i} className="liked-post mt-10 mb-10 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <img className="w-58" src={likedProduct.image} />
                  <p className='name font-extrabold text-l'>{likedProduct.name}</p>
                  <p className='price'>{likedProduct.price}</p>
                </div>
                <div className='flex justify-center items-center gap-7'>
                  <div className='flex justify-center items-center gap-7 mt-3'>
                    <button onClick={() => handleShowDetails(likedProduct)} className='bg-black cursor-pointer text-white rounded-4xl w-35 h-10 font-bold'>Show Details</button>
                    <svg className="size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" /></svg>
                  </div>
                </div>
                <h1>

                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}