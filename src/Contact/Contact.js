import React, {useRef, useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import * as emailjs from 'emailjs-com';
import {FIRST_NAME, LAST_NAME, MIDDLE_NAME,
    EMAIL, MESSAGE, PHONENO, SUBMIT,
    CONTACT_US_TODAY
} from '../constants/CONSTANT';
import ReCAPTCHA from "react-google-recaptcha";

export default () => {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
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

        const Name = middleName ? firstName + " " + lastName : firstName + " " + middleName + " " + lastName;
        
        if(!firstName || !lastName ) {
            setErrorMessage('First Name and Last Name are Required');
            setSuccessMessage('');
            return;
        }

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)) {
            setErrorMessage('Invalid Email Address');
            setSuccessMessage('');
            return;
        }

        if(!PhoneNo) {
            setErrorMessage('Phone No is Required');
            setSuccessMessage('');
            return;
        }

        if(!Message) {
            setErrorMessage('Message is Required');
            setSuccessMessage('');
            return;
        }

        if(!Captcha) {
            setErrorMessage('Captcha Verification is Required');
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
            setFirstName('');
            setEmail('');
            setMessage('');
            setLastName('');
            setMiddleName('');
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
            <div className="mt-5">
                <div className="m-5 row">
                    <Jumbotron className="col-md-7 col-sm-12">
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
                            <Form.Row>
                                <Form.Group controlId="formFirstName" className="col-md-4">
                                    <Form.Label className="required">{FIRST_NAME}</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={e => {
                                            e.persist();
                                            setFirstName(e.target.value);
                                        }
                                    }/>
                                </Form.Group>
                                <Form.Group controlId="formMiddleName" className="col-md-4">
                                    <Form.Label>{MIDDLE_NAME}</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Middle Name" value={middleName} onChange={e => {
                                            e.persist();
                                            setMiddleName(e.target.value);
                                        }
                                    }/>
                                </Form.Group>
                                <Form.Group controlId="formLastName" className="col-md-4">
                                    <Form.Label className="required">{LAST_NAME}</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={e => {
                                            e.persist();
                                            setLastName(e.target.value);
                                        }
                                    }/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="col-md-6" controlId="formEmail">
                                    <Form.Label className="required">{EMAIL}</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={e => {
                                            e.persist();
                                            setEmail(e.target.value);
                                        }
                                    }/>
                                </Form.Group>
                                <Form.Group className="col-md-6" controlId="formPhoneNo">
                                    <Form.Label className="required">{PHONENO}</Form.Label>
                                    <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={PhoneNo} placeholder="+44-7911-123456" onChange={e => {
                                            e.persist();
                                            setPhoneNo(e.target.value);
                                        }
                                    }/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formMessage">
                                <Form.Label className="required">{MESSAGE}</Form.Label>
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
                    <Jumbotron className="col-md-5 col-sm-12">
                            <h4 className="display-6">{CONTACT_US_TODAY}</h4>
                            <p>Phone No: 03300430142</p>
                    </Jumbotron>
                </div>
            </div>
        </React.Fragment>
    );
}