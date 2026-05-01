import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import VegetableCard from "../components/vegetablecard";
import Navbar from "./../components/navbar";
import VEGETABLES_DATA from "./data.json";

function Vegetables() {
  const [refreshCart, setRefreshCart] = useState(false);

  function addToCart(item) {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      existingCart[itemIndex] = item;
    } else {
      existingCart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("Item added to cart!");
    }, 1000);
  }

  return (
    <div className="bg-linear-to-b from-green-100 via-green-50 to-white min-h-screen">
      <Navbar refreshCart={refreshCart} />

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12">
          Fresh Vegetables
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {VEGETABLES_DATA.map((vegItem) => (
            <VegetableCard
              key={vegItem.id}
              {...vegItem}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: "#22c55e", color: "#fff", fontWeight: "bold" },
        }}
      />
    </div>
  );
}

export default Vegetables;