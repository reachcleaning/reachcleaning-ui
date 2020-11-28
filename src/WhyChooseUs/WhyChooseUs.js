import React from 'react';
import * as CONSTANT from '../constants/CONSTANT';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    verified_icon : {
        fontSize: '3.5rem',
        color: 'dodgerblue'
    },
    icon_container : {
        display: 'inline-flex'
    },
    message : {
        margin : '10px 0 0 10px',
        fontSize: 'larger',
        fontWeight: 500
    }
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const WhyChooseUs = () => {
    const classes = useStyles(); 
    scrollTop();
    return(
        <div style={{margin: 'auto'}}>
            <div className="row mb-5 mt-5">
                <div className="col-md-12 text-center h1">
                    {CONSTANT.WHY_CHOOSE_US}
                </div>
            </div>
            <div className="row mb-5 mt-5">
                <div className="col-md-6">
                    <div className={classes.icon_container}>
                    <VerifiedUserIcon className={classes.verified_icon}/>
                    <div className={classes.message}>{CONSTANT.SATISFACTION}</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.icon_container}>
                    <VerifiedUserIcon className={classes.verified_icon}/>
                    <div className={classes.message}>{CONSTANT.BESPOKE_SERVICES_TITLE}</div>
                    </div>
                </div>
            </div>
            <div className="row mb-5 mt-5">
                <div className="col-md-6">
                    <div className={classes.icon_container}>
                    <VerifiedUserIcon className={classes.verified_icon}/>
                    <div className={classes.message}>{CONSTANT.AVAILABLE_MANAGEMENT_TITLE}</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.icon_container}>
                    <VerifiedUserIcon className={classes.verified_icon}/>
                    <div className={classes.message}>{CONSTANT.STAFF_TITLE}</div>
                    </div>
                </div>
            </div>
            <div className="row mb-5 mt-5">
                <div className="col-md-6">
                    <div className={classes.icon_container}>
                    <VerifiedUserIcon className={classes.verified_icon}/>
                    <div className={classes.message}>{CONSTANT.RESPONSE_TIME_TITLE}</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.icon_container}>
                    <VerifiedUserIcon className={classes.verified_icon}/>
                    <div className={classes.message}>{CONSTANT.FLEXIBILITY}</div>
                    </div>
                </div>
            </div>
            <div className="row mb-5 mt-5">
                <div className="col-md-6">
                    <div className={classes.icon_container}>
                    <VerifiedUserIcon className={classes.verified_icon}/>
                    <div className={classes.message}>{CONSTANT.COMPETITIVE_TITLE}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mb-5">
                    <span>{CONSTANT.WHY_NOT_CONTACT_US}</span>
                    <Link to={"mailto:" +CONSTANT.RC_MAIL}>{CONSTANT.RC_MAIL}</Link>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;