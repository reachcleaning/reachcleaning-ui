import React from 'react';
import DeepCleaning_1 from '../Assests/img/Website/DeepCleaning_ slide.jpg';
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

const DeepCleaning = () => {
    const classes = useStyles();
    scrollTop();

    return (
        <div className={classes.container}>
            <div className={classes.post_title}>{CONSTANT.DEEP_CLEANING}</div>
            <div className={classes.message}>{CONSTANT.DEEP_CLEANING_MESSAGE_1}</div>
            <img className="content_img" src={DeepCleaning_1} alt={DeepCleaning_1} />
            <div className={classes.message}>{CONSTANT.DEEP_CLEANING_MESSAGE_2}</div>
            <WhyChooseUs/>
        </div>
    );
}

export default DeepCleaning;