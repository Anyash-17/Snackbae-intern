import React from 'react';
import './Sidebar.css';
import logo from '../../Assets/logo.png';

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="Sidebar_elm">
        {props.images.map((image, index) => (
          <div className="sidebar_content" key={index}>
            <img src={image.src} alt={`Image ${index + 1}`} />
            <p className="sidebar_content_text">{image.text}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
