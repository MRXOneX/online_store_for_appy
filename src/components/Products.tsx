import { IoMdRemoveCircleOutline } from "react-icons/io";


export default function Products() {
    const items = JSON.parse(localStorage.getItem('items'))


  return (
    <div className="shadow-sm rounded-lg p-[15px] bg-white w-[70%]">
      <div className="overflow-x-auto">
        <table className="table text-sm w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {items?.length && items.map((item: any) => (
            <tr>
            <td>
              <span>{item.title}</span>
            </td>
            <td>{item.price}</td>
            <td className="flex justify-end">
              <button>
                <IoMdRemoveCircleOutline size={24} />
              </button>
            </td>
          </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
