import React from 'react'
import Link from 'gatsby-link'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaUser from 'react-icons/lib/fa/user'
import FaPhone from 'react-icons/lib/fa/phone'
import FaPaperPlane from 'react-icons/lib/fa/paper-plane'

import '../styles/contact.css'

const ContactPage = () => (
  <div className="contactPage">
    <div className="contact">
      <h1>Get In Touch!</h1>
      <form action="https://formspree.io/nedumrobert@gmail.com" method="POST">
        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label id="emailLabel" htmlFor="_replyto">
            Email Address:
          </label>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              id="email"
              placeholder=" Enter Email"
              name="_replyto"
            />
          </div>
        </div>
        <div className="form-group">
          <label id="phoneLabel" htmlFor="telephone">
            Phone No:
          </label>
          <div className="input-group">
            <FaPhone className="icon" />
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder=" Enter Your Phone No."
            />
          </div>
        </div>
        <div className="form-group">
          <label id="messageLabel" htmlFor="description">
            Message:
          </label>
          <div className="input-group">
            <textarea
              id="description"
              name="description"
              placeholder="Enter Your Message"
              rows="6"
              cols="27"
            />
          </div>
        </div>
        <div>
          <FaPaperPlane className="icon" />
          <button type="submit" value="send">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
)

export default ContactPage
