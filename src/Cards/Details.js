import React from "react";
import { useLocation } from "react-router-dom";
import Price from "../Services/RestaurantMenuPriceData";

function Details() {
  const location = useLocation();
  function getPrice(mid) {
    for (let i = 0; i < Price.length; i++) {
      for (let j = 0; j < Price[i].menu.length; j++) {
        if (Price[i].menu[j].mid === mid) {
          return <div> {Price[i].menu[j].price}</div>;
        }
      }
    }
  }
  return (
    <div>
      {location.state.menu.map((item, index) => {
        return (
          <div>
            {item.name}
            {getPrice(item.mid)}
          </div>
        );
      })}
    </div>
  );
}

export default Details;
