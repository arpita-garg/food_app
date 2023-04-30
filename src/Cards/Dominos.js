import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { StyledDominos } from "../Style/DominosStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import Price from "../Services/RestaurantMenuPriceData";

export default function Dominos(props) {
  // const {item} = props.match;
  console.log("Props.match", props.match);
  const [priceMenu, setPriceMenu] = useState([]);
  useEffect(() => {
    setPriceMenu(Price);
  }, []);
  const navigate = useNavigate();

  const location = useLocation();
  console.log("Location", location);
  let menu = location.state.ele.menu;

  let hotelMap = menu.map((order) => {
    // console.log("ord00er", order.mid);
    priceMenu.map((cost) => {
      // console.log("costmenu",cost.menu);

      let costMenu = cost.menu;
      // console.log("costMenu",costMenu);
      costMenu.map((keemat) => {
        // console.log("keemat",keemat.mid);
        // console.log("costid",cost.mid)
        // console.log("order", order.mid);
        // if (order.mid === keemat.mid) {
        //   navigate("/pricing", { state: { keemat: keemat } });
        // }
      });
    });

    return (
      <>
        <p>{order.name}</p>
      </>
    );
  });

  function handleOrderNowClick() {
    navigate("/dominos/details", { state: { menu: menu } });
  }

  return (
    <>
      <div className="container">
        <StyledDominos>
          <div className="header-top">
            <div className="header-content">
              <div className="food-name">
                <h3 className="food-app">
                  <NavLink className="food-app-link">Food App</NavLink>
                </h3>
              </div>
              <div className="searchBar">
                <div className="location">
                  <div className="location-icon">
                    <FontAwesomeIcon icon={faLocationDot} size="xl" />
                  </div>
                  <div className="input-city">
                    <input placeholder="Chandigarh"></input>
                  </div>
                </div>
                <div className="separator">|</div>
                <div className="search">
                  <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                  <div className="search-input">
                    <input
                      type="text"
                      placeholder="Search for cusine, dish and restaurant."
                    />
                  </div>
                </div>
              </div>
              <div className="login-signup">
                <div className="login">
                  <NavLink className="login">Login</NavLink>
                </div>
                <div className="signup">
                  <NavLink className="signup">Signup</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="hrLine">
            <hr />
          </div>
          <div className="banner">
            <div className="delivery-btn">
              <button className="banner-btn">
                <FontAwesomeIcon icon={faTruck} size="xl" />
                <h2 className="btn-para">Delivery</h2>
              </button>
            </div>

            <div className="banner-para">
              <p className="banner-para">Delivery restaurants in Chandigarh.</p>
            </div>
            <div className="banner-head">
              <h1 className="banner-head">{location.state.ele.name}</h1>
            </div>
            <div className="restaurant-info-card">
              <div className="container1">
                <div className="restaurant-card">
                  <div className="restaurant-img">
                    <img
                      src={location.state.ele.photo}
                      alt="hotel"
                      id="hotel"
                    />
                  </div>
                  <div className="card-description">
                    <div className="rating-card">
                      <span className="rating">
                        {location.state.ele.rating}
                      </span>
                    </div>
                    <div className="timings">
                      <span className="time">
                        Opens at - {location.state.ele.timing}{" "}
                      </span>
                    </div>
                    <div className="restaurant-name">
                      <h2>{location.state.ele.name}</h2>
                    </div>
                    <div className="tagline">
                      <p>{location.state.ele.tagline}</p>
                    </div>
                    <div className="restaurant-variety">{hotelMap}</div>
                    <div className="order-btn">
                      <button
                        className="orderNow"
                        onClick={() => {
                          // <div>
                          //   {location.state.ele.menu.map((element) => {
                          //     return <div>{element} abc</div>;
                          //   })}
                          // </div>;
                          handleOrderNowClick();
                        }}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledDominos>
      </div>
      {/* <h1>{location.state.ele.menu.name}</h1> */}

      {/* <h1>{location.state.ele.Rid}</h1>

      <div>{hotelMap}</div> */}
    </>
  );
}
