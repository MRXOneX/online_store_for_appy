import axios from "axios";
//
import { useEffect, useState } from "react";
import Card from "../Card";


export default function Shop() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      await axios.get('https://fakestoreapi.com/products').then(r => {
        setItems(r.data)
      })
    })();
  }, []);

  console.log(items)

  return (
    <div className="flex justify-between flex-wrap">
      {items && items?.map((product: any) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
