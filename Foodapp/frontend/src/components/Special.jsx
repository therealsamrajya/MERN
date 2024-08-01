import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SpecialItemCard from "../components/SpecialItemCard";

const specialItemIds = [
  "66a799f9cc5c5530078101af",
  "66ab1bb180487d71a9b18878",
  "66ab1c3980487d71a9b1887f",
];

const Special = () => {
  const [specialItems, setSpecialItems] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const slideInStyles = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  };

  return (
    <div className="flex flex-col justify-center items-center text-dark font-primary text-3xl mt-[2rem]">
      <h1 className="text-5xl text-button">Special items for today</h1>
      <div
        ref={ref}
        style={slideInStyles}
        className="flex flex-row justify-between mt-[4rem] gap-[12rem] items-center max-sm:grid-cols-1 max-sm:grid mb-[2rem]">
        {specialItems.map((item) => (
          <SpecialItemCard
            key={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Special;
