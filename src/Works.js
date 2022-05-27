import React from 'react';
import PropTypes from 'prop-types';
import JbHunt from './assets/jbhunt.png';
import Walmart from './assets/walmart-supercentre.jpeg';
import Oneportal from './assets/ONE-PORTAL.png';
// import JbHunt from './assets/jbhunt.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
  return (
    <>
      <section id="works" style={{ 'height': '100vh' }} className="" >
        <h1>CHECK OUT SOME OF MY WORKS</h1>
        <div id="portfolio-container">
          
          {/* JB Hunt */}
          <div className="imageHolder" id="imageFirstOverlay" >
            <a href="https://www.jbhunt.com/" title="JB Hunt Supply chain management" target="_blank" >
              <img alt="JB Hunt Supply chain management" src={JbHunt} style={{ width: '100%', height: 'auto' }} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5> JB Hunt Supply chain management </h5>
                  <p></p>
                </div>
              </div>
              <div className="link-icon">
                <FontAwesomeIcon icon="fa-solid fa-circle-down" size="2xl" beat className='fa-custom-icon' />
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" size="2xl" style={{color: "#fff"}} /> */}
              </div>
            </a>
          </div>

          {/* <div className="imageHolder" > <img src={Walmart} alt='Wallmart' style={{ width: '100%', height: 'auto' }} /> </div> */}

          <div className="imageHolder" id="imageSecondOverlay" >
            <a href="https://www.walmart.com/" title="Walmart scheduler" target="_blank" >
              <img alt="Walmart scheduler" src={Walmart} style={{ width: '100%', height: 'auto' }} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5> Walmart scheduler </h5>
                  <p></p>
                </div>
              </div>
              <div className="link-icon">
                <FontAwesomeIcon icon="fa-solid fa-circle-down" size="2xl" beat className='fa-custom-icon' />
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" size="2xl" style={{color: "#fff"}} /> */}
              </div>
            </a>
          </div>
          
          <div className="imageHolder" id="imageThirdOverlay" >
            <a href="https://one-portal.apps.cloud.comcast.net/#/" title="One Portal" target="_blank" >
              <img alt="One Portal" src={Oneportal} style={{ width: '100%', height: 'auto' }} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5> One Portal </h5>
                  <p></p>
                </div>
              </div>
              <div className="link-icon">
                <FontAwesomeIcon icon="fa-solid fa-circle-down" size="2xl" beat className='fa-custom-icon' />
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" size="2xl" style={{color: "#fff"}} /> */}
              </div>
            </a>
          </div>

          {/* <div className="imageHolder" > <img src={Oneportal} alt='One Portal' style={{ width: '100%', height: 'auto' }} /> </div> */}

        </div>
      </section>
    </>
  )
}

Works.propTypes = {};

Works.defaultProps = {};

export default Works;
