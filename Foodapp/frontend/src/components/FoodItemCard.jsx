// src/components/FoodItemCard.jsx
import React from "react";

const FoodItemCard = ({ name, description, price, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default FoodItemCard;
