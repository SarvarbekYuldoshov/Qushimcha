import { useState } from 'react';
import './index.css';
import Rasm_8 from "./images/rasm8.png";
import Rasm_16 from "./images/rasm16.png";
import Rasm_17 from "./images/rasm17.png";
import Rasm_18 from "./images/rasm18.png";
import Rasm_19 from "./images/rasm19.png";
import Rasm_20 from "./images/rasm20.png";
import Rasm_21 from "./images/rasm21.png";
import Rasm_22 from "./images/rasm22.png";
import Rasm_23 from "./images/rasm23.png";
import Rasm_24 from "./images/rasm24.png";
import Rasm_25 from "./images/rasm25.png";

function App() {
  return (
    <div className='App'>
      <Navbar />
    </div>
  );
}

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container mx-auto max-w-[1200px] p-[20px]'>
        <ul className='flex items-center gap-10 mt-[40px]'>
          <img src={Rasm_8} alt="Logo" />
          <p className='font-semibold text-[16px] text-[#DB4444] w-[150px]'>Mahsulotlarimiz</p>
        </ul>
        
        <div className='flex flex-wrap gap-[20px] mt-20'>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ image, name, price, rating }) => {
  return (
    <div className='product-card bg-[#F5F5F5] w-[270px] h-[250px] p-4'>
      <div className='relative flex flex-col items-center'>
        <img className='w-[150px] h-[150px] mt-[20px]' src={image} alt={name} />
        <div className='absolute top-4 right-4 space-y-2'>
          <img className='w-[30px] h-[30px]' src={Rasm_17} alt="Icon" />
          <img className='w-[34px] h-[34px]' src={Rasm_18} alt="Icon" />
        </div>
      </div>
      <p className='mt-5 text-[16px] font-medium'>{name}</p>
      <ul className='flex gap-2 items-center mt-2'>
        <p>${price}</p>
        <img src={Rasm_19} alt="Star Icon" />
        <p className='text-[14px] font-semibold'>({rating})</p>
      </ul>
    </div>
  );
};

// Mahsulotlar ro'yxati
const products = [
  { image: Rasm_16, name: "Itlar uchun quruq ozuqa", price: 100, rating: 35 },
  { image: Rasm_20, name: "CANON DSLR Kamera", price: 360, rating: 95 },
  { image: Rasm_21, name: "ASUS FHD O'yin Noutbuki", price: 700, rating: 325 },
  { image: Rasm_22, name: "Bolalar elektr mashinasi", price: 960, rating: 65 },
  { image: Rasm_23, name: "Zoom futbol oyoq kiyimi", price: 1160, rating: 35 },
  { image: Rasm_24, name: "GP11 Gamepad", price: 660, rating: 55 },
  { image: Rasm_25, name: "Satin jaketi", price: 960, rating: 35 },
];

// Asosiy komponentni eksport qilish
export default App;
