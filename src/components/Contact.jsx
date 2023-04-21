import React, { useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fvms40o', 'template_vu9kct5',
            form.current, '8sjbvqhR333NXay-3')
            .then((result) => {
                console.log(result.text);
                setMessage("")
                setEmail("")
                setName("")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div class="contact">
            <Form ref={form} onSubmit={sendEmail}>
                <h4>Contact</h4>
                <h4 className='subtitle'>Got a problem to solve?</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Text className="text-muted">
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name='user_name'
                        />
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Email"
                        name='user_email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <InputGroup>
                        <InputGroup.Text>Message</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            value={message}
                            aria-label="With textarea"
                            name='user_message'
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <p class="text-muted">andresjimenezdeveloper@gmail.com</p>
                <Button variant="primary" type="submit">
                    Send
                </Button>
                <br></br>
                <a href="https://www.linkedin.com/in/walter-m-b23a37177/">
                    <img src="Linkedin_Logo.svg"
                        style={{ width: "100px" }} />
                </a>
            </Form>
        </div>
    );
};

export default Contact;