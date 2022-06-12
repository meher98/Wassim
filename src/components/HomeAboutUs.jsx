import React from 'react'
import image from "../assets/images/analytics.png"
import "../assets/css/HomeAboutUs.css"
export default function AboutUs() {
    return (
        <div>
            <div className="AboutUs-Container" >
                <img src={image} alt="" className="analytics-Image" />
                <div className="analytics-Text">
                    <div className="aboutUsContent">
                        <h3 className="AboutUs-Title">ABOUT US</h3>
                        <hr className="AboutUs-line" />
                        <p className="Aboutus-Text">
                            Richmond Analytica provides solutions in Big Data and Artificial Intellegence applied to Financial Markets.
                            We specialize in creating innovative and alternative fast pricers for complex financial product (like autocollables).
                            developping machine learning driven investment algorithms in crypto universe and creating tailored ML and Big Data solutions for our clients.
                            Our team, based in Paris, New York, London and Tunis, is mainly made up of engineers and researchers.
                            Major clients (institutional and retale) trust us from all over the world.
                            Our Key skills : machine learning, ESG and Quantitative Analysis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}