"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import { rupeesFormat } from "@/utils/formatRupees";
import Image, { StaticImageData } from "next/image";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string | StaticImageData | undefined;
  // quantity: number;
};

const StoreItem: React.FC<StoreItemProps> = ({ id, name, price, img }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="flex flex-col relative h-96">
      {typeof img === "string" ? (
        <img
          src={img}
          alt="product-image"
          width={400}
          height={280}
          className="bg-imageBg object-contain"
        />
      ) : (
        img && (
          <Image
            src={img}
            alt="product-image"
            width={400}
            height={280}
            className="bg-imageBg object-contain"
          />
        )
      )}
      <div className="flex flex-col px-5">
        <div className="flex justify-between">
          <span>{name}</span>
          <span>{rupeesFormat(price)}</span>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => increaseCartQuantity(id)}
            className="bg-btnBlue hover:bg-blue-950 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default StoreItem;
