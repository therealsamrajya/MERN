import React from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

const FoodItemCard = ({ name, description, price, image, special }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

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
            to="/addtocart"
            value="Add to Cart"
            className="mt-8 text-heading font-button bg-button h-12 font-semibold uppercase w-fit py-2 hover:bg-red-500 whitespace-nowrap"
          />
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
