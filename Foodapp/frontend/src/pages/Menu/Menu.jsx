// src/pages/FoodMenu.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FoodItemCard } from "../../components";
const Menu = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/food");
        setFoodItems(response.data.data); // Assuming the data is in response.data.data
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
  );
};

export default Menu;
