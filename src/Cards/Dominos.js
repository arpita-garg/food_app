import React from "react";
import { useLocation } from "react-router-dom";

export default function Dominos(props) {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <h1>{location.state.ele}</h1>
      <div>Dominos</div>
    </>
  );
}
