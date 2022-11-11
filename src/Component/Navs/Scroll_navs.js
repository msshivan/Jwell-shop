import React from "react";
import "../../Assests/Css/Home.css";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Scroll_navs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="Home_nav_Scroll"
    >
      <div className="Home_nav_top">
        <div className="Home_nav_top_menu">
          <MenuIcon className="Home_nav_top_icon_scroll" />
          <PermIdentityIcon className="Home_nav_top_icon_scroll" />
          <p className="Home_nav_top_offer_scroll">
            Sale upto 70% off on selected items
          </p>
        </div>
        <div className="Home_nav_top-logo">
          <h1 className="LOGO_scroll">Jewel</h1>
        </div>
        <div className="Home_nav_top_menu_right_scroll">
          <input placeholder="What are you looking for" />
          <SearchIcon className="Home_nav_top_right_icon_scroll" />
          <Badge
            className="Home_nav_top_right_badge"
            badgeContent={4}
            color="primary"
          >
            <FavoriteBorderIcon
              className="Home_nav_top_badge_icon_scroll"
              color="action"
            />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <AddShoppingCartIcon
              className="Home_nav_top_badge_icon_scroll"
              color="action"
            />
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};

export default Scroll_navs;
