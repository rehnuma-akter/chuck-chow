import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Contact.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
import { toast } from 'react-toastify';

const Contact = () => {
    const [user] = useAuthState(auth);
    const submit = () => {
        toast("Thank You So Much For Submitting");
    };
    return (
        <div>
            <h2 className='my-4'>Connect with Me</h2>
            <div className='form'>
                <h6>Please Fill This Form</h6>
                <Form>
                    <Row className="mb-3 my-5">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" onClick={submit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;