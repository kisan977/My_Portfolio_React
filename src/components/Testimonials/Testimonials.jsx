import React from "react";
import "./Testimonials.css";
import img1 from "../../assets/avatar1.jpg";
import img2 from "../../assets/avatar2.jpg";
import img3 from "../../assets/avatar3.jpg";
import img4 from "../../assets/avatar4.jpg";
import img5 from "../../assets/avatar5.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container "
      >
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={img1} alt="clents" />
            </div>
            <h5 className="client__name">Darsan Sharma</h5>
            <small className="client__review">
              Not only was Kisan’s work on-time and to spec, he pays attention
              to improve the aesthetics of the site as well as the
              functionality. Throughout the entire process he is responsive, and
              willing to work through issues as they arise.
            </small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={img2} alt="clents" />
            </div>
            <h5 className="client__name">Suman Kunwar</h5>
            <small className="client__review">
              Working with kisan was better than expected and we had really high
              expectations. He is an incredibly talented developer but what
              really makes him stand out is his work ethic and steady approach.
            </small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={img3} alt="clents" />
            </div>
            <h5 className="client__name">Bhim Bhattarai</h5>
            <small className="client__review">
              We have the fortune of working with Kisan on a very regular basis.
              Every single project is done in a timely fashion and is delivered
              exactly as is outlined.
            </small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={img4} alt="clents" />
            </div>
            <h5 className="client__name">Ranjan Lamichanne</h5>
            <small className="client__review">
              Kisan has crafted a beautiful work that is as practical as it is
              inspirational. With CSS3 Foundations, Kisan has taken what is
              often a confusing subject and made it not only accessible to
              beginners
            </small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={img5} alt="clents" />
            </div>
            <h5 className="client__name">Srishti Gywali</h5>
            <small className="client__review">
              Kisan has done a fantastic job overall. Not only the site is to
              design, the code is very clean and slick.
            </small>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
