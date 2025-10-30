import { Navbar } from "./components/Navbar";
import { useState } from 'react';

export function ProductDetails({ selectedProduct }) {
  // State to manage the currently displayed image and the selected thumbnail index
  const [mainImage, setMainImage] = useState(selectedProduct.image);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize to -1 for primary image

  function changeImage(newImageSrc, index) {
    setMainImage(newImageSrc);
    setSelectedIndex(index); // Update the selected thumbnail index
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Navbar />
      <div className="flex justify-center items-center grow">
        <div className="img-container rounded-2xl gap-y-10 bg-gray-100 w-120 h-140 flex flex-col justify-center items-center">
          <img className="w-60" src={mainImage} alt={selectedProduct.name} />

          <div className="more-images flex gap-10 mb-2">
            {/* Thumbnail for the primary image */}
            
            <div 
              className={`flex justify-center items-center h-20 ${selectedIndex === -1 ? 'border-3 rounded-2xl border-black' : ''} p-1`} 
            >
              <img 
                className="w-10 cursor-pointer" 
                onClick={() => changeImage(selectedProduct.image, -1)} 
                src={selectedProduct.image} 
                alt="Primary thumbnail"
              />
            </div>

            {/* Map over the 'moreImages' array to create clickable thumbnails */}
            {selectedProduct.moreImages.map((imageObj, index) => (
              <div 
                key={index} 
                className={`flex justify-center rounded-2xl items-center h-20 ${selectedIndex === index ? 'border-3 border-black' : ''} p-1`} 
              >
                <img 
                  className="w-10 cursor-pointer" 
                  onClick={() => changeImage(imageObj.image, index)} 
                  src={imageObj.image} 
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-details flex flex-col ml-10 justify-between">
          <div className="max-w-100 flex flex-col gap-2 mt-8">
            <h1 className="name-container font-rm text-3xl font-extrabold">{selectedProduct.name}</h1>
            <h1 className="font-bold text-red-700 text-xl mt-5"><span className="text-black">Price: </span> {selectedProduct.price}</h1>
          </div>
          <div className="type-container mt-5">
            <h1 className="font-rm font-bold text-2xl">Type</h1>
            <p>{selectedProduct.type}</p>
          </div>
          <div className="description-container max-w-80 mt-6">
            <h1 className="font-rm font-xxb text-2xl">Description</h1>
            <p className="description wrap-break-word">{selectedProduct.description}</p>
          </div>
          <div className="delivery-charges-container pt-3">
            <h1 className="font-rm font-xxb text-2xl">Delivery Charges:</h1>
            <p className="font-bold text-red-700 text-xl">{selectedProduct.deliveryCharges}</p>
            <div className="flex justify-center flex-col">
              <svg className="mt-5 ml-1 size-8 cursor-default" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
              </svg>
              <p className="ml-0.5">Liked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}