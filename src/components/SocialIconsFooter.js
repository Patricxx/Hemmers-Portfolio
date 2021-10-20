import React from "react";
import styled from "styled-components";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const SocialIconsFooter = () => {
  return (
    <Social>
      <div className="iconcontainer">
        <a
          className="same"
          href="https://www.linkedin.com/in/patrick-hemmers/"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
      <div className="iconcontainer">
        <a
          className="same"
          href="https://github.com/Patricxx"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaGithub className="icon" />
        </a>
      </div>
      <div className="iconcontainer">
        <a
          className="same"
          href="https://www.facebook.com/Patrick.Alexander.Hemmers"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaFacebook className="icon" />
        </a>
      </div>
      <div className="iconcontainer">
        <a
          className="same"
          href="https://www.instagram.com/patrick_alexander_hemmers/"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="iconcontainer">
        <a
          className="same"
          href="https://twitter.com/PatrickHemmers"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaTwitter className="icon" />
        </a>
      </div>
      <div className="iconcontainer">
        <a
          className="same"
          href="https://www.youtube.com/channel/UCKw19RSPuqdOqsAH8SIZ9JQ"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaYoutube className="icon" />
        </a>
      </div>
      <div className="iconcontainer">
        <a
          className="same"
          href="https://nl.pinterest.com/pahemmers"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaPinterest size="1.5rem" className="icon" />
        </a>
      </div>
      <div className="iconcontainer">
        <a
          className="same"
          href="mailto:p.a.hemmers@me.com"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaEnvelope className="icon" />
        </a>
      </div>
    </Social>
  );
};

const Social = styled.div`
  opacity: 0.5;
  .icon {
    font-size: 1.5rem;
  }
  a {
    transition: color 0.5s;
    color: #fff;
    &:hover {
      color: #ed6a5a;
    }
    &:focus {
      color: #ed6a5a;
    }
  }

  @media (max-width: 40rem) {
    max-width: 20rem;
  }

  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 40rem) {
    gap: 0.5rem;
  }

  gap: 1.5rem;
`;

export default SocialIconsFooter;
