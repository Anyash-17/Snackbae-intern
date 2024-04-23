import React from 'react';
import InputBox from '../InputBox/InputBox';
import './BusinessInfoForm.css';

const BusinessInfoForm = () => {
  return (
    <div className="BusinessInfoForm">
      <InputBox
        label="Brand name"
        id="Brand name"
        type="text"
        placeholder="Foodoos"
      />
      <InputBox
        label="Email Address"
        id="Brand name"
        type="text"
        placeholder="Connect@foodoos.in"
      />
      <InputBox
        label="Contact Number"
        id="Brand name"
        type="text"
        placeholder="123-098-345-09"
      />
      <InputBox
        label="Contact Person"
        id="Brand name"
        type="text"
        placeholder="Sangit Saha  "
      />
      <InputBox
        label="Outlet Address"
        id="Brand name"
        type="text"
        placeholder="AG Block, Salt Lake Sector 2"
      />
      <InputBox
        label="Business Type"
        id="Brand name"
        type="text"
        placeholder="Restaurant"
      />
      <InputBox
        label="Cuisines Seerved"
        id="Brand name"
        type="text"
        placeholder="Dropdown Menu"
      />

      <InputBox
        label="Instagram Link"
        id="Brand name"
        type="text"
        placeholder="instagram.com/chowman12"
      />
    </div>
  );
};

export default BusinessInfoForm;
