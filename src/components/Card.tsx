import { useStore } from "@nanostores/react";
//
import { cartItems } from "../store/cartStore";

export default function Card({ product }: any) {
  const $cartItems = useStore(cartItems)

  const addItem = () => {
    cartItems.set([...$cartItems, product])
    localStorage.setItem('items', JSON.stringify([...$cartItems, product]))
  };


  return (
    <div className="rounded-[15px] mt-[20px] p-[20px] w-[300px] bg-base-100 shadow-sm">
      <div className="w-full flex items-center justify-center">
        <img src={product.image} className="rounded-sm fit-contain h-[150px]" alt="logo" />
      </div>
      <div className="pt-[20px] h-full flex flex-col">
        <span className="text-[20px]">{product.title}</span>
        {/* <div className="rating rating-hidden rating-sm">
        <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div> */}
        <div className="flex items-end mt-[10px] justify-between">
          <span className="text-slate-700 font-bold">${product.price}</span>
          <button
            onClick={addItem}
            className="btn btn-outline btn-sm  btn-secondary"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
