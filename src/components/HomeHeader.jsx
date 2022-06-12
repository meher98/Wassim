import React from 'react'
import img from "../assets/images/homeImage.png"
import { Link } from 'react-router-dom'
import "../assets/css/HomeHeader.css"
import Particles from 'react-particles-js'


export default function HomeHeader(props) {
  return (
    
      <div className="homeContainer">
                
        <div className="homeContent">
        <Particles
          className="particles"

          params={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#0bb4dc"
              },
              "shape": {
                "type": 'circle',
                "stroke": {
                  "width": 10,
                  "color": "#0bb4dc",
                  "opacity": 0.4
                },
                "polygon": {
                  "nb_sides": 6
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.1,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 180,
                "color": "#0283b0",
                "opacity": 0.4,
                "width": 3
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 140,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
          <div className="homeTitle">
            Bringing AI to Crypto Markets
          </div>
          <div className="homeText">
            Richmond Analytica provides solutions in Big Data and Artificial Intelligence applied to Crypto Markets...
          </div>
          <div className="homeButtom">
            <Link className='btn btn-custom btn-lg page-scroll'
              to="/about"
            >Read More</Link>
          </div>
        </div>
        <div className="homeImage">
          <img className='home-header-img' src={img} />
        </div>
      </div>
    
  )
}
