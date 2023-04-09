import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';
import { Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

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


      <div className="contact-section">

        <p>You can reach me by
          <a title="Write an email" href="#mail-form"> email </a>
          or on one of my social media profiles below:
        </p>
        
        <ul>
          <li>
            <a title="My linkedIn profile" href="https://linkedin.com/in/garry-hasintsilavina"><FaLinkedin className="icon" /></a>
            LinkedIn Profile
          </li>
          <li>
            <a title="My dribbble profile" href="https://dribbble.com/Antsamotady"><FiDribbble className="icon" /></a>
            Dribbble Portfolio
          </li>
          <li>
            <a title="My github profile" href="https://github.com/Antsamotady"><FaGithub className="icon" /></a>
            GitHub Profile
          </li>
          <li>
            <a title="My stackoverflow profile" href="https://stackoverflow.com/users/9532910/antsamotady"><FaStackOverflow className="icon" /></a>
            Stack Overflow Profile
          </li>
        </ul>
        <p>Thank you for your interest in contacting me.</p>
        <p>Please note that I often use the pseudonym <span>Antsamotady</span> on online platforms.</p>

      </div>

      <p className="quater-underlining"></p>

      <div className="contact-section">

        <div className="contact-form">
          <Form onSubmit={handleSubmit} id="mail-form">
            <Form.Group className="mb-3" controlId="name">
              <Form.Control className="rounded-0" type="text" name="from_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control className="rounded-0" type="email" name="reply_to" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Control className="rounded-0" type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
            </Form.Group>

            <Form.Group className="mb-1" controlId="message">
              <Form.Control className="rounded-0" as="textarea" rows={5} name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" required />
            </Form.Group>

            <Button className="btn-block rounded-0 contact-email-btn" type="submit">Send</Button>
          </Form>
        </div>

      </div>

    </div>
  );
}

export default Contact;
