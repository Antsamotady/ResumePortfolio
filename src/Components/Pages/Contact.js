import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';
import { Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

import '../../Stylesheets/contact.css';

dotenv.config();

function Contact() {

  const serviceID = process.env.REACT_APP_SERVICEID;
  const templateID = process.env.REACT_APP_TEMPLATEID;
  const userID = process.env.REACT_APP_USERID;
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(
      serviceID,
      templateID,
      event.target,
      userID
    )
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <div className="contact-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="subject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </Form.Group>

          <Button className="contact-email-btn" type="submit">Send</Button>
        </Form>
      </div>


      <p>Thank you for your interest in contacting me. You can reach me by email or on one of my social media profiles below:</p>
      <ul>
        <li>
          <a href="mailto:tsilavinarj02@gmail.com?subject=Interested%20visitor&body=Hi%20Garry!">
            <FaEnvelope className="icon" /> tsilavinarj02@gmail.com
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/garry-hasintsilavina">
            <FaLinkedin className="icon" /> LinkedIn Profile
          </a>
        </li>
        <li>
          <a href="https://github.com/Antsamotady">
            <FaGithub className="icon" /> GitHub Profile
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/9532910/antsamotady">
            <FaStackOverflow className="icon" /> Stack Overflow Profile
          </a>
        </li>
      </ul>
      <p>Please note that I often use the pseudonym <span>Antsamotady</span> on online platforms.</p>
    </div>
  );
}

export default Contact;
