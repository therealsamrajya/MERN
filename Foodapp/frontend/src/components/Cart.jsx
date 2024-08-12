// src/components/Cart.jsx
import React, { useEffect } from "react";
import useCartStore from "./cartStore"; // Adjust the import path as needed

const Cart = () => {
  const { cartItems, error, fetchCart } = useCartStore((state) => ({
    cartItems: state.cartItems,
    error: state.error,
    fetchCart: state.fetchCart,
  }));

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <div className="bg-heading">
      <div className="flex flex-col ">
        <h1 className="text-5xl font-primary text-button text-center">
          Items in Cart
        </h1>
        {error && <p>{error}</p>}
        <ul className="grid grid-cols-4 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[2rem] items-center ml-[2rem] mb-[2rem] max-sm:ml-[10rem]">
          {cartItems.map((item) => (
            <li key={item._id._id}>
              {" "}
              {/* Ensure unique key */}
              <h2 className="font-primary text-4xl text-dark">
                {item._id.name}
              </h2>{" "}
              {/* Display name */}
              <p className="font-secondary text-3xl text-dark">
                {item._id.description}
              </p>{" "}
              {/* Display description */}
              <p className="font-secondary text-2xl text-gray">
                Price: ${item._id.price}
              </p>{" "}
              {/* Display price */}
              <p className="font-secondary text-2xl text-gray">
                Quantity: {item.quantity}
              </p>{" "}
              {/* Display quantity */}
              <img src={item._id.image} alt={item._id.name} width="300" />{" "}
              {/* Display image */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
