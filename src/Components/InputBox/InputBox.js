import React from 'react';
import './InputBox.css';

const InputBox = (props) => {
  const { id, value, type, label, placeholder, onChange, required } = props;

  return (
    <div className='InputBox' id={`InputBox__${id}`}>
      <label htmlFor={id} className='InputBox-label'>
        {label}
      </label>
      <input
        className='InputBox-input'
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

InputBox.defaultProps = {
  placeholder: ' ',
};

export default InputBox;
