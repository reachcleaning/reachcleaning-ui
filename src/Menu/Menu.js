import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom';
import IconButton from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ErrorIcon from '@material-ui/icons/Error';
import FlagIcon from '@material-ui/icons/Flag';
import ContactsIcon from '@material-ui/icons/Contacts';

const useStyles = makeStyles(() => ({
    menu_icon : {
        color: '#fff',
        position: 'absolute',
        cursor: 'pointer',
        right: '10px',
        bottom: '-5px',
        "@media (max-width: 1118px)": {
            bottom: '20px'
        }
    },
    nav_link: {
        textDecoration: 'none',
        display: 'flex',
        color: '#42372f'
      },
}));

export default () => {
    const classes = useStyles();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(
        <React.Fragment>
            <IconButton
                color="black"
                className={classes.menu_icon}
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
            >
                <MenuIcon style={{fontSize: '40px'}}/>
            </IconButton>
            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
            >
                <div className={classes.drawerHeader}>
                <IconButton style={{cursor: 'pointer'}} onClick={handleDrawerClose}>
                    <ChevronRightIcon />
                </IconButton>
                </div>
                <Divider />
                <List>
                { location.pathname !== "/" && 
                <ListItem button key={"Home"}>
                    <Link to="/" className={classes.nav_link} onClick={handleDrawerClose}>
                    <ListItemIcon>
                        <HomeIcon />
                        </ListItemIcon>
                    <ListItemText primary={"Home"} />
                    </Link>
                </ListItem>
                }
                <ListItem button key={"About Us"}>
                    <Link to="/aboutus" className={classes.nav_link} onClick={handleDrawerClose}>
                    <ListItemIcon>
                        <PeopleIcon />
                        </ListItemIcon>
                    <ListItemText primary={"About Us"} />
                    </Link>
                </ListItem>
                <ListItem button key={"Our Services"}>
                    <Link to="/services" className={classes.nav_link} onClick={handleDrawerClose}>
                    <ListItemIcon>
                        <BusinessCenterIcon />
                        </ListItemIcon>
                    <ListItemText primary={"Our Services"} />
                    </Link>
                </ListItem>
                <ListItem button key={"Why Choose Us"}>
                    <Link to="/whychooseus" className={classes.nav_link} onClick={handleDrawerClose}>
                    <ListItemIcon>
                        <ErrorIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Why Choose Us"} />
                    </Link>
                </ListItem>
                <ListItem button key={"Quality of Our Services"}>
                    <Link to="/qualityofservices" className={classes.nav_link} onClick={handleDrawerClose}>
                    <ListItemIcon>
                        <FlagIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Quality of Our Services"} />
                    </Link>
                </ListItem>
                <ListItem button key={"Contact Us"}>
                    <Link to="/contact" className={classes.nav_link} onClick={handleDrawerClose}>
                        <ListItemIcon>
                        <ContactsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Contact Us"} />
                    </Link>
                </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}