import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    WELCOME, WELCOME_MESSAGE, ABOUTUS, ABOUTUS_MESSAGE_P1, ABOUTUS_MESSAGE_P2,
    SERVE_TITLE, SERVE_MESSAGE_P1, SERVE_MESSAGE_P2,
    SERVICE_TITLE, SERVICE_MESSAGE, CLINICAL_SERVICE_TITLE,
    CLINICAL_SERVICE_MESSAGE, PERIODIC_SERVICE_TITLE, PERIODIC_SERVICE_MESSAGE,
    DEEP_SERVICE_MESSAGE, DEEP_SERVICE_TITLE, WALL_SERVICE_MESSAGE, WALL_SERVICE_TITLE,
    CONTACT_US_MESSAGE, RC_MAIL
} from '../constants/CONSTANT';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Element } from 'react-scroll'

const useStyles = makeStyles(() => ({
    post_container: {
        marginTop: '20px',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '20px'
    },
    post_content: {
        flex: 1,
    },
    post_title: {
        fontSize: '40px',
        fontWeight: 100,
        lineHeight: 1.65,
    },
    message: {
        fontWeight: 100
    }
}));


const WelcomeInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <div className={classes.post_title}>{WELCOME}</div>
                <div className={classes.message}>{WELCOME_MESSAGE}</div>
            </div>
        </div>
    );
}

const AboutUs = () => {

    const classes = useStyles();
    return (
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <Element id='aboutus' name='aboutus'>
                    <div className={classes.post_title}>{ABOUTUS}</div>
                    <p className={classes.message}>{ABOUTUS_MESSAGE_P1}</p>
                    <p className={classes.message}>{ABOUTUS_MESSAGE_P2}</p>
                </Element>
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
                <p className={classes.message}>{SERVE_MESSAGE_P2}</p>
            </div>
        </div>
    );
}

const Services = () => {
    const classes = useStyles();
    return (
        <div className={classes.post_container}>
            <div className={classes.post_content}>
                <Element id='services' name='services'>
                    <div className={classes.post_title}>{SERVICE_TITLE}</div>
                    <p className={classes.message}>{SERVICE_MESSAGE}</p>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">{CLINICAL_SERVICE_TITLE}</Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>{CLINICAL_SERVICE_MESSAGE}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">{PERIODIC_SERVICE_TITLE}</Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>{PERIODIC_SERVICE_MESSAGE}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">{DEEP_SERVICE_TITLE}</Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>{DEEP_SERVICE_MESSAGE}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">{WALL_SERVICE_TITLE}</Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>{WALL_SERVICE_MESSAGE}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Element>
            </div>
        </div>
    );
}

const Main = () => {
    return (<div>
        <WelcomeInfo />
        <AboutUs />
        <Serve />
        <Services />
        <p>
            <i>{CONTACT_US_MESSAGE}</i>
            <a href={"mailto:" + RC_MAIL}>{RC_MAIL}</a>
        </p>
    </div>)
}

export default Main;