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
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event: object, key: string) => {

  }

  return (
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
        >
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
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
            open={open}
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
                      <ListItem button key={item.key}>
                        <ListItemText primary={item.label}/>
                        {true ? <ExpandLess/> : <ExpandMore/>}
                      </ListItem>
                      <Collapse key={item.key} component={"li"} unmountOnExit in={true}>
                        <List>
                          {item.subTabMenu.map((subMenu: SubListProps) => {
                            return (
                                <ListItem button key={subMenu.key} className={classes.nested}>
                                  <ListItemText primary={subMenu.label}/>
                                </ListItem>
                            ) //TODO 접히는 기능 만들기
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
              [classes.contentShift]: open,
            })}
        >
          <div className={classes.drawerHeader}/>
        </main>
      </div>
  );
}