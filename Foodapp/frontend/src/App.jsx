import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { Home } from "./pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/food:id" component={FoodItemDetail} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
