import React from "react";
import { useLocation } from "react-router-dom";

export default function Dominos(props) {
  const location = useLocation();
 let hotel = location.state.ele.menu;
  let hotelMap = hotel.map((order)=>{
    console.log("order",order.name)
    return(
      <>
     
     <h1>{order.name}</h1>
      </>
    );
  })

  return (
    <>
      {/* <h1>{location.state.ele.menu.name}</h1> */}
      <h1>{location.state.ele.name}</h1>
      <h1>{location.state.ele.Rid}</h1>
      {/* <div>Dominos</div> */}
      <div>{hotelMap}</div>
    </>
  );
}
