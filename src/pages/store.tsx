"use client";
import { productList } from "@/data/data";
import React, { useState } from "react";

const Store: React.FC = () => {

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition ease-out duration-300" style={{ transform: `translateX(-${curr * 50}%)` }}>
        {productList.map((item, index) => (
          <div key={item?.id} className="w-full rounded-lg bg-neutral-300 shadow-2xl">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Store;
