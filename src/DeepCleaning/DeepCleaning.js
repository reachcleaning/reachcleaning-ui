import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DeepCleaning_1 from '../Assests/img/DeepCleaning_1.jpg';
import DeepCleaning_2 from '../Assests/img/DeepCleaning_2.jpg';
import DeepCleaning_3 from '../Assests/img/DeepCleaning_3.jpg';
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
        fontSize: '28px',
        fontWeight: 400,
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

const DeepCleaning = () => {
    const classes = useStyles();
    scrollTop();

    return (
        <div className={classes.container}>
            <div className={classes.post_title}>{CONSTANT.DEEP_CLEANING}</div>
            <div className={classes.message}>{CONSTANT.DEEP_CLEANING_MESSAGE}</div>
            <Carousel className={classes.slider_container}>
                <Carousel.Item interval={100}>
                    <img
                    className="rounded mx-auto d-block"
                    src={DeepCleaning_2}
                    alt="Third slide"
                    height="400"
                    />
                </Carousel.Item>
                <Carousel.Item interval={100}>
                    <img
                    className="rounded mx-auto d-block"
                    height="400"
                    src={DeepCleaning_3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={100}>
                    <img
                    className="rounded mx-auto d-block"
                    src={DeepCleaning_1}
                    alt="First slide"
                    height="400"
                    />
                </Carousel.Item>
            </Carousel>
            <WhyChooseUs/>
        </div>
    );
}

export default DeepCleaning;