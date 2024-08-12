import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Button from "./Button";

const FoodItemCard = ({ _id, name, description, price, image, special }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [message, setMessage] = useState(""); // State to hold success or error messages

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:4000/api/users/cart/add",
        { foodItemId: _id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Item added to cart successfully!"); // Set success message
    } catch (err) {
      console.error("Error adding item to cart", err);
      setMessage("Failed to add item to cart."); // Set error message
    }
  };

  return (
    <div
      ref={ref}
      className={`flex hover:scale-90 flex-row gap-[2rem] transition-opacity duration-700 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}>
      <img
        src={image}
        alt={name}
        className={`w-52 h-52 object-cover mb-4 ${
          special ? "rounded-full" : "rounded-lg"
        }`}
      />
      <div className="flex flex-col ">
        <h2 className="font-bold font-primary text-4xl text-dark">{name}</h2>
        <p className="text-gray-600 font-secondary whitespace-nowrap mt-4">
          {description}
        </p>
        <p className="text-lg font-semibold font-secondary mt-4">Rs {price}</p>
        {!special && (
          <Button
            onClick={handleAddToCart}
            value="Add to Cart"
            className="mt-8 text-heading font-button bg-button h-12 font-semibold uppercase w-fit py-2 hover:bg-red-500 whitespace-nowrap"
          />
        )}
        {message && (
          <p
            className={`mt-4 ${
              message.includes("Failed") ? "text-red-500" : "text-green-500"
            }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
