import React from 'react';
import '../assets/css/Actualities.css';
import newspaper from '../assets/images/mrkty.png';
import image1 from '../assets/images/news1.jpg';
import image2 from '../assets/images/news2.jpg';
import image3 from '../assets/images/news3.jpg';
import image4 from '../assets/images/news4.jpg';

export default function Actual() {
  return (
    <div className="actual_container">
      <div className="lining"></div>
      <div className="news-icon">
        <img className="imgg" src={newspaper} />
      </div>

      <div className="slider_container">

        <div id="slider">
          <div class="slides">
            <div class="slider">
              <div class="legend"></div>
              <div class="content">
                <div class="content-txt">
                  <h2>Check out our crypto markets news of the day!
                    Crypto is entering bullish regime
                    Billionaire and crypto influencer ElonMusk associate is on the board of Dogecoin
                    And more on our Cryptonews of the day ...</h2>
                </div>
              </div>
              <div class="image">
                <img src={image1} />
              </div>
            </div>
            <div class="slider">
              <div class="legend"></div>
              <div class="content">
                <div class="content-txt">
                  <h2>Head of Tesla and SpaceX, Dogecoin fan and the asset’s most influential supporter, ElonMusk, has taken to Twitter to support the call from a Dogecoin-related Twitter account to spread the new Doge upgrade to as many computers as possible.</h2>
                </div>
              </div>
              <div class="image">
                <img src={image3} />
              </div>
            </div>
            <div class="slider">
              <div class="legend"></div>
              <div class="content">
                <div class="content-txt">
                  <h2>PayPal’s crypto feature lets customers buy or sell bitcoin, bitcoin cash, ethereum or litecoin with as little as £1. Users can also track crypto prices in real-time, and find educational content on the market.</h2>
                </div>
              </div>
              <div class="image">
                <img src={image4} />
              </div>
            </div>
            <div class="slider">
              <div class="legend"></div>
              <div class="content">
                <div class="content-txt">
                  <h2>Head of Tesla and SpaceX, Dogecoin fan and the asset’s most influential supporter, ElonMusk, has taken to Twitter to support the call from a Dogecoin-related Twitter account to spread the new Doge upgrade to as many computers as possible.</h2>
                </div>
              </div>
              <div class="image">
                <img src={image3} />
              </div>
            </div>
          </div>
          <div class="switch">
            <ul>
              <li>
                <div class="on"></div>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="news">NEWS</div>
      </div>
    </div>

  )
}