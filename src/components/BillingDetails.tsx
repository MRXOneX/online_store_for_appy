export default function BillingDetails() {
  return (
    <div className="shadow-sm flex flex-col rounded-lg p-[20px] bg-white w-[67%]">
      <span className="text-slate-800 font-medium text-xl">
        Billing Details
      </span>
      <div className="flex mt-[20px]">
        <div className="form-control mr-[10px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">First Name*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="input input-bordered  w-full input-sm max-w-xs"
          />
        </div>
        <div className="form-control ml-[10px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">Last Name*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="input input-bordered  w-full input-sm max-w-xs"
          />
        </div>
      </div>
      <div className="form-control mt-[10px] w-full">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input
          type="text"
          placeholder="Address Line 1"
          className="input input-bordered w-full input-sm "
        />
      </div>
      <div className="flex mt-[10px]">
        <div className="form-control mr-[10px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">City*</span>
          </label>
          <input
            type="text"
            placeholder="City"
            className="input input-bordered  w-full input-sm max-w-xs"
          />
        </div>
        <div className="form-control ml-[10px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">Post Code</span>
          </label>
          <input
            type="text"
            placeholder="Post Code"
            className="input input-bordered  w-full input-sm max-w-xs"
          />
        </div>
      </div>
      <div className="flex mt-[10px]">
        <div className="form-control mr-[10px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">Country*</span>
          </label>
          <input
            type="text"
            placeholder="Country"
            className="input input-bordered  w-full input-sm max-w-xs"
          />
        </div>
        <div className="form-control ml-[10px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">Region</span>
          </label>
          <input
            type="text"
            placeholder="Region"
            className="input input-bordered  w-full input-sm max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
