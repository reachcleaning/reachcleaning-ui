import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { RC_MAIL, CONTACT_US_MESSAGE, PRIVACY_POLICY, TNC } from '../constants/CONSTANT';

const useStyles = makeStyles(() => ({
    footer: {
        boxShadow: '0px 2px 4px 4px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        position: "fixed",
        bottom: 0,
        background: "white",
        width: "100%"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
    <div className={classes.footer}>
        <div className="row m-0">
            <div className="col-md-7 mt-2">
                <Link to="/PrivacyPolicy" style={{padding: '5px 10px'}}>{PRIVACY_POLICY}</Link>
            </div>
            <div className="col-md-5 mt-2">
                <p className="float-right">
                    <i>{CONTACT_US_MESSAGE}</i>
                    <a href={"mailto:" + RC_MAIL}>{RC_MAIL}</a>
                </p>
            </div>
        </div>
    </div>);
}

export default Footer;