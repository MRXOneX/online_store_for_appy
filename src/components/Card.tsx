import { useStore } from "@nanostores/react";
//
import { cartItems } from "../store/cartStore";

export default function Card({ item }: any) {
  const $cartItems = useStore(cartItems)

  const addItem = () => {
    cartItems.set([...$cartItems, item])
  };


  return (
    <div className="rounded-[15px] mt-[20px] p-[20px] w-[300px] bg-base-100 shadow-sm">
      <div>
        <img src={item.image} className="rounded-sm" alt="" />
      </div>
      <div className="pt-[20px] flex flex-col">
        <span className="text-[20px]">{item.title}</span>
        {/* <div className="rating rating-hidden rating-sm">
        <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div> */}
        <div className="flex items-end mt-[10px] justify-between">
          <span className="text-slate-700 font-bold">{item.price}</span>
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
