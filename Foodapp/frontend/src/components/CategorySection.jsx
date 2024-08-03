import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodItemCard from "./FoodItemCard";

const CategorySection = ({ category }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/food/category/${category}`
        );
        setFoodItems(response.data.data);
      } catch (error) {
        console.error(`Error fetching ${category} items:`, error);
      }
    };

    fetchFoodItems();
  }, [category]);

  return (
    <div className="mb-16">
      <h2 className="text-5xl text-button font-primary font-bold mb-12 mt-8">
        {category}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {foodItems.map((item) => (
          <FoodItemCard
            key={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
