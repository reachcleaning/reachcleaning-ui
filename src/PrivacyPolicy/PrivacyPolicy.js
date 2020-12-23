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
            <div style={{margin: 'auto', paddingBottom: '100px'}}>
                <div className="mb-5 mt-5">
                    <div className="col-md-12 text-center h1" style={{color: '#3E762A', fontSize: '25px', fontWeight: 550}}>
                        {CONSTANT.PRIVACY_POLICY}
                    </div>
                </div>
                <p className={classes.message}>{CONSTANT.PRIVACY_POLICY_MESSAGE}</p>
                <h3 className={classes.heading}>{CONSTANT.WHAT_DO_WE_COLLECT_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.WHAT_DO_WE_COLLECT_MESSAGE}</p>
                <li className="ml-3">{CONSTANT.WHAT_DO_WE_COLLECT_LIST}</li>
                <h3 className={classes.heading}>{CONSTANT.HOW_DO_WE_COLLECT_DATA_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.HOW_DO_WE_COLLECT_DATA_MESSAGE}</p>
                <li className="ml-3">{CONSTANT.HOW_DO_WE_COLLECT_DATA_LIST}</li>
                <h3 className={classes.heading}>{CONSTANT.HOW_WE_WILL_USE_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.HOW_WE_WILL_USE_MESSAGE}</p>
                <li className="ml-3">{CONSTANT.HOW_WE_WILL_USE_LIST}</li>
                <h3 className={classes.heading}>{CONSTANT.HOW_WE_WILL_STORE_TITLE}</h3>
                <p className={classes.message}>{CONSTANT.HOW_WE_WILL_STORE_MESSAGE_1}</p>
                <p className={classes.message}>{CONSTANT.HOW_WE_WILL_STORE_MESSAGE_2}</p>
                <h3 className={classes.heading}>What are your data protection rights?</h3>
                <p className={classes.message}>RCS would like to make sure you are fully aware of all of your data protection rights. 
                Every user is entitled to the following:</p>
                <p className={classes.message}><strong>The right to access </strong>– You have the right to request RCS for copies of 
                your personal data. We may charge you a small fee for this service.</p>
                <p className={classes.message}><strong>The right to rectification </strong>– You have the right to request that RCS correct 
                any information you believe is inaccurate. You also have the right to request RCS to complete the information you believe is 
                incomplete</p>
                <p className={classes.message}><strong>The right to erasure </strong>– You have the right to request that RCS erase your 
                personal data, under certain conditions.</p>
                <p className={classes.message}><strong>The right to restrict processing </strong>– You have the right to request that RCS 
                restrict the processing of your personal data, under certain conditions.</p>
                <p className={classes.message}><strong>The right to object to processing </strong>– You have the right to object to RCS’s 
                processing of your personal data, under certain conditions.</p>
                <p className={classes.message}><strong>The right to data portability </strong>– You have the right to request that RCS 
                transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
                <p className={classes.message}>If you make a request, we have one month to respond to you. If you would like to exercise 
                any of these rights, please contact us at our email:</p>
                <p className={classes.message}>Call us at: <a href="tel:03300430142">03300430142</a></p>
                <p className={classes.message}>Or write to us:<a href="mailto:contact@reachcleaning.co.uk">contact@reachcleaning.co.uk</a></p>
                <h3 className={classes.heading}>Cookies</h3>
                <p className={classes.message}>RCS website does not use cookies.</p>
                <h3 className={classes.heading}>Changes to our privacy policy</h3>
                <p className={classes.message}>RCS keeps its privacy policy under regular review and places any updates on this web page. This 
                privacy policy was last updated on 20 December 2020.</p>
                <h3 className={classes.heading}>How to contact us</h3>
                <p className={classes.message}>If you have any questions about RCS’s privacy policy, the data we hold on you, or you would like 
                to exercise one of your data protection rights, please do not hesitate to contact us.</p>
                <p className={classes.message}>Call us at: <a href="tel:03300430142">03300430142</a></p>
                <p className={classes.message}>Or write to us:<a href="mailto:contact@reachcleaning.co.uk">contact@reachcleaning.co.uk</a></p>
                <h3 className={classes.heading}>How to contact the appropriate authority</h3>
                <p className={classes.message}>Should you wish to report a complaint or if you feel that RCS has not addressed your concern in a 
                satisfactory manner, you may contact the Information Commissioner’s Office.</p>
                <p className={classes.message}>Address: <a href="https://ico.org.uk/">https://ico.org.uk/</a></p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;