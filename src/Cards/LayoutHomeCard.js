import React, { useState, useEffect } from "react";
import { StyledLayoutCard } from "../Style/LayoutStyle";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "../Services/RestrauntMenuData"

export default function LayoutHomeCard(props) {
  const[menuData, setMenuData] = useState([]);
  useEffect(()=>{
    setMenuData(Menu)
  },[])
 
  
  // console.log("menudata",menuData[0].Rid);

  const restaurantData = props.restaurantData;
  // console.log("restrauntData", JSON.stringify(restaurantData));
  const navigate = useNavigate();
 

  const restaurantMap = restaurantData.map((item) => {
    const gotoRestaurant = () => {
      // console.log("fdgd",menuData);
      menuData.map((ele)=>{
        // console.log("jdh",ele)
        // console.log("fjhsd",ele.Rid);
        // console.log("dhfuk",item.Rid)
        if(item.Rid === ele.Rid){
          navigate("/dominos", {state: {ele:ele.Rid}})
        }
      })
         
       };
    // console.log("dfn",item
    
    // .Rid)
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="card-img">
              <img src={item.photo} alt="dominos" id="dominos" />
            </div>
          </div>
          <div className="card-content">
            <div className="restaurant-name">
              <div className="name">
                <p
                  onClick={gotoRestaurant}
                >
                  <NavLink>{item.name} </NavLink>
                </p>
              </div>
              {/* <div className="order-now">
                <h4>
                  <NavLink>{item.order}</NavLink>
                </h4>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      {/* <StyledLayoutCard>
        <div className="card">
          <div className="card-body">
            <div className="card-img">
              <img src={Restaurants[0].photo} alt="dominos" id="dominos" />
            </div>
          </div>
          <div className="card-content">
            <div className="restaurant-name">
              <div className="name">
                <h4>{Restaurants[0].name}</h4>
              </div>
              <div className="order-now">
                <h4>
                  <NavLink>{Restaurants[0].order}</NavLink>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </StyledLayoutCard> */}
      <StyledLayoutCard>
        <div className="cards">{restaurantMap}</div>
      </StyledLayoutCard>
    </>
  );
}
