import React from 'react';
import ClinicalClining_1 from '../Assests/img/Website/Clinical Pic 1.jpg';
import ClinicalClining_2 from '../Assests/img/Website/Clinical Pic 2.jpg';
import ClinicalClining_3 from '../Assests/img/Website/Clinical Pic 3.jpg';
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
        marginBottom: '20px',
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

const ClinicalCleaning = () => {
    const classes = useStyles();
    scrollTop();

    return (
        <div className={classes.container}>
            <div className={classes.post_title}>{CONSTANT.CLINICLE_CLEANING}</div>
            <div className={classes.message}>{CONSTANT.CLINICLE_CLEANING_MESSAGE_1}</div>
            <img className="content_img" src={ClinicalClining_1} alt={ClinicalClining_1} />
            <div className={classes.message}>{CONSTANT.CLINICLE_CLEANING_MESSAGE_2}</div>
            <img className="content_img" src={ClinicalClining_2} alt={ClinicalClining_2} />
            <div className={classes.message}>{CONSTANT.CLINICLE_CLEANING_MESSAGE_3}</div>
            <img className="content_img" src={ClinicalClining_3} alt={ClinicalClining_3} />
            <WhyChooseUs/>
        </div>
    );
}

export default ClinicalCleaning;