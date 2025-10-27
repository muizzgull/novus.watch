import { Navbar } from './components/Navbar';
import productImage from '../public/home/images/hero-image.png';

export function ExplorePage() {
  const products = [
    {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }, {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }, {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }, {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }, {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }, {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }, {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }, {
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
    }
  ];

  return(

    <div>
      <Navbar />
      
      <div className='products-container flex justify-center gap-20 flex-row flex-wrap mt-10'>
        {products.map((product, index) => {
          return (
          <div key={index} className='product w-1/5 flex flex-col justify-center items-center gap-2 mb-10'>
            <img className='w-38' src={product.image} />
            <p className='name font-extrabold text-l'>{product.name}</p>
            <p className='price'>{product.price}</p>
            <button className='bg-black cursor-pointer text-white rounded-4xl w-30 h-10 font-bold'>Show Details</button>
          </div>  
          );
        })}
      </div>
    </div>
  );
}