import React from 'react';
import InputBox from '../InputBox/InputBox';
import './PayoutForm.css';

const PayoutForm = () => {
  return (
    <div className="">
      <input type="radio" id="Brand" name="payment" value="" />
      <span className="bank_transfer">Bank Transfer </span>
      <label for="Bank Transfer" className="PayoutForm">
        <InputBox
          width="34px"
          label="Account Number"
          id="Brand name"
          type="text"
          placeholder="Type Here"
        />
        <InputBox
          label="IFSC Code"
          id="Brand name"
          type="text"
          placeholder="Type Here"
        />
        <InputBox
          label="Benificeiry Name"
          id="Brand name"
          type="text"
          placeholder="Type Here"
        />
      </label>
      <hr />
      <input type="radio" id="Brand" name="payment" value="" />
      <span className="bank_transfer"> Bhim UPI</span>
      <label for="BHIM UPI" className="PayoutForm">
        <InputBox
          label="UPI ID"
          id="Brand name"
          type="text"
          placeholder="Type Here"
        />
        <InputBox
          label="UPI Number"
          id="Brand name"
          type="text"
          placeholder="Type Here"
        />
      </label>
    </div>
  );
};

export default PayoutForm;
