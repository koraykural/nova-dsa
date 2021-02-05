import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import { Apps, ChevronLeft, ChevronRight, Dashboard } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  }),
);

export const CustomDrawer: React.FC = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const location = useLocation();

  const drawerToggle = () => {
    setOpen(!open);
  }

  const isSelected = (path: string): boolean => {
    return location.pathname === path;
  }

  return (
    <Drawer
      variant="permanent"
      className={open ? classes.drawerOpen : classes.drawerClose}
      classes={{paper: (open ? classes.drawerOpen : classes.drawerClose)}}
    >
      <Toolbar />
      <div className={classes.toolbar}>
        <IconButton onClick={drawerToggle}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
          <ListItem button component={Link} to="/d" key={"Dashboard"} selected={isSelected('/d')}>
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
          <ListItem button component={Link} to="/d/projects" key={"Projects"} selected={isSelected('/d/projects')}>
            <ListItemIcon><Apps /></ListItemIcon>
            <ListItemText primary={"Projects"} />
          </ListItem>
      </List>
    </Drawer>
  );
}