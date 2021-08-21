import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./assets/Header.css"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Logo from "./assets/logo.jpg"
import { Link } from "react-router-dom"


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">  <img src={Logo} alt="logo" /> </Link>
        {['Donation', 'Search', 'SignUp', 'Login'].map((text) => (
          <ListItem button key={text}>
            <Link to={text}> <ListItemText primary={text} /> </Link>
          </ListItem>
        ))}

      </List>
      <Divider />
    </div>
  );
  return (
    <div className="header">
      <div className="menu">
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><MenuRoundedIcon fontSize="large" /></Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
        <Link to="/">  <img src={Logo} alt="logo" /> </Link>
      </div>
      <div className="bigMenu">
        <Link to="/donation"> <h5>Donation</h5> </Link>
        <Link to="/search"> <h5>Search</h5> </Link>
        <Link to="/signup"> <h5>Sign Up</h5> </Link>
        <Link to="/login">  <h5>Login</h5></Link>
        <Link to="/">  <img src={Logo} alt="logo" /> </Link>
      </div>
    </div>
  );
}
