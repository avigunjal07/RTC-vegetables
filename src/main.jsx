import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MyCart from "./views/cart.jsx";
import Vegetables from "./views/Vegetables.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/my-cart" element={<MyCart />} />
    </Routes>
  </BrowserRouter>
);