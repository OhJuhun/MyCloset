import React, {memo} from 'react';
import {Grid,  Link} from "@material-ui/core"
import logo from "logo.svg";
import TabContent from "./TabContent";

const AppHeader = () => {
  //TODO 로고를 무엇인가로 박기+Home으로 Link/ BreadCrumb 추가하기 / 위에 Margin
  return (
      <Grid container justify="center" alignItems="center">
        <Link href={"/"}>
          <img src={logo} height={30}/>
        </Link>
        <TabContent/>
      </Grid>
  );
};

export default memo(AppHeader);