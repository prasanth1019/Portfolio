import React from 'react';
import "./FontawesomeIcons";
// import logo from './logo.svg';
import ReactPlayer from 'react-player'
import './App.css';
import ScrollToTop from './ScrollToTop.js';
import Dashboard from './Dashboard';
import Header from './header';
import Aboutus from './Aboutus';
import Resume from "./Resume";
import Works from './Works';
import Testimonials from './Testimonials';
import Contact from './Contact';
import MotionVideo from './assets/moving_bg_video.mp4';

function App() {
  
  React.useEffect( () => {
    // document.addEventListener('scroll', () => {
    window.addEventListener('scroll', function(e) {
        // console.log(window.screenX, 'X - scroll Y -', window.screenY);
    },{ passive: true });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <div className='page-section-bg'>
        <video autoPlay loop muted >
          <source src={MotionVideo} />
       </video>
      </div>
      <Header />
      <Dashboard />
      <Aboutus />
      <Resume />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
