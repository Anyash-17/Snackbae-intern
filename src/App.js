import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import logout from './Assets/logout.png';
import setting from './Assets/settings.png';
import user from './Assets/user.png';
import menu from './Assets/Vector (1).png';
import payment from './Assets/Vector (2).png';
import offerevents from './Assets/Vector (3).png';
import dashboard from './Assets/Vector.png';
import MainContent from './Components/MainContent/MainContent';
import Header from './Components/Header/Header';

const images = [
  { src: dashboard, text: 'Dashboard' },
  { src: menu, text: ' Menu' },
  { src: payment, text: 'Payment' },
  { src: offerevents, text: 'Offers & Events' },
  { src: user, text: 'Customers' },
];

function App() {
  return (
    <div className='main_page'>
      <div className='left_elm'>
        <div>
          <Sidebar images={images} />
        </div>
        <div className='sidebar_bottom'>
          <div className='flex-2'>
            <img src={setting} alt='imagesss' />
            <p className='sidebar_content_text'>setting</p>
          </div>
          <div className='flex-2'>
            <img src={logout} alt='imagesss' />
            <p className='sidebar_content_text'>Logout</p>
          </div>
        </div>
      </div>
      <div className='right_elm'>
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
