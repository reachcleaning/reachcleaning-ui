import React from 'react';
import * as CONSTANT from '../constants/CONSTANT';
import { makeStyles } from '@material-ui/core/styles';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import { Link } from 'react-router-dom';
import ClinicalService from '../Assests/img/ClinicalService.png';
import PeriodicCleaning from '../Assests/img/PeriodicCleaning.jpg';
import DeepCleaning from '../Assests/img/DeepCleaning.jpg';
import WallCleaning from '../Assests/img/WallCleaning.jpg';

const useStyles = makeStyles(() => ({
    post_container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        width: '80%',
        paddingTop: '30px',
        margin: 'auto'
    },
    post_content: {
        flex: 1,
    },
    post_title: {
        fontSize: '28px',
        fontWeight: 500,
        lineHeight: 1.65,
        color: '#3E762A',
        textAlign: "center"
    },
    message: {
        fontWeight: 450,
        textAlign: 'justify'
    },
    images_container : {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        overflowY: 'hidden',
        justifyContent: 'center',
    },
    service_cards_height: {
        width: "150px",
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
            fontSize: '18px'
        },
        "& a": {
            fontWeight: '400',
            fontSize: '12px'
        }
    },
    heading_3: {
        fontWeight: 500,
        margin: '40px 0 10px 0'
    }
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const OurServices = () => {
    scrollTop();
    const classes = useStyles();
    return (
            <div className={classes.post_container}>
                <div className={classes.post_content} style={{overflow: 'auto'}}>
                    <div className={classes.post_title}>{CONSTANT.SERVICE_TITLE}</div>
                    <p className={classes.message}>{CONSTANT.SERVICE_MESSAGE}</p>
                    <div className={classes.images_container}>
                        <div className={classes.service_container}>
                            <img className={classes.service_cards_height} src={ClinicalService} alt="ClinicalService"/>
                            <div>
                                <div>{CONSTANT.CLINICAL_SERVICE_TITLE}</div>
                                <Link to="/ClinicalCleaning">{CONSTANT.CLICK_HERE}</Link>
                            </div>
                        </div>
                        <div className={classes.service_container}>
                            <img className={classes.service_cards_height} src={PeriodicCleaning} alt="PeriodicCleaning"/>
                            <div>
                                <div>{CONSTANT.PERIODIC_SERVICE_TITLE}</div>
                                <Link to="/OfficeCleaning">{CONSTANT.CLICK_HERE}</Link>
                            </div>
                        </div>
                        <div className={classes.service_container}>
                            <img className={classes.service_cards_height} src={DeepCleaning} alt="DeepCleaning"/>
                            <div>
                                <div>{CONSTANT.DEEP_SERVICE_TITLE}</div>
                                <Link to="/DeepCleaning">{CONSTANT.CLICK_HERE}</Link>
                            </div>
                        </div>
                        <div className={classes.service_container}>
                            <img className={classes.service_cards_height} src={WallCleaning} alt="WallCleaning"/>
                            <div>
                                <div>{CONSTANT.WALL_SERVICE_TITLE}</div>
                                <Link to="/WallCleaning">{CONSTANT.CLICK_HERE}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <WhyChooseUs/>
            </div>
    );
}
export default OurServices;