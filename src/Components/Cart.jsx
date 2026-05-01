import Button from "./Button";

const removeFromCart = (id) => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCartItems = cartItems.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCartItems));

  // 🔥 force redirect + refresh
  window.location.href = "https://rtc-vegetable.netlify.app/my-cart";
};

function CartVegetableCard({
  id,
  name,
  image,
  price,
  description,
  unit,
  quantity,
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row items-center gap-4 m-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex shrink-0">
        <img
          src={image}
          alt={name}
          className="w-32 h-28 md:w-40 md:h-32 object-cover rounded-lg bg-gray-100"
        />
      </div>

      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <p className="text-2xl font-semibold text-gray-800">
            {name}{" "}
            <span className="text-sm text-gray-500">
              (₹{price}/{unit})
            </span>
          </p>

          <p className="text-gray-600 text-lg mt-2 md:mt-0">
            Qty: {quantity} × ₹{price}
          </p>
        </div>

        <p className="text-gray-500 mt-2">{description}</p>

        <p className="text-green-700 font-bold text-lg mt-2">
          Total: ₹{quantity * price} /-
        </p>

        <div className="flex justify-end mt-4">
          <Button
            title={"Remove From Cart"}
            size="small"
            variant="danger"
            onClick={() => removeFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default CartVegetableCard;