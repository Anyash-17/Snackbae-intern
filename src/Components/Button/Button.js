import React from 'react';
import './Button.css';
const Button = ({ buttonName, handleClick }) => {
  return (
    <input
      type='button'
      value={buttonName}
      className='button-9'
      onClick={() => handleClick && handleClick()}
    />
  );
};

export default Button;
