import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    WELCOME, WELCOME_MESSAGE, ABOUTUS, ABOUTUS_MESSAGE_P1, ABOUTUS_MESSAGE_P2,
    SERVE_TITLE, SERVE_MESSAGE_P1, SERVE_MESSAGE_P2,
    SERVICE_TITLE, CLINICAL_SERVICE_TITLE,
    PERIODIC_SERVICE_TITLE, DEEP_SERVICE_TITLE, WALL_SERVICE_TITLE,
    CONTACT_US_MESSAGE, RC_MAIL, SERVICE_MESSAGE, WHY_CHOOSE_US, SATISFACTION, SATISFACTION_MESSAGE,
    BESPOKE_SERVICES_TITLE, BESPOKE_SERVICES_MESSAGE, AVAILABLE_MANAGEMENT_MESSAGE, AVAILABLE_MANAGEMENT_TITLE, STAFF_MESSAGE,
    STAFF_TITLE, QUALITY_OF_SERVICE, RESPONSE_TIME_TITLE, RESPONSE_TIME_MESSAGE, FLEXIBILITY, FLEXIBILITY_MESSAGE, 
    INDIVIDUAL_SERIVCE_TITLE, COMPETITIVE_TITLE, COMPETITIVE_MESSAGE, INDIVIDUAL_SERIVCE_MESSAGE, CLICK_HERE
} from '../constants/CONSTANT';
import { Element } from 'react-scroll';
import ClinicalService from '../Assests/img/ClinicalService.png';
import PeriodicCleaning from '../Assests/img/PeriodicCleaning.jpg';
import DeepCleaning from '../Assests/img/DeepCleaning.jpg';
import WallCleaning from '../Assests/img/WallCleaning.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    post_container: {
        marginTop: '20px',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '20px',
    },
    post_content: {
        flex: 1,
    },
    post_title: {
        fontSize: '40px',
        fontWeight: 700,
        lineHeight: 1.65,
        textAlign: "center"
    },
    message: {
        fontWeight: 330,
        textAlign: 'justify'
    },
    images_container : {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    service_cards_height: {
        height: "280px",
        margin: '10px',
        borderRadius: '20px',
        transition: 'transform 1s',
        marginBottom: '1rem !important',
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)"
        }
    },
    service_container : {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 20px',
        paddingBottom: '20px',
        textAlign: 'center',
        "& div": {
            fontWeight: 'bold'
        },
        "& a": {
            fontWeight: '400',
            fontSize: '15px'
        }
    }
}));


const WelcomeInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <div className={classes.post_title}>{WELCOME}</div>
                <div className={classes.message}>{WELCOME_MESSAGE}</div>
            </div>
        </div>
    );
}

const AboutUs = () => {

    const classes = useStyles();
    return (
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <Element id='aboutus' name='aboutus'>
                    <div className={classes.post_title}>{ABOUTUS}</div>
                    <p className={classes.message}>{ABOUTUS_MESSAGE_P1}</p>
                    <p className={classes.message}>{ABOUTUS_MESSAGE_P2}</p>
                </Element>
            </div>
        </div>
    );
}

const Serve = () => {

    const classes = useStyles();
    return (
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <div className={classes.post_title}>{SERVE_TITLE}</div>
                <p className={classes.message}>{SERVE_MESSAGE_P1}</p>
                <p className={classes.message}>{SERVE_MESSAGE_P2}</p>
            </div>
        </div>
    );
}

const Services = () => {
    const classes = useStyles();
    return (
        <div className={classes.post_container}>
            <div className={classes.post_content} style={{overflow: 'auto'}}>
                <div className={classes.post_title}>{SERVICE_TITLE}</div>
                <p className={classes.message}>{SERVICE_MESSAGE}</p>
                <div className={classes.images_container}>
                    <div className={classes.service_container}>
                        <img className={classes.service_cards_height} src={ClinicalService} alt="ClinicalService"/>
                        <div>
                            <div>{CLINICAL_SERVICE_TITLE}</div>
                            <Link to="/ClinicalCleaning">{CLICK_HERE}</Link>
                        </div>
                    </div>
                    <div className={classes.service_container}>
                        <img className={classes.service_cards_height} src={PeriodicCleaning} alt="PeriodicCleaning"/>
                        <div>
                            <div>{PERIODIC_SERVICE_TITLE}</div>
                            <Link to="/OfficeCleaning">{CLICK_HERE}</Link>
                        </div>
                    </div>
                    <div className={classes.service_container}>
                        <img className={classes.service_cards_height} src={DeepCleaning} alt="DeepCleaning"/>
                        <div>
                            <div>{DEEP_SERVICE_TITLE}</div>
                            <Link to="/DeepCleaning">{CLICK_HERE}</Link>
                        </div>
                    </div>
                    <div className={classes.service_container}>
                        <img className={classes.service_cards_height} src={WallCleaning} alt="WallCleaning"/>
                        <div>
                            <div>{WALL_SERVICE_TITLE}</div>
                            <Link to="/ClinicalCleaning">{CLICK_HERE}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const WhyChooseUs = () => {
    const classes = useStyles();
    return(
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <div className={classes.post_title}>{WHY_CHOOSE_US}</div>
                <h3>{SATISFACTION}</h3>
                <p className={classes.message}>{SATISFACTION_MESSAGE}</p>
                <h3>{BESPOKE_SERVICES_TITLE}</h3>
                <p className={classes.message}>{BESPOKE_SERVICES_MESSAGE}</p>
                <h3>{AVAILABLE_MANAGEMENT_TITLE}</h3>
                <p className={classes.message}>{AVAILABLE_MANAGEMENT_MESSAGE}</p>
                <h3>{STAFF_TITLE}</h3>
                <p className={classes.message}>{STAFF_MESSAGE}</p>
            </div>
        </div>
    );
}

export const QualityOfService = () => {
    const classes = useStyles();
    return(
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <div className={classes.post_title}>{QUALITY_OF_SERVICE}</div>
                <h3>{RESPONSE_TIME_TITLE}</h3>
                <p className={classes.message}>{RESPONSE_TIME_MESSAGE}</p>
                <h3>{FLEXIBILITY}</h3>
                <p className={classes.message}>{FLEXIBILITY_MESSAGE}</p>
                <h3>{INDIVIDUAL_SERIVCE_TITLE}</h3>
                <p className={classes.message}>{INDIVIDUAL_SERIVCE_MESSAGE}</p>
                <h3>{COMPETITIVE_TITLE}</h3>
                <p className={classes.message}>{COMPETITIVE_MESSAGE}</p>
            </div>
        </div>
    );
}

const Main = () => {
    return (<div>
        <WelcomeInfo/>
        <Services />
        <WhyChooseUs/>
        <QualityOfService/>
        <AboutUs />
        <Serve />
        <p>
            <i>{CONTACT_US_MESSAGE}</i>
            <a href={"mailto:" + RC_MAIL}>{RC_MAIL}</a>
        </p>
    </div>)
}

export default Main;