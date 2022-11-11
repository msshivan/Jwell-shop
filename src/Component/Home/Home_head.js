import React from "react";
import "../../Assests/Css/Home.css";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useInView } from "react-intersection-observer";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
// autoplay
import { Autoplay, Pagination, Navigation } from "swiper";
import Scroll_navs from "../Navs/Scroll_navs";

const Home_head = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  console.log(inView);
  return (
    <>
      <center>
        <p className="Free_Shipping">FREE SHIPPING ON ALL ORDERS OVER $100</p>
      </center>
      {inView && (
        <div className="Home_nav">
          <div className="Home_nav_top">
            <div className="Home_nav_top_menu">
              <MenuIcon className="Home_nav_top_icon" />
              <PermIdentityIcon className="Home_nav_top_icon" />
              <p className="Home_nav_top_offer">
                Sale upto 70% off on selected items
              </p>
            </div>
            <div className="Home_nav_top-logo">
              <h1 className="LOGO">Jewel</h1>
            </div>
            <div className="Home_nav_top_menu_right">
              <input placeholder="What are you looking for" />
              <SearchIcon className="Home_nav_top_right_icon" />
              <Badge
                className="Home_nav_top_right_badge"
                badgeContent={4}
                color="primary"
              >
                <FavoriteBorderIcon
                  className="Home_nav_top_badge_icon"
                  color="action"
                />
              </Badge>
              <Badge badgeContent={4} color="primary">
                <AddShoppingCartIcon
                  className="Home_nav_top_badge_icon"
                  color="action"
                />
              </Badge>
            </div>
          </div>
          <div className="Home_nav_bottom">
            <ul className="Home_nav_botton_ul">
              <li>RINGS</li>
              <li>NECKLACES</li>
              <li>EARRINGS</li>
              <li>BRACELETS</li>
              <li>WATCHES</li>
              <li>LOOKBOOK</li>
              <li>BRAND</li>
              <li>DEMOS</li>
              <li>BUY THEME</li>
            </ul>
          </div>
        </div>
      )}
      {!inView && <Scroll_navs />}
      <p ref={ref}></p>

      <Swiper
        scrollbar={{
          hide: true,
        }}
        className="mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          {" "}
          <div className="Home_head">
            <div className="Home_head_content">
              <h1>Pendant</h1>
              <p>A must have for all jewellery lovers,</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="Home_head_2">
            <div className="Home_head_content">
              <h1>Pendant</h1>
              <p>A must have for all jewellery lovers,</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="Home_about_container">
        <div className="Home_about"></div>

        <div className="Home_About_content">
          <p className="Home_About_content-head">NEW ARRIVALS</p>
          <h1>Cosmo La Milancelos</h1>
          <p className="Home_about_content-desc">
            Detiam in sapien odio senenatis leo maecenas de milancelos cosmour
            modio.
          </p>
          <button>SHOP THE COLLECTION</button>
        </div>
      </div>
    </>
  );
};

export default Home_head;
