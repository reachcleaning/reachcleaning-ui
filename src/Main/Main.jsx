import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    WELCOME, WELCOME_MESSAGE, ABOUTUS, ABOUTUS_MESSAGE_P1, ABOUTUS_MESSAGE_P2,
    SERVE_TITLE, SERVE_MESSAGE_P1, SERVE_MESSAGE_P2,
    SERVICE_TITLE, CLINICAL_SERVICE_TITLE,
    CLINICAL_SERVICE_MESSAGE, PERIODIC_SERVICE_TITLE, PERIODIC_SERVICE_MESSAGE,
    DEEP_SERVICE_MESSAGE, DEEP_SERVICE_TITLE, WALL_SERVICE_MESSAGE, WALL_SERVICE_TITLE
} from '../constants/CONSTANT';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Element } from 'react-scroll';
import ClinicalService from '../Assests/img/ClinicalService.png';
import PeriodicCleaning from '../Assests/img/PeriodicCleaning.jpeg';
import DeepCleaning from '../Assests/img/DeepCleaning.jpg';
import WallCleaning from '../Assests/img/WallCleaning.jpg';

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
        textAlign: "center"
    },
    message: {
        fontWeight: 100,
        textAlign: "center"
    },
    service_cards_height: {
        height: "fit-content",
        transition: 'transform 1s',
        marginBottom: '3rem !important',
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)"
        }
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
                <div className={classes.post_title}>{SERVICE_TITLE}</div>
                <CardDeck className="mt-5">
                    <Card className={classes.service_cards_height}>
                        <Card.Img variant="top" src={ClinicalService} />
                        <Accordion>
                            <Card className="m-0">
                                <Accordion.Toggle as={Card.Header} eventKey="0" style={{cursor:"pointer"}}>{CLINICAL_SERVICE_TITLE}</Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{CLINICAL_SERVICE_MESSAGE}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card>
                    <Card className={classes.service_cards_height}>
                        <Card.Img variant="top" src={PeriodicCleaning} />
                        <Accordion>
                            <Card className="m-0">
                                <Accordion.Toggle as={Card.Header} eventKey="0" style={{cursor:"pointer"}}>{PERIODIC_SERVICE_TITLE}</Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{PERIODIC_SERVICE_MESSAGE}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card>
                    <Card className={classes.service_cards_height}>
                        <Card.Img variant="top" src={DeepCleaning} />
                        <Accordion>
                            <Card className="m-0">
                                <Accordion.Toggle as={Card.Header} eventKey="0" style={{cursor:"pointer"}}>{DEEP_SERVICE_TITLE}</Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{DEEP_SERVICE_MESSAGE}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card>
                    <Card className={classes.service_cards_height}>
                        <Card.Img variant="top" src={WallCleaning} />
                        <Accordion>
                            <Card className="m-0">
                                <Accordion.Toggle as={Card.Header} eventKey="0" style={{cursor:"pointer"}}>{WALL_SERVICE_TITLE}</Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{WALL_SERVICE_MESSAGE}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card>
                </CardDeck>
            </div>
        </div>
    );
}

const Main = () => {
    return (<div>
        <WelcomeInfo />
        <Services />
        <AboutUs />
        <Serve />
    </div>)
}

export default Main;