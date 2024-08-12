import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider, Footer, Location, Navbar } from "./components";
import { About, Home, LoginSignup, Menu, CartPage } from "./pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/About" element={<About />} />
            <Route path="/LoginSignup" element={<LoginSignup />} />
            <Route path="/CartPage" element={<CartPage />} />

            {/* <Route path="/food:id" component={FoodItemDetail} /> */}
          </Routes>
          <Location />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
