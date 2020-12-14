import React from 'react';
import * as CONSTANT from '../constants/CONSTANT';
import { makeStyles } from '@material-ui/core/styles';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import pic1 from '../Assests/img/Website/About Us - Pic 1.jpg';
import pic2 from '../Assests/img/Website/About Us Pic 2.jpg';

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
        overflowX: 'auto',
        overflowY: 'hidden',
        justifyContent: 'center',
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
        width: '22%',
        "& div": {
            fontSize: '18px'
        },
        "& a": {
            fontWeight: '400',
            fontSize: '12px'
        }
    }
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const AboutUs = () => {
    scrollTop();
    const classes = useStyles();
    return (
            <div className={classes.post_container}>
                <div className={classes.post_content}>
                    <div className={classes.post_title}>{CONSTANT.ABOUTUS}</div>
                    <div className="row" style={{alignItems: 'center'}}>
                        <div className="col-md-7">
                            <p className={classes.message}>{CONSTANT.ABOUTUS_MESSAGE_P1}</p>
                        </div>
                        <div className="col-md-5">
                            <img className="content_img" src={pic1} alt={pic1} />
                        </div>
                    </div>
                    <div className="row" style={{alignItems: 'center'}}>
                        <div className="col-md-5">
                            <img className="content_img" src={pic2} alt={pic2} />
                        </div>
                        <div className="col-md-7">
                            <p className={classes.message}>{CONSTANT.ABOUTUS_MESSAGE_P2}</p>
                        </div>
                    </div>
                </div>
                <WhyChooseUs/>
            </div>
    );
}
export default AboutUs;