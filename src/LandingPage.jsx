import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product C", price: "$40", image: "https://via.placeholder.com/150" },
];

export default function LandingPage() {
  return (
    <div>
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyShop</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      <section className="bg-gray-100 text-center p-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyShop</h2>
        <p className="text-gray-600">Find the best products at unbeatable prices.</p>
      </section>

      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition"
          >
            <img src={product.image} alt={product.name} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-blue-500 font-semibold">{product.price}</p>
          </Link>
        ))}
      </section>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 MyShop. Follow us:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
