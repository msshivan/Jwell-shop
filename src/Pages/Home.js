import React from "react";
import Home_head from "../Component/Home/Home_head";
import { motion } from "framer-motion";
import Products from "../Component/Shop/Products";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Home_head />
      <Products />
    </motion.div>
  );
};

export default Home;
