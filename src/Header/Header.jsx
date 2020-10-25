import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../Assests/img/logo.jpeg';
import IconButton from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {ABOUTUS, CONTACT, MOTTO} from '../constants/CONSTANT';
import * as Scroll from 'react-scroll';
import {Link} from 'react-router-dom';

const ScrollLink = Scroll.Link;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: '#000'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  icon_button: {
    flex: 0.9
  },
  navbar_right: {
    flex: 'inherit'
  },
  nav_buttons_block: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  nav_button: {
    margin: '5px 10px',
    color: '#fff',
    background: 'rgba(194,166,97, 0.4)'
  },
  nav_link: {
    textDecoration: 'none'
  },
  motto: {
    color: '#C2A661',
    fontStyle: 'oblique',
    display: 'flex',
    marginTop: '40px',
    marginBottom: '10px'
  }
}));


export default () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root} >
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.icon_button}>
              <img src={logo} alt="logo.jpeg" width="200" height="200"/>
            </IconButton>
            <div className={classes.navbar_right}>
              <div className={classes.nav_buttons_block}>
                <ScrollLink 
                  to="aboutus" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className={classes.nav_link}
                >
                  <Link to="/#aboutus" className={classes.nav_link}>
                    <Button size="large" className={classes.nav_button}>{ABOUTUS}</Button>
                  </Link>
                </ScrollLink>
                <Link to="/contact" className={classes.nav_link}>
                  <Button size="large" className={classes.nav_button}>{CONTACT}</Button>
                </Link>
              </div>
              <div className={classes.motto}>{MOTTO}</div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}
  