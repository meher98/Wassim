import {React , Component} from 'react';
import '../assets/css/news.css';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import uuid from "react-uuid";
import i1 from '../assets/images/i1.png'
import i2 from '../assets/images/i2.png'
import i3 from '../assets/images/i3.png'

export default class App extends Component {

  slides = [
    {
      key: uuid(),
      content: (
        <div class="newsSlide">
        <img
          src={i1}
          alt="1"
  
        />
        <div class="greyBlock">
        <div class="newsText"> Head of Tesla and SpaceX, Dogecoin fan and the asset’s most influential supporter, ElonMusk, has taken to Twitter to support the call from a Dogecoin-related Twitter account to spread the new Doge upgrade to as many computers as possible. </div>
        </div>
        </div>
      )
    },
    {
      key: uuid(),
      content: (
        <div class="newsSlide">
        <img
          src={i2}
          alt="2"
        

        />
        <div class="greyBlock">
        <div class="newsText">Check out our crypto markets news of the day! Crypto is entering bullish regime Billionaire and crypto influencer ElonMusk associate is on the board of Dogecoin And more on our Cryptonews of the day  </div>
        </div>
        </div>
      
      )
    },
    {
      key: uuid(),
      content: (
        <div class="newsSlide">
        <img
          src={i3}
          alt="3"
      

        />
        <div class="greyBlock">
        <div class="newsText"> PayPal’s crypto feature lets customers buy or sell bitcoin, bitcoin cash, ethereum or litecoin with as little as £1. Users can also track crypto prices in real-time, and find educational content on the market.</div>
        </div>
       
        </div>
      )
    },
   
   
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    autoplay: true,
    autoplaySpeed: 2000
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div className="newsContainer" >
        	<div className='news-title'>
					<h1>
						News
					</h1>
				</div>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
          autoPlay
          interval={this.state.autoplaySpeed}
          infiniteLoop={true}
          dynamicHeight={true}
          ref={(slider) => (this.slider = slider)}
          {...settings}
          
        ></Carousel>
      </div>
    );
  }
}

 