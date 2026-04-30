import {
  Salad as SaladIcon,
  ShoppingCart as ShoppingCartIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Navbar({ refreshCart }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(existingCart);
  }, [refreshCart]);

  return (
    <div className="bg-[#A8A8A8] sticky top-2 max-w-10/12 mx-auto px-10 py-2 rounded-full flex items-center my-2 z-50">
      <Link to="/">
        <SaladIcon className="mr-2 inline-block align-middle" size={60} strokeWidth={1} />
        <h2 className="text-2xl font-bold inline-block align-middle ">Vegetables Shopee</h2>
      </Link>

      <Link to="/my-cart" className="ml-auto relative">
        {cartItems.length > 0 ? (
          <span className="absolute -top-2 -right-1 bg-red-500 rounded-full px-2 text-white text-sm">
            {cartItems.length}
          </span>
        ) : null}

        <ShoppingCartIcon size={40} strokeWidth={1} className="inline-block" />
      </Link>
    </div>
  );
}

export default Navbar;