import rollsMania from "../Assets/rollsManiaRestaurant.jpg";
import dominoRestaurant from "../Assets/dominos-restraunt.jpg";
import subwayRestaurant from "../Assets/subwayRestaurant.jpg";
import brRestaurant from "../Assets/brRestaurant.jpg";
import guruSweets from "../Assets/guruSweets.jpg";
import kataniRestaurant from "../Assets/kataniRestraunt.avif";

let Menu = [
  {
    name: "Domino's Pizza",
    photo: dominoRestaurant,
    Rid: "01",
    rating: "4.8",
    timing: "8.00am - 11.00pm",
    tagline: "Get the door. It's Domino's",
    menu: [
      {
        name: "Pizza",
        mid: "M1",
      },
      {
        name: "Burger",
        mid: "M2",
      },
      {
        name: "Tacos",
        mid: "M3",
      },
      {
        name: "Pasta",
        mid: "M4",
      },
    ],
  },
  {
    name: "Subway",
    photo: subwayRestaurant,
    Rid: "02",
    rating: "4.0",
    timing: "9.00am - 11.30pm",
    tagline: "Eat Fresh",
    menu: [
      {
        name: "Burger1",
        mid: "M5",
      },
      {
        name: "Burger2",
        mid: "M6",
      },
      {
        name: "Burger3",
        mid: "M7",
      },
      {
        name: "Burger4",
        mid: "M8",
      },
    ],
  },
  {
    name: "Baskins-Robins",
    photo: brRestaurant,
    Rid: "03",
    rating: "3.8",
    timing: "10.00am - 11.30pm",
    tagline: "31 flavours",
    menu: [
      {
        name: "Chocolate",
        mid: "M9",
      },
      {
        name: "Litchi Gold",
        mid: "M10",
      },
      {
        name: "Alphonso Gold",
        mid: "M11",
      },
      {
        name: "Chocolate Chip Mousse Royale",
        mid: "M12",
      },
    ],
  },
  {
    name: "Rolls Mania",
    photo: rollsMania,
    Rid: "04",
    rating: "3.4",
    timing: "11.00am - 10.00pm",
    tagline: "A Grab and GO",
    menu: [
      {
        name: "Aloo Cheese Roll",
        mid: "M13",
      },
      {
        name: "Veg Cheese Roll",
        mid: "M14",
      },
      {
        name: "Veg Paneer Roll",
        mid: "M15",
      },
      {
        name: "Paneer Mayonnaise Roll",
        mid: "M16",
      },
    ],
  },
  {
    name: "Guru Nank Sweets",
    photo: guruSweets,
    Rid: "05",
    rating: "4.1",
    timing: "7.00am - 11.30pm",
    tagline: "There's Lot's Of Fun in Sweet",
    menu: [
      {
        name: "Sweet1",
        mid: "M17",
      },
      {
        name: "Sweet2",
        mid: "M18",
      },
      {
        name: "Sweet3",
        mid: "M19",
      },
      {
        name: "Sweet4",
        mid: "M20",
      },
    ],
  },
  {
    name: "Katani Sweets",
    photo: kataniRestaurant,
    Rid: "06",
    rating: "4.5",
    timing: "7.15am - 12.00pm",
    tagline: "Life is dull without good food",
    menu: [
      {
        name: "Veg Thali",
        mid: "M21",
      },
      {
        name: "Noodles",
        mid: "M22",
      },
      {
        name: "Pav Bhaji",
        mid: "M23",
      },
      {
        name: "Jalebi",
        mid: "M24",
      },
    ],
  },
];

export default Menu;
