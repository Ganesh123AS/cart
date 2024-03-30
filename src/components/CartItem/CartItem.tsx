import { useShoppingCart } from '@/context/ShoppingCartContext';
import { productList } from "@/data/data";
import { rupeesFormat } from '@/utils/formatRupees';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();

  const item = productList.find((item) => item?.id === id);
  if(item === null) return null;
  
  return (
    <div className="d-flex align-items-center">
      <img
        src={item?.img}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {rupeesFormat(item?.price)}
        </div>
      </div>
      {/* <div> {rupeesFormat(item?.price * quantity)}</div>
      <button
        onClick={() => removeFromCart(item?.id)}
      >
        &times;
      </button> */}
    </div>
  );
};
export default CartItem;
