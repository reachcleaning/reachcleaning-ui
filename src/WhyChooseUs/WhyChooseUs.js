import React from 'react';
import * as CONSTANT from '../constants/CONSTANT';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    verified_icon : {
        fontSize: '50px',
        color: 'dodgerblue'
    },
    icon_container : {
        display: 'inline-flex'
    },
    message : {
        margin : '10px 0 0 10px',
        fontSize: 'inherit',
        fontWeight: 400
    }
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const WhyChooseUs = () => {
    const classes = useStyles(); 
    scrollTop();
    return(
        <div style={{margin: 'auto', marginBottom: '30px'}}>
            <div className="row mb-5 mt-5">
                <div className="col-md-12 text-center h1" style={{fontSize: '30px', fontWeight: '500', color: '#3E762A'}}>
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
            <div className="row mb-4">
                <div className="col-md-12 text-center mb-5" style={{color: '#3E762A'}}>
                    <span>{CONSTANT.WHY_NOT_CONTACT_US}</span>
                    <a style={{textDecoration: 'underline', color: '#3E762A'}} href={`tel:${CONSTANT.COMPANY_PHONE_NO}`}>{CONSTANT.COMPANY_PHONE_NO}</a>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;