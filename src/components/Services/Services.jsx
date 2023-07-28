import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX DESIGN</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />

              <p>Gather and evaluate user requirements</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Illustrate design ideas using storyboards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Build page navigation buttons.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Create original graphic designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>troubleshoot UX problems</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>WEB/APP DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />

              <p>Website and software application designing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Directing or performing Website updates</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Editing, writing, or designing Website content</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Evaluating code to ensure it meets industry standards.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Determining user needs by analyzing technical requirements.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>GRAPHICS DESIGN</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />

              <p>Taking up infographic story boards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Bringing those sketches or wireframes to life</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Visualising data in innovative ways</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Designing your own artistic and content creation workflow</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />

              <p>Brainstorming new ideas and concepts with writers</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
