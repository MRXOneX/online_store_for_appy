import { useStore } from "@nanostores/react";
import { billingDetails } from "../store/cartStore";

export default function BillingDetails() {
  const $billingDetails = useStore(billingDetails);

  const onCHange = (value: any, type: any) => {
    billingDetails.set({
      ...$billingDetails,
      [type]: value,
    });
  };

  return (
    <div className="shadow-sm flex flex-col rounded-lg p-[20px] bg-white w-[67%]">
      <span className="text-slate-800 font-medium text-xl">
        Billing Details
      </span>

      <div className="flex mt-[10px]">
        <div className="form-control mr-[10px] w-full max-w-xs">
          <label className="label">
            <span className="label-text">City*</span>
          </label>
          <input
            value={$billingDetails?.city}
            onChange={(e) => onCHange(e.target.value, "city")}
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
            value={$billingDetails?.post_code}
            onChange={(e) => onCHange(e.target.value, "post_code")}
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
            value={$billingDetails?.country}
            onChange={(e) => onCHange(e.target.value, "country")}
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
            value={$billingDetails?.region}
            onChange={(e) => onCHange(e.target.value, "region")}
            type="text"
            placeholder="Region"
            className="input input-bordered  w-full input-sm max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
