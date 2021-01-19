import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import {
  ListItemText,
  ListItem,
  IconButton,
  List,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider, Collapse, Grid
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import tabMenu from "config/tabMenu";

const drawerWidth = 240;

interface SubListProps {
  key: string;
  label: string;
}

interface ListProps {
  key: string;
  label: string;
  subTabMenu: Array<SubListProps>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    }),
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);

  const handleDrawerOpen = () => {
    setSideBarOpen(true);
  };

  const handleDrawerClose = () => {
    setSideBarOpen(false);
  };

  const onClick = (event: React.MouseEvent<HTMLElement>) =>{
    setCollapse(!collapse);
  }

  return (
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: sideBarOpen,
            })}
        >
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, sideBarOpen && classes.hide)}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap>
              Header Message
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={sideBarOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
          </div>
          <Divider/>
          <List>
            <Grid>
              {tabMenu.map((item: ListProps) => {
                return (
                    <Grid>
                      <ListItem button key={item.key} onClick={onClick}>
                        <ListItemText primary={item.label}/>
                        {collapse ? <ExpandLess/> : <ExpandMore/>}
                      </ListItem>
                      <Collapse key={item.key+"collapse"} component={"li"} unmountOnExit in={collapse}> {/* key를 이렇게 가져가도 되나?*/}
                        <List>
                          {item.subTabMenu.map((subMenu: SubListProps) => {
                            return (
                                <ListItem button key={subMenu.key} className={classes.nested}>
                                  <ListItemText primary={subMenu.label}/>
                                </ListItem>
                            )
                          })}
                        </List>
                      </Collapse>
                    </Grid>
                );
              })};
            </Grid>
          </List>
          <Divider/>
        </Drawer>
        <main
            className={clsx(classes.content, {
              [classes.contentShift]: sideBarOpen,
            })}
        >
          <div className={classes.drawerHeader}/>
        </main>
      </div>
  );
}