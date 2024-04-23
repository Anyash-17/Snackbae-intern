import React, { useState } from 'react';
import Button from '../Button/Button';
import './MainContent.css';
import BusinessInfoForm from '../BusinessInfoForm/BusinessInfoForm';
import Footer from '../Footer/Footer';
import Brandlogo from '../../Assets/brandlogo.png';
import PayoutForm from '../PayoutForm/PayoutForm';

const MainContent = () => {
  const [isPayout, setIsPayout] = useState(false);

  const handleBusinessClick = () => {
    setIsPayout(false);
  };
  const handlePayoutClick = () => {
    setIsPayout(true);
  };

  return (
    <div className='s-9'>
      <div className='main_content'>
        <div className='main_content_button'>
          <div className='b-4'>
            <Button
              buttonName='Business Info'
              handleClick={handleBusinessClick}
            />
            <Button
              buttonName='Payout Details'
              handleClick={handlePayoutClick}
            />
          </div>
        </div>
        <hr />
        {!isPayout ? (
          <>
            <div>
              <div className='brandlogo'>Brand Logo</div>
              <div>
                <div className='mid_section'>
                  <img src={Brandlogo} alt='logo' width='80' height='80' />
                  <Button buttonName='Change' />
                  <Button buttonName='Delete' />
                </div>
              </div>
            </div>

            <BusinessInfoForm />
          </>
        ) : (
          <>
            <PayoutForm />
          </>
        )}

        <Button buttonName='Save Changes' />
        <Footer />
      </div>
    </div>
  );
};

export default MainContent;
