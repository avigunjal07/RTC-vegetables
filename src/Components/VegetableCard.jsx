import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";

function VegetableCard({
  id,
  name,
  image,
  price,
  description,
  unit,
  category,
  tags,
  addToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5 m-5 w-55 hover:shadow-xl transition-shadow duration-300">
     
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-xl"
        />
        <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs rounded-full font-semibold">
          {category}
        </span>
      </div>

    
      <h3 className="text-xl font-bold text-gray-800 mt-3">{name}</h3>
      <p className="text-gray-500 mt-1 text-sm">{description}</p>
      <p className="my-2 text-gray-700">
        <span className="text-lg font-semibold text-gray-900">₹{price}</span> per {unit}
      </p>
      <p className="text-gray-400 text-sm">{tags?.join(", ")}</p>

     
      <div className="flex justify-center items-center my-4 gap-4">
        <CircleMinus
          className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors"
          size={24}
          onClick={() => {
            if (quantity > 1) setQuantity(quantity - 1);
            else toast.error("Quantity cannot be less than 1");
          }}
        />
        <span className="text-2xl font-semibold">{quantity}</span>
        <CirclePlus
          className="cursor-pointer text-gray-600 hover:text-green-500 transition-colors"
          size={24}
          onClick={() => {
            if (quantity < 10) setQuantity(quantity + 1);
            else toast.error("Quantity cannot be more than 10");
          }}
        />
      </div>

     
      <div className="flex justify-center">
        <Button
          title={"Add To Cart"}
          onClick={() =>
            addToCart({
              id,
              name,
              image,
              price,
              description,
              unit,
              category,
              tags,
              quantity,
              totalAmount: price * quantity,
            })
          }
        />
      </div>

      <Toaster />
    </div>
  );
}

export default VegetableCard;