export default function Summary() {
  return (
    <div className="w-[25%]">
      <div className="shadow-sm rounded-lg p-[15px] bg-white w-full">
        <div className="flex justify-between">
          <span className="text-md text-slate-700 font-bold">Total Amount</span>
          <span className="text-sm text-gray-600 font-bold">$80.00</span>
        </div>
        <a href="/checkout" className="btn w-full btn-primary btn-xs mt-[15px]">
          check out
        </a>
      </div>
    </div>
  );
}
