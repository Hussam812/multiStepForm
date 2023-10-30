import img1 from "./assets/images/icon-arcade.svg";
import img2 from "./assets/images/icon-advanced.svg";
import img3 from "./assets/images/icon-pro.svg";

export const plans = [
  {
    id: 1,
    name: "arcade",
    image: img1,
    price: ["$9/mo", "$90/yr"],
  },
  {
    id: 2,
    name: "advanced",
    image: img2,

    price: ["$12/mo", "$120/yr"],
  },
  {
    id: 3,
    name: "pro",
    image: img3,
    price: ["$15/mo", "$150/yr"],
  },
];

export const addons = [
  {
    id: 1,
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price: ["+$1/mo", "+$10/yr"],
  },
  {
    id: 2,
    title: "Large storage",
    subtitle: "Extra 1TB of cloud",
    price: ["+$2/mo", "+$20/yr"],
  },
  {
    id: 3,
    title: "Customizable Profile",
    subtitle: "Custom theme on your profile",
    price: ["+$2/mo", "+$20/yr"],
  },
];
