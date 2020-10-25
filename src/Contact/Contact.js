import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ReCAPTCHA from "react-google-recaptcha";
import * as emailjs from 'emailjs-com';
import {NAME, EMAIL, MESSAGE, SUBMIT} from '../constants/CONSTANT';

export default () => {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');
    const [Captcha, setCaptcha] = useState(null);
    const [SucessMessage, setSuccessMessage] = useState('');

    const handleSubmit = () => {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)) {
            setErrorMessage('Invalid Email Address');
            return;
        }
        if(!Captcha) {
            setErrorMessage('Captcha is not validated');
            return;
        }
        if(!Message || !Name) {
            setErrorMessage('All Fields are required');
            return;
        }

        let templateParams = {
            from_name: Name+"<"+Email+">",
            to_name: 'contact@reachcleaning.co.uk',
            message_html: Message,
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
        })
        .catch(e => setErrorMessage("Failed to send Mail!!! Try Again"));

        return true;
    }

    const onCaptchaChange = (val) => {
        setCaptcha(val);
    }

    return (
        <React.Fragment>
            <div className="row mt-5 w-100">
                <Container className="col-md-6">
                    <Jumbotron>
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
                                <Form.Control type="text" placeholder="Enter Name" onChange={e => {
                                        e.persist();
                                        setName(e.target.value);
                                    }
                                }/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>{EMAIL}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => {
                                        e.persist();
                                        setEmail(e.target.value);
                                    }
                                }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>{MESSAGE}</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={e => {
                                    e.persist();
                                    setMessage(e.target.value);
                                }}/>
                            </Form.Group>
                            <ReCAPTCHA
                                sitekey="6LdQMtsZAAAAAP-2m54ABg-DAFtRj-O93XW3ekUT"
                                onChange={onCaptchaChange}
                            />
                            <Button className="mt-4" variant="primary" type="button" onClick={handleSubmit}>{SUBMIT}</Button>
                        </Form>
                    </Jumbotron>
                </Container>
            </div>
        </React.Fragment>
    );
}