import React from "react";
import CategorySection from "../../components/CategorySection";

const Menu = () => {
  const categories = ["Fast Food", "Main Course", "Dessert"];

  return (
    <div className=" flex flex-col ml-[2rem] gap-[3rem] ">
      {categories.map((category) => (
        <CategorySection key={category} category={category} />
      ))}
    </div>
  );
};

export default Menu;
