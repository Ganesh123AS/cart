"use client";
import { useShoppingCart } from "@/context/ShoppingCartContxt";
import { rupeesFormat } from "@/utils/formatRupees";
import Image from 'next/image';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
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
    <div className="flex flex-col relative h-96" >
      <img
        src={img}
        alt="product-image"
        width={"400px"}
        height={"180px"}
        className="object-contain"
      />
      <div className="flex justify-center absolute bottom-0">
      <span>{name}</span>
        <span>{rupeesFormat(price)}</span>
        <button onClick={() => increaseCartQuantity(id)} className="border border-yellow-600 border-6 rounded-full bg-blue-500 text-white px-4 py-2">
          Add To Cart
        </button>
        {/* <div className="mt-auto">
          {quantity === 0 ? (
            <button  className="border border-yellow-600 border-6 rounded-full bg-blue-500 text-white px-4 py-2" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default StoreItem;
