import React from 'react';
import './App.css';
import {AppHeader} from "components";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import menus from "config/tabMenu";
import AppFooter from "./components/AppFooter";
import SideBarMenu from "./components/SideBarMenu";

//TODO Footer에 넣을 내용
const App: React.FC = () => {
  return (
      <BrowserRouter>
        <AppHeader/>

        <Switch>
          {menus.map((item)=>{
            return <Route exact path={item.to} component={item.component}/>
          })}
        </Switch>
        <AppFooter/>
      </BrowserRouter>
  );
}

export default App;
