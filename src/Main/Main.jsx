import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { WELCOME, WELCOME_MESSAGE, SERVE_TITLE, SERVE_MESSAGE_P1, SERVE_MESSAGE_P2 } from '../constants/CONSTANT';
import WelcomeImg from '../Assests/img/Website/Home Page_Pic 1.jpg';
import ServeImg from '../Assests/img/Website/Home Page Pic 2.jpg';

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

const WelcomeInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <div className={classes.post_title}>{WELCOME}</div>
                <div className={classes.message}>
                    <div className="text-center">{WELCOME_MESSAGE}</div>
                    <img className="content_img" src={WelcomeImg} alt={WelcomeImg} />
                </div>
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
                <img className="content_img" src={ServeImg} alt={ServeImg} />
                <p className={classes.message}>{SERVE_MESSAGE_P2}</p>
            </div>
        </div>
    );
}

const Main = () => {
    return (<div style={{marginBottom: "120px"}}>
        <WelcomeInfo/>
        <Serve />
    </div>)
}

export default Main;