import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
