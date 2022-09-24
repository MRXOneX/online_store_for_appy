import { useEffect } from 'react'
//
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";

export default function Navbar() {
  let cartCount = JSON.parse(localStorage.getItem("items"));

  useEffect(() => {
    cartCount = JSON.parse(localStorage.getItem("items"))
  }, [localStorage.getItem("items")])

  return (
    <div className="navbar mt-[30px] flex justify-between rounded-[20px] shadow-sm bg-base-100">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        Online shop
      </a>
      <div>
        <a href="/profile" className="btn btn-ghost normal-case">
          <HiOutlineUser size={30} />
        </a>
        <div className="indicator">
          {cartCount && cartCount.length && (
            <span className="indicator-item badge">{cartCount.length}</span>
          )}
          <a href="/cart" className="btn btn-ghost normal-case">
            <MdOutlineShoppingCart size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
