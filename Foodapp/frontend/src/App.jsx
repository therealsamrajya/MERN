import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
