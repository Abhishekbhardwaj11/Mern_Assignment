import React from "react";
import { useParams } from "react-router-dom";

const productDetails = {
  1: { name: "Product A", description: "Detailed info about Product A", price: "$20" },
  2: { name: "Product B", description: "Detailed info about Product B", price: "$30" },
  3: { name: "Product C", description: "Detailed info about Product C", price: "$40" },
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = productDetails[id];

  return (
    <div className="p-6">
      {product ? (
        <>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-blue-500 text-xl mt-4">{product.price}</p>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
