import { useEffect, useState } from 'react'

import { cartItems } from '../store/cartStore';
import { useStore } from '@nanostores/react';
//
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";

export default function Navbar() {
  const $cartItems = useStore(cartItems)

  // const [countCart, setCountCart] = useState($cartItems)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items')) ?? []
    cartItems.set(items)
  }, [])



  return (
    <div className="navbar mt-[30px] flex justify-between rounded-[20px] shadow-sm bg-base-100">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        Shop online
      </a>
      <div>
        <a href="/profile" className="btn btn-ghost normal-case">
          <HiOutlineUser size={30} />
        </a>
        <div className="indicator">
          {$cartItems && $cartItems.length > 0 && (
            <span className="indicator-item badge">{$cartItems.length}</span>
          )}
          <a href="/cart" className="btn btn-ghost normal-case">
            <MdOutlineShoppingCart size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
