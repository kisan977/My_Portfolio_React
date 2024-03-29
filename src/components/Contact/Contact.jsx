import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ksnbasyal@gmail.com</h5>
            <a
              href="mailto:ksnbasyal@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>KisanBasyal</h5>
            <a target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsUp</h4>
            <h5>9841425656</h5>
            <a target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="your Full Name"
            required
          />
          <input type="email" name="email" placeholder="your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
