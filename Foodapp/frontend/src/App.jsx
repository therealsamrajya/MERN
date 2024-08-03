import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, Location, Navbar } from "./components";
import { Home, Menu } from "./pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          {/* <Route path="/food:id" component={FoodItemDetail} /> */}
        </Routes>
        <Location />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
