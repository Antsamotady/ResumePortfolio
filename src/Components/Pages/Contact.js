import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

import '../../Stylesheets/contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
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
