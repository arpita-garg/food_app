import React, { useEffect, useState } from "react";
import { StyledLayout } from "../Style/LayoutStyle";
import LayoutHomeCard from "../Cards/LayoutHomeCard";
import Restaurants from "../Services/RestaurantsData";

export default function LayoutHome() {
  const[restaurantData, setRestaurantData] = useState([]);

  useEffect(()=>{
    setRestaurantData(Restaurants)
  },[])
  return (
    <>
      <div className="wrapper">
        <StyledLayout>
          <div className="main-content">
            <div className="container">
              <div className="layout-content">
                <LayoutHomeCard restaurantData = {restaurantData}/>
              </div>
            </div>
          </div>
        </StyledLayout>
      </div>
    </>
  );
}
