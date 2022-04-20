import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kisan-basyal/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kisan977" target="_blank">
        <BsGithub />
      </a>
      <a href="dribble" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
