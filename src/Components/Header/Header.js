import React from 'react';
import './Header.css';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className="header">
      <div className="header_elm">
        <p className="setting">Settings</p>
        <span>Manage your acount setting</span>
      </div>
    </div>
  );
};

export default Header;
