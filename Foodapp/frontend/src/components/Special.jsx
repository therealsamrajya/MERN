import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodItemCard from "../components/FoodItemCard";

const specialItemIds = ["66a799f9cc5c5530078101af", "66aa337d4cc840be8bfbe4a3"];

const Special = () => {
  const [specialItems, setSpecialItems] = useState([]);

  useEffect(() => {
    const fetchSpecialItems = async () => {
      try {
        const responses = await Promise.all(
          specialItemIds.map((id) =>
            axios.get(`http://localhost:4000/api/food/${id}`)
          )
        );
        setSpecialItems(responses.map((response) => response.data.data));
      } catch (error) {
        console.error("Error fetching special items:", error);
      }
    };

    fetchSpecialItems();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <h2>HEEFDFK</h2>
      {specialItems.map((item) => (
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

export default Special;
