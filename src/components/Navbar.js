import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import 'rpg-awesome/css/rpg-awesome.min.css';


const useStyles = makeStyles({
    list: {
      width: 200
    },
    fullList: {
      width: 'auto'
    },
  });
  
  const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
      isLoggedIn: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
          <Link to="/" style={drawerLinkStyle}>
              <ListItem button key="1">
                <i className="ra ra-bell ra-2x"></i>
                <ListItemText primary="General Store" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/blacksmith" style={drawerLinkStyle}>
              <ListItem button key="2">
                <i className="ra ra-large-hammer ra-2x"></i>
                <ListItemText primary="Blacksmith" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/leatherworker" style={drawerLinkStyle}>
              <ListItem button key="3">
                <i className="ra ra-vest ra-2x"></i>
                <ListItemText primary="Leatherworker" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/fletcher" style={drawerLinkStyle}>
              <ListItem button key="4">
                <i className="ra ra-target-arrows ra-2x"></i>
                <ListItemText primary="Fletcher" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/tailor" style={drawerLinkStyle}>
              <ListItem button key="5">
                <i className="ra ra-slash-ring ra-2x"></i>
                <ListItemText primary="Tailor" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/tavern" style={drawerLinkStyle}>
              <ListItem button key="6">
                <i className="ra ra-knife-fork ra-2x"></i>
                <ListItemText primary="Tavern" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/arcane" style={drawerLinkStyle}>
              <ListItem button key="7">
                <i className="ra ra-crystal-ball ra-2x"></i>
                <ListItemText primary="Arcane" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/potions" style={drawerLinkStyle}>
              <ListItem button key="8">
                <i className="ra ra-fizzing-flask ra-2x"></i>
                <ListItemText primary="Potions" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/temple" style={drawerLinkStyle}>
              <ListItem button key="9">
                <i className="ra ra-sunbeams ra-2x"></i>
                <ListItemText primary="Temple" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/jeweler" style={drawerLinkStyle}>
              <ListItem button key="10">
                <i className="ra ra-diamond ra-2x"></i>
                <ListItemText primary="Jeweler" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/animals" style={drawerLinkStyle}>
              <ListItem button key="11">
                <i className="ra ra-pawprint ra-2x"></i>
                <ListItemText primary="Animals" style={listItemTextStyle}/>
              </ListItem>
          </Link>
          <Link to="/custom" style={drawerLinkStyle}>
              <ListItem button key="12">
                <i className="ra ra-wrench ra-2x"></i>
                <ListItemText primary="Custom Items" style={listItemTextStyle}/>
              </ListItem>
          </Link>
        </List>
        <Divider />
      </div>
    );
    if (isAuthenticated) {
        return (
            <div>
            {['left'].map((anchor) => (
            <div style={navStyle} key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
                <Link to="/login" onClick={logout} style={{ textDecoration: 'none' }}><Button>Logout</Button></Link>
                <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
                {list(anchor)}
                </SwipeableDrawer>
            </div>
            ))}
        </div>
        )
    } else {
        return (
            <div>
                {['left'].map((anchor) => (
                <div style={navStyle} key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
                    <div>
                        <Link to="/login" style={{ textDecoration: 'none' }}><Button>Login</Button></Link>
                        <Link to="/signup" style={{ textDecoration: 'none' }}><Button>Signup</Button></Link>
                    </div>
                    <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                    </SwipeableDrawer>
                </div>
                ))}
            </div>
        );
    }
  }

 const navStyle = {
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     height: '8vh',
     backgroundColor: '#bf310d'
 }

 const drawerLinkStyle = {
     textDecoration: 'none',
     color: '#000'
 }

 const listItemTextStyle = {
    marginLeft: '0.5rem'
 }

 Navbar.propTypes = {
   logout: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
 }

 const mapStateToProps = state => ({
   auth: state.auth
 })

 export default connect(mapStateToProps, { logout })(Navbar);