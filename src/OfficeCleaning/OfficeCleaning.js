import React from 'react';
import OfficeCleaning_1 from '../Assests/img/Website/Office Cleaning  Pic 1.jpg';
import OfficeCleaning_2 from '../Assests/img/Website/Office Cleaning  Pic 2.jpg';
import { makeStyles } from '@material-ui/core/styles';
import * as CONSTANT from '../constants/CONSTANT';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const useStyles = makeStyles(() => ({
    slider_container : {
        margin: '20px auto',
        width: '713px',
        background: 'grey'
    },
    post_title: {
        fontSize: '25px',
        fontWeight: 500,
        lineHeight: 1.65,
        color: '#3E762A',
        textAlign: "center"
    },
    message: {
        fontWeight: 450,
        textAlign: 'justify'
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        width: '80%',
        paddingTop: '30px',
        margin: 'auto'
    }
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const OfficeCleaning = () => {
    const classes = useStyles();
    scrollTop();
    return (
        <div className={classes.container}>
            <div className={classes.post_title}>{CONSTANT.OFFICE_CLEANING}</div>
            <img className="content_img" src={OfficeCleaning_1} alt={OfficeCleaning_1} />
            <div className={classes.message}>{CONSTANT.OFFICE_CLEANING_MESSAGE}</div>
            <img className="content_img" src={OfficeCleaning_2} alt={OfficeCleaning_2} />
            <WhyChooseUs/>
        </div>
    );
}

export default OfficeCleaning;