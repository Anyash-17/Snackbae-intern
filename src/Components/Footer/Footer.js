import React from 'react';
import './Footer.css';
import customerlogo from '../../Assets/Customer feedback.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_logo">
        <img src={customerlogo} alt="logo" />
      </div>
      <div className="Footer_elm">
        <p className="footer_content">
          Help Us to make Snackbae better ! Share your feedbacks and request
          features that fits best for your Business
        </p>

        <a className=" links" href="/">
          Give feedbacks
        </a>
      </div>
    </div>
  );
};

export default Footer;
