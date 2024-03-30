"use client";
import cart from "@/assets/cart.svg";
import { useShoppingCart } from '@/context/ShoppingCartContext';
import Image from "next/image";

const Navbar: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  
  return (
    <div className="flex justify-between p-5 bg-lightGreen sticky">
      <h3 className='text-white'>E-store</h3>
      <div className="flex relative border-2 p-2 rounded-full" onClick={openCart}>
        <Image src={cart} alt="cart-image" width={22} height={22} />
        {cartQuantity > 0 && (
          <button>
            <h3 className="absolute bottom-[-2] right-0 text-white">
              {cartQuantity}
            </h3>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
