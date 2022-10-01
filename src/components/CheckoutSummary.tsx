import axios from "axios";
import { useState } from "react";
//
import { useStore } from "@nanostores/react";
//
import { billingDetails } from "../store/cartStore";

export default function CheckoutSummary() {
  const [activePayment, setActivePayment] = useState("online_wallet");

  const $billingDetails = useStore(billingDetails);
  
  const items = JSON.parse(localStorage.getItem('items'))

  const fetchBuy = async () => {
    try {
      const res = await axios.post(
        "https://appy3.herokuapp.com/design/preview",
        {
          designId: 1,
          qrcodes: {
            "i0dTBkMx5": {
              id: "i0dTBkMx5",
              isReplace: true,
              text: "youq text for qrcode",
            },
          },
          texts: {
            "V0Te495XG": {
              id: "V0Te495XG",
              isReplace: true,
              text: new Date().toDateString() // _date,
            },
            "d7e0kqbpj": {
              id: "d7e0kqbpj",
              isReplace: true,
              text: 1 ?? "_invoice number",
            },
            "tj2wZBXfM": {
              id: "tj2wZBXfM",
              isReplace: true,
              text: $billingDetails?.country ?? "_country",
            },
            "qfT_1ytgc": {
              id: "qfT_1ytgc",
              isReplace: true,
              text: $billingDetails?.city ?? "_city",
            },
            "kBAqBHpWZ": {
              id: "kBAqBHpWZ",
              isReplace: true,
              text: $billingDetails?.post_code ?? "_post code",
            },
            "8InjPKz2S": {
              id: "8InjPKz2S",
              isReplace: true,
              text: $billingDetails?.region ?? "_region",
            },
            "WQIwVQmMM": {
              id: "WQIwVQmMM",
              isReplace: true,
              text: activePayment ?? "_payment",
            },
            "XhZRCkNOM": {
              id: "XhZRCkNOM",
              isReplace: true,
              text: `$${items.reduce((prev, next) => prev + next.price,0)}` ?? "_price",
            },
          },
        }
      );
      console.log(res);
      localStorage.setItem("invoice", res.data);
    } catch (error) {}
  };

  return (
    <div className="w-[29%]">
      <div className="shadow-sm flex flex-col rounded-lg p-[15px] bg-white w-full">
        <span className="text-[22px] font-medium text-slate-700">Payment</span>
        <div className="btn-group mt-[5px] w-full">
          <button
            onClick={() => setActivePayment("online_wallet")}
            className={`btn w-[50%] btn-xs ${
              activePayment === "online_wallet" ? "btn-success" : ""
            }`}
          >
            Online wallet
          </button>
          <button
            onClick={() => setActivePayment("credit_card")}
            className={`btn w-[50%] btn-xs ${
              activePayment === "credit_card" ? "btn-success" : ""
            }`}
          >
            Credit Card
          </button>
        </div>
        <a
          href="/invoice"
          onClick={fetchBuy}
          className="btn w-full btn-xs mt-[25px] btn-active btn-primary"
        >
          Buy
        </a>
      </div>
    </div>
  );
}
