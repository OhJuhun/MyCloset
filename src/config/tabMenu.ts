import {Top, Bottom, Outerwear, Shoe} from "pages";

//TODO 현재 있는 component들을 sub menu로, main menu를 뭘로 할 지 ?
export default [
  {
    label: "겉옷",
    key: "outerwear",
    to: "/outerwear",
    component: Outerwear
  },
  {
    label: "상의",
    key: "top",
    to: "/top",
    component: Top
  },
  {
    label: "하의",
    key: "bottom",
    to: "/bottom",
    component: Bottom
  },
  {
    label: "신발",
    key: "shoe",
    to: "/shoe",
    component: Shoe
  }
]
