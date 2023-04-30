import React, { useEffect, useState } from "react";
import { StyledLayout } from "../Style/LayoutStyle";
import LayoutHomeCard from "../Cards/LayoutHomeCard";
import Restaurants from "../Services/RestaurantsData";
import LayoutNavbar from "../Components/LayoutNavbar";
import footerBurger from "../Assets/footerBurgerjpg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function LayoutHome() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    setRestaurantData(Restaurants);
  }, []);
  return (
    <>
      <StyledLayout>
        <div className="home">
          <div className="container">
            <LayoutNavbar />
            <div className="banner">
              <div className="wrapper">
                <div className="main-content">
                  <div className="container">
                    <div className="layout-content">
                      <LayoutHomeCard restaurantData={restaurantData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="location">
              <h1 className="location-head">
                Location{" "}
                <span className="location-span">Cities We Deliver To</span>
              </h1>
              <ul className="citiesMenu">
                <li className="ciies">Leh</li>
                <li className="ciies">Chandigarh</li>
                <li className="ciies">Delhi</li>
                <li className="ciies">Dehradun</li>
                <li className="ciies">Kota</li>
                <li className="ciies">Pune</li>
                <li className="ciies">Jaipur</li>
                <li className="ciies">Sunam</li>
                <li className="ciies">Mumbai</li>
                <li className="ciies">Kashmir</li>
                <li className="ciies">Banglore</li>
                <li className="ciies">Kolkata</li>
                <li className="ciies">Ahemdabad</li>
                <li className="ciies">Coimbatore</li>
                <li className="ciies">Goa</li>
              </ul>
            </div>
            <div className="top-restraunts">
              <h1 className="top-restraunts-head">
                Top restaurant{" "}
                <span className="top-restraunt-span">Chains</span>
              </h1>
              <ul className="top-chains">
                <li className="chain-name">Bikanervala</li>
                <li className="chain-name">Dominos</li>
                <li className="chain-name">Pizza Hut</li>
                <li className="chain-name">Katani Sweets</li>
                <li className="chain-name">Burger King</li>
                <li className="chain-name">Subway</li>
                <li className="chain-name">McDonalds</li>
                <li className="chain-name">Guru Nank Sweets</li>
                <li className="chain-name">Rolls Mania</li>
                <li className="chain-name">Yo China</li>
                <li className="chain-name">New Punjab Dhaba</li>
                <li className="chain-name">Barista</li>
                <li className="chain-name">CCD</li>
                <li className="chain-name">Baskind and Robins</li>
                <li className="chain-name">Cream Stone</li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <div className="container">
              <h1 className="food-app">Food App</h1>
              <div className="footer-burger">
                <img src={footerBurger} alt="footerBurger" id="footer-burger" />
                <ul className="footer-company">
                  COMPANY
                  <li className="footer-item1">Who we are</li>
                  <li className="footer-item1">Blog</li>
                  <li className="footer-item1">Careers</li>
                  <li className="footer-item1">Contact</li>
                </ul>
                <ul className="footer-company">
                  FOR FOODIES
                  <li className="footer-item1">Code of Conduct</li>
                  <li className="footer-item1">Community</li>
                  <li className="footer-item1">Blogger Help</li>
                  <li className="footer-item1">Mobile Apps</li>
                </ul>
              </div>
              <div className="footer-last">
                <h1 className="footer-lastLine">We happy to Feed you! ;) </h1>
                <div className="social-media-icons">
                <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledLayout>
    </>
  );
}
