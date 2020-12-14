import React from 'react';
import * as CONSTANT from '../constants/CONSTANT';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    message : {
        margin : '10px 0 0 0',
        fontWeight: 350,
        textAlign: 'justify'
    },
    heading: {
        margin: '10px 0'
    }
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const PrivacyPolicy = () => {
    const classes = useStyles();
    scrollTop();

    return(
        <div className="m-5">
            <div style={{margin: 'auto', paddingBottom: '50px'}}>
                <div className="mb-5 mt-5">
                    <div className="col-md-12 text-center h1" style={{color: '#3E762A', fontSize: '25px', fontWeight: 550}}>
                        {CONSTANT.PRIVACY_POLICY}
                    </div>
                </div>
                <p className={classes.message}>{CONSTANT.PRIVACY_POLICY_MESSAGE}</p>
                <h3 className={classes.heading}>{CONSTANT.WHAT_DO_WE_COLLECT_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.WHAT_DO_WE_COLLECT_MESSAGE}</p>
                <h3 className={classes.heading}>{CONSTANT.COLLECTED_INFORMATION_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.COLLECTED_INFORMATION_MESSAGE}</p>
                <h3 className={classes.heading}>{CONSTANT.WEBSITE_SECURITY_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.WEBSITE_SECURITY_MESSAGE}</p>
                <h3 className={classes.heading}>{CONSTANT.ENQUIRY_FORMS_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.ENQUIRY_FORMS_MESSAGE}</p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;