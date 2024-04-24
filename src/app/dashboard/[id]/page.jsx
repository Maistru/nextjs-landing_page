"use client";
import axios from "axios";
// async function getData(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

import { useEffect, useState } from "react";

function ProductDetails({ params }) {
  const [productId, setProductId] = useState({});
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((response) => setProductId(response.data))
      .then((err) => console.log(err));
  }, []);
  return (
    <div className="flex items-center justify-center gap-2">
      <h1 className="bg-slate-400 rounded-md px-1">{productId.id}</h1>
      <h1>{productId.title}</h1>
    </div>
  );
}
export default ProductDetails;
