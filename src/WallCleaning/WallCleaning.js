import React from 'react';
import WallCleaning_1 from '../Assests/img/Website/Wall cleaning.jpg';
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

const WallCleaning = () => {
    const classes = useStyles();
    scrollTop();
    return (
        <div className={classes.container}>
            <div className={classes.post_title}>{CONSTANT.WALL_CLEANING}</div>
            <div className={classes.message}>{CONSTANT.WALL_SERVICE_MESSAGE}</div>
            <img className="content_img" src={WallCleaning_1} alt={WallCleaning_1} />
            <WhyChooseUs/>
        </div>
    );
}

export default WallCleaning;