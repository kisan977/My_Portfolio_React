import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/project1.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} />
          </div>
          <h3>Ecommerce</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kisan977/pixbay_gallery"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://kisan977.github.io/pixbay_gallery/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>Expense Tracker App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kisan977/Expense_tracker_app"
              className="btn"
            >
              Github
            </a>
            <a
              href=" https://kisan977.github.io/Expense_tracker_app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} />
          </div>
          <h3>Resopnsive-website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kisan977/Resopnsive-website-with-html-css-and-bootstrap"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://kisan977.github.io/Resopnsive-website-with-html-css-and-bootstrap/
"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} />
          </div>
          <h3>Live Search Weather App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kisan977" className="btn">
              Github
            </a>
            <a
              href="https://github.com/kisan977"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} />
          </div>
          <h3>Ecommerce Web Shop App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kisan977/AllPasal_web_shop"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com/kisan977/AllPasal_web_shop"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} />
          </div>
          <h3>Music App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kisan977/music-app" className="btn">
              Github
            </a>
            <a
              href="https://kisan977.github.io/music-app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
