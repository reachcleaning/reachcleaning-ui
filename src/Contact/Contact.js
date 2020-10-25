import React, {useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import * as emailjs from 'emailjs-com';
import {NAME, EMAIL, MESSAGE, PHONENO, SUBMIT} from '../constants/CONSTANT';
import ReCAPTCHA from "react-google-recaptcha";

export default () => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [PhoneNo, setPhoneNo] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');
    const [SucessMessage, setSuccessMessage] = useState('');
    const [Captcha, setCaptcha] = useState(null);
    const _reCaptchaRef = useRef(null);
    const SITE_KEY = "6Lc3ONsZAAAAAAbBCrOIlikUpNnFvcRxJBsEsNVN";

    const handleSubmit = () => {
        setSuccessMessage('');
        setErrorMessage('');
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)) {
            setErrorMessage('Invalid Email Address');
            setSuccessMessage('');
            return;
        }

        if(!Message || !Name || !PhoneNo) {
            setErrorMessage('All Fields are required');
            setSuccessMessage('');
            return;
        }

        if(!Captcha) {
            setErrorMessage('Captcha verification is required');
            setSuccessMessage('');
            return;
        }
        let templateParams = {
            from_name: Email,
            to_name: 'contact@reachcleaning.co.uk',
            name: Name,
            email: Email,
            phone: PhoneNo,
            message: Message,
        }

        emailjs.send(
            "reachcleaning.co.uk",
            "template_gytzevk",
            templateParams,
            'user_OnQmWEwMgV8iDfUIgfzjR'
        )
        .then(e => {
            setSuccessMessage('Thank you for contacting us. We will get back to you soon');
            setName('');
            setEmail('');
            setMessage('');
            setName('');
            setPhoneNo("");
            setCaptcha(null);
        })
        .catch(e => setErrorMessage("Failed to send Mail!!! Try Again"));

        return true;
    }

    const handleChange = value => {
        setCaptcha(value);
    };

    return (
        <React.Fragment>
            <div className="mt-5 w-100">
                <Container className="justify-content-center">
                    <Jumbotron className="col-md-6 offset-md-3 col-sm-12">
                        { ErrorMessage && 
                            <Alert variant="danger" onClose={() => setErrorMessage(false)} dismissible>
                                <Alert.Heading>{ErrorMessage}</Alert.Heading>
                            </Alert>
                        }
                        { SucessMessage && 
                            <Alert variant="success" onClose={() => setSuccessMessage(false)} dismissible>
                                <Alert.Heading>{SucessMessage}</Alert.Heading>
                            </Alert>
                        }
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>{NAME}</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={e => {
                                        e.persist();
                                        setName(e.target.value);
                                    }
                                }/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>{EMAIL}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={Email} onChange={e => {
                                        e.persist();
                                        setEmail(e.target.value);
                                    }
                                }/>
                            </Form.Group>
                            <Form.Group controlId="formPhoneNo">
                                <Form.Label>{PHONENO}</Form.Label>
                                <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={PhoneNo} placeholder="123-45-678" onChange={e => {
                                        e.persist();
                                        setPhoneNo(e.target.value);
                                    }
                                }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>{MESSAGE}</Form.Label>
                                <Form.Control placeholder="Enter your message" as="textarea" value={Message} rows={3} onChange={e => {
                                    e.persist();
                                    setMessage(e.target.value);
                                }}/>
                            </Form.Group>
                            <ReCAPTCHA
                                ref={_reCaptchaRef}
                                sitekey={SITE_KEY}
                                onChange={handleChange}
                            />
                            <Button className="mt-5" variant="primary" type="button" onClick={handleSubmit}>{SUBMIT}</Button>
                        </Form>
                    </Jumbotron>
                </Container>
            </div>
        </React.Fragment>
    );
}