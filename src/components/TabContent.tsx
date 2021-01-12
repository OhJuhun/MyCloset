import React, {memo, useCallback, useState} from 'react';
import {makeStyles, Tab, Tabs} from "@material-ui/core"
import {useHistory} from 'react-router-dom';
import tabMenu from "config/tabMenu";

const useStyles = makeStyles({
  tabStyle: {
    marginRight: 40,
    padding: '0px 0px 18px 0px'
  }
});

const TabContent = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const history = useHistory();

  const onChange = useCallback((event: object, newValue: string) => {
    setValue(newValue);
    history.push(newValue);
  }, [value]);

  return (
        <Tabs value={value} indicatorColor={'primary'} textColor={'primary'} centered onChange={onChange}>
          {tabMenu.map((item) => {
            return <Tab className={classes.tabStyle} key={item.label} label={item.label} value={item.to} />
          })};
        </Tabs>
  );
};
//TODO Memoization을 언제 쓰지 말아야 할 지 생각해보자
export default memo(TabContent);