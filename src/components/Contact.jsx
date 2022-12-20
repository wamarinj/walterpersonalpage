import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div class="contact">
            <Form>
                <h4>Contact</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                    Got a problem to solve?
                    <Form.Control type="email" placeholder="Enter name" />
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <InputGroup>
                        <InputGroup.Text>Message</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </Form.Group>
                <p class="text-muted">andresjimenezdeveloper@gmail.com</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br></br>
                <a href="https://www.linkedin.com/in/walter-m-b23a37177/">
                    <img src="Linkedin_Logo.svg"     
                    style={{width: "100px"}} />
                </a>          
            </Form>
        </div>
    );
};

export default Contact;