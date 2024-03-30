"use client";
import prev from "@/assets/prev.svg";
import next from "@/assets/next.svg";
import { useState } from "react";
import Image from 'next/image';
import { productList } from '@/data/data';
import StoreItem from '@/components/StoreItem/StoreItem';

const CartImage: React.FC = () => {
  const [curr, setCurr] = useState<number>(0);

  // const prevSlide = () => {
  //   setCurr(prev => (prev === 0 ? productList.length - 1 : prev - 1));
  // };

  // const nextSlide = () => {
  //   setCurr(next => (next === productList.length - 1 ? 0 : next + 1));
  // };
  const prevSlide = () => {
    if (curr === 0) {
      return;
    }
    setCurr(prev => prev - 1);
  };
  
  const nextSlide = () => {
    if (curr === productList.length - 1) {
      return;
    }
    setCurr(prev => prev + 1);
  };
  
  return (
    <div className="relative overflow-hidden">
      <div className="flex transition ease-out duration-30" style={{ transform: `translateX(-${curr * 50}%)` }}>
        {productList.map((item) => (
          <div key={item?.id} className="w-full rounded-lg bg-neutral-300 shadow-2xl">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
      <div className="absolute top-40 w-full flex justify-between items-center text-white px-2">
        <p onClick={prevSlide}>
          <Image src={prev} alt="prev-image" width={40} height={20} className='cursor-pointer' />
        </p>
        <p onClick={nextSlide}>
          <Image src={next} alt="next-image" width={40} height={20} className='cursor-pointer' />
        </p>
      </div>
    </div>
  );
};

export default CartImage;
