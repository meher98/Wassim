import React from 'react'
import Particles from 'react-particles-js';
import "../assets/css/Header.css"
import { motion } from "framer-motion"
import { ShapeType } from "tsparticles";

export default function Header(props) {
    return (
        <div className="Header">
            <Particles
                className="header-particals"
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
                        "type": ShapeType.circle,
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
            <div className="header-content">
                <motion.div className="header-text"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}>
                    {props.title}
                </motion.div>
            </div>

        </div>
    )
}
