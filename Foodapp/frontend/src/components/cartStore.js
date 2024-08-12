// src/store/cartStore.js
import { create } from "zustand";
import axios from "axios";

const useCartStore = create((set) => ({
  cartItems: [],
  error: null,
  fetchCart: async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      set({ error: "No token found, please log in." });
      return;
    }

    try {
      const response = await axios.get("http://localhost:4000/api/users/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ cartItems: response.data.data, error: null });
    } catch (err) {
      console.error("Error fetching cart items", err);
      set({ error: "Error fetching cart items" });
    }
  },
}));

export default useCartStore;
