import React from "react";

const SpecialItemCard = ({ name, description, image }) => {
  return (
    <div className="hover:scale-110 hover:shadow-5 duration-300">
      <img
        src={image}
        alt={name}
        className="w-[16rem] h-[16rem] rounded-[50%] object-cover mb-[1rem]"
      />
      <div className="text-center">
        <h2 className="font-bold font-secondary text-button text-3xl">
          {name}
        </h2>
        {description && <p style={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

const styles = {
  image: {
    width: "12rem",
    height: "12rem",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },

  heading: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  description: {
    color: "gray",
    fontSize: "1rem",
  },
};

export default SpecialItemCard;
