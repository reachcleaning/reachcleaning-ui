import React from 'react';
import * as CONSTANT from '../constants/CONSTANT';
import { makeStyles } from '@material-ui/core/styles';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import pic1 from '../Assests/img/Website/Faster Response time.jpg';
import pic2 from '../Assests/img/Website/Flexibility.jpg';
import pic3 from '../Assests/img/Website/Inidividualised services.jpg';
import pic4 from '../Assests/img/Website/Competitive price.jpg';

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
    },
    heading_3: {
        fontWeight: 500,
        margin: '40px 0 10px 0'
    }
}));

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const QualityOfServices = () => {
    scrollTop();
    const classes = useStyles();
    return (
            <div className={classes.post_container}>
                <div className={classes.post_content}>
                    <div className={classes.post_title}>{CONSTANT.QUALITY_OF_SERVICE}</div>
                    <h3>{CONSTANT.RESPONSE_TIME_TITLE}</h3>
                    <p className={classes.message}>{CONSTANT.RESPONSE_TIME_MESSAGE}</p>
                    <img className="content_img" src={pic1} alt={pic1} />
                    <h3>{CONSTANT.FLEXIBILITY}</h3>
                    <img className="content_img" src={pic2} alt={pic2} />
                    <p className={classes.message}>{CONSTANT.FLEXIBILITY_MESSAGE}</p>
                    <h3>{CONSTANT.INDIVIDUAL_SERIVCE_TITLE}</h3>
                    <p className={classes.message}>{CONSTANT.INDIVIDUAL_SERIVCE_MESSAGE_1}</p>
                    <img className="content_img" src={pic3} alt={pic3} />
                    <p className={classes.message}>{CONSTANT.INDIVIDUAL_SERIVCE_MESSAGE_2}</p>
                    <h3>{CONSTANT.COMPETITIVE_TITLE}</h3>
                    <img className="content_img" src={pic4} alt={pic4} />
                    <p className={classes.message}>{CONSTANT.COMPETITIVE_MESSAGE}</p>
                </div>
                <WhyChooseUs/>
            </div>
    );
}
export default QualityOfServices;