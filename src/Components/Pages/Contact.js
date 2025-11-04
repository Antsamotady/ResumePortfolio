import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';

import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';
import { Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaStackOverflow, FaPhoneAlt } from 'react-icons/fa';

import '../../Stylesheets/contact.css';

dotenv.config();

function Contact() {
  const { t } = useLanguage();

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
      <h2>{t('contactTitle')}</h2>

      <div className="contact-section">
        <p>
          {t('contactIntro')}{' '}
          <a
            title="Email me"
            href="mailto:tsilavinarj02@gmail.com?subject=Interested%20visitor&body=Hi%20Garry!"
          >
            tsilavinarj02@gmail.com
          </a>{' '}
          {t('contactOrCheck')}
        </p>

        <ul>
          <li>
            <a
              title="My LinkedIn profile"
              href="https://linkedin.com/in/garry-hasintsilavina"
            >
              <FaLinkedin className="icon" />
            </a>
            {t('contactLinkedin')}
          </li>
          <li>
            <a
              title="My GitHub profile"
              href="https://github.com/Antsamotady"
            >
              <FaGithub className="icon" />
            </a>
            {t('contactGithub')}
          </li>
          <li>
            <a
              title="My StackOverflow profile"
              href="https://stackoverflow.com/users/9532910/antsamotady"
            >
              <FaStackOverflow className="icon" />
            </a>
            {t('contactStackOverflow')}
          </li>
          <li>
            <a
              title="My StackOverflow profile"
              href="https://stackoverflow.com/users/9532910/antsamotady"
            >
              <FaPhoneAlt className="icon" />
            </a>
            +261 32 83 205 22
          </li>
        </ul>

        <p>{t('contactThanks')}</p>

        <p
          dangerouslySetInnerHTML={{
            __html: t('contactNote').replace(
              '<1>',
              '<span>'
            ).replace('</1>', '</span>')
          }}
        />
      </div>

      <p className="quater-underlining"></p>

      <div className="contact-section api-mailing">

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
