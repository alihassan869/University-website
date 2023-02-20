import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const instragram = <FontAwesomeIcon icon={faInstagram} />;
const FaTwitter = <FontAwesomeIcon icon={faTwitter} />;
const FaYoutube = <FontAwesomeIcon icon={faYoutube} />;
function Footer() {
  return (
    <>
      <footer className="Footer-card text-center py-5">
        <b>About Us</b>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit
          totam, quibusdam sed dolore illum fugit inventore temporibus debitis
          incidunt.
        </p>
        <div className="link-icons">
          <a href="https://www.facebook.com/">{facebook}</a>
          <a href="https://www.instagram.com/"> {instragram}</a>
          <a href="https://www.youtube.com/"> {FaYoutube}</a>
          <a href="https://twitter.com/i/flow/login "> {FaTwitter}</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
