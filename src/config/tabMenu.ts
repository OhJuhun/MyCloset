import {Top, Bottom, Outerwear, Shoe} from "pages";
import subTabMenu from './subTabMenu'
//TODO 현재 있는 component들을 sub menu로, main menu를 뭘로 할 지 ?
// 현상태, DreamBox, Statistics

export default [
  {
    label: "Closet",
    key: "closet",
    to: "/closet",
    component: Outerwear,
    subTabMenu: subTabMenu
  },
  {
    label: "DreamBox",
    key: "dreamBox",
    to: "/dreambox",
    component: Top,
    subTabMenu: subTabMenu
  },
  {
    label: "그만사ㅠ",
    key: "statistics",
    to: "/statistics",
    component: Bottom,
    subTabMenu: [{
      label: "NoIdea",
      key: "NoIdea"
    }]
  },
  {
    label: "Look Book",
    key: "lookBook",
    to: "/lookbook",
    component: Shoe,
    subTabMenu: [{
      label: "NoIdea2",
      key: "NoIdea2"
    }]
  }
]
