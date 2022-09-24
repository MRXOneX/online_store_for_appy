export default function CheckoutSummary() {
  return (
    <div className="w-[29%]">
      <div className="shadow-sm flex flex-col rounded-lg p-[15px] bg-white w-full">
        <span className="text-[22px] font-medium text-slate-700">
            Payment
        </span>
        <div className="btn-group mt-[5px] w-full">
          <button className="btn w-[50%] btn-xs btn-success">Online wallet</button>
          <button className="btn btn-xs w-[50%]">Credit Card</button>
        </div>
        <button className="btn w-full btn-xs mt-[25px] btn-active btn-primary">
            Buy
        </button>
      </div>
    </div>
  );
}
