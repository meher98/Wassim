import react from 'react'
import '../assets/css/DetailedAboutUs.css'
import logobleu from '../assets/images/logobleu.png'

export default function DetailedAboutUs() {
    return (



        <div class="aboutus-container">


            <div class="aboutus-cards-content">

                <div className="about-section">
                    <div className="about about-us">
                        <div className='title'>
                            <h1>Who we are</h1>
                        </div>
                        <div className="about-container">
                            <div
                                className="about-text"
                                data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                Richmond Analytica provides solutions in Big Data and <span className='blue-color'>Artificial Intelligence</span> applied to Financial Markets.
                                We specialize in creating innovative and alternative <span className='blue-color'>fast pricers</span> for complex financial product ( like autocallables ),
                                developping machine learning driven investment algorithms in <span className='blue-color'>crypto</span> universe and creating tailored ML and Big Data solutions
                                for our clients. Our team, based in Paris, New York, London, and Tunis, is mainly made up of engineers and researchers.
                                Major clients (institutional and retail) trust us from all over the world.<br /> Our key skills : Machine Learning,
                                ESG and Quantitative Analysis.

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    )
}