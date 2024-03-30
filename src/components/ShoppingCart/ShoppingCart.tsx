"use client";
import { useShoppingCart } from "@/context/ShoppingCartContxt";
import { rupeesFormat } from "@/utils/formatRupees";
import { productList } from "@/data/data";
import CartItem from "@/components/CartItem/CartItem";

type CartItemProps = {
  id: number;
  quantity: number;
};

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems, removeFromCart, decreaseCartQuantity } =
    useShoppingCart();
  const itemsCart = productList
    .map((product) => ({
      ...product,
      quantity: cartItems.find((item) => item.id === product.id)?.quantity || 0,
    }))
    .filter((item) => item?.quantity > 0);

  return (
    <div
      className={`fixed inset-0 overflow-y-auto ${isOpen ? "block" : "hidden"}`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={closeCart}
        />
        <div className="relative bg-white p-8 w-120 mx-auto rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Cart</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {cartItems.length > 0 ? (
            <>
              <table className="border border-gray-400 px-4 py-2">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">S.N.</th>
                    <th className="border border-gray-400 px-4 py-2">Product Name</th>
                    <th className="border border-gray-400 px-4 py-2">Image</th>
                    <th className="border border-gray-400 px-4 py-2">Price</th>
                    <th className="border border-gray-400 px-4 py-2">Quantity</th>
                    <th className="border border-gray-400 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsCart.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                      <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-400 px-4 py-2">
                        <img
                          src={item.img}
                          alt="Product"
                          className="w-16 h-16"
                        />
                      </td>
                      <td className="border border-gray-400 px-4 py-2">{item.price}</td>
                      <td className="border border-gray-400 px-4 py-2">{item.quantity}</td>
                      <td className="border border-gray-400 px-4 py-2">
                        <button
                          onClick={() => decreaseCartQuantity(item?.id)}
                          className="btn butoon"
                          style={{
                            color: "white",
                            backgroundColor: "#d9534f",
                            padding: "6px",
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="space-y-3">
                <div className="text-right font-bold text-lg">
                  Total{" "}
                  {rupeesFormat(
                    cartItems.reduce((total, cartItem) => {
                      const item = productList.find(
                        (i) => i.id === cartItem.id
                      );
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className='w-120'>
              <p>Your Cart is Empty</p>
              <button>Shop Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
