import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ClinicalClining_1 from '../Assests/img/ClinicalClining_1.jpg';
import ClinicalClining_2 from '../Assests/img/ClinicalClining_2.jpg';
import ClinicalClining_3 from '../Assests/img/ClinicalClining_3.jpg';
import ClinicalClining_4 from '../Assests/img/ClinicalClining_4.jpg';
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
        fontSize: '40px',
        fontWeight: 700,
        lineHeight: 1.65,
        textAlign: "center"
    },
    message: {
        fontWeight: 330,
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
            <div className={classes.message}>{CONSTANT.CLINICLE_CLEANING_MESSAGE}</div>
            <Carousel className={classes.slider_container}>
                <Carousel.Item interval={100}>
                    <img
                    className="rounded mx-auto d-block"
                    src={ClinicalClining_1}
                    alt="First slide"
                    height="400"

                    />
                </Carousel.Item>
                <Carousel.Item interval={100}>
                    <img
                    className="rounded mx-auto d-block"
                    src={ClinicalClining_2}
                    alt="Third slide"
                    height="400"
                    />
                </Carousel.Item>
                <Carousel.Item interval={100}>
                    <img
                    className="rounded mx-auto d-block"
                    height="400"
                    src={ClinicalClining_3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={100}>
                    <img
                    className="rounded mx-auto d-block"
                    height="400"
                    src={ClinicalClining_4}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <WhyChooseUs/>
        </div>
    );
}

export default ClinicalCleaning;