import react from 'react'
import '../assets/css/Ourservices.css'
import img1 from '../assets/images/c1.png'
import img2 from '../assets/images/c2.png'
import img3 from '../assets/images/c3.png'
export default function Ourservices() {
    return (
        <>
            <div className='title'>
                <h1>
                    Our Services
                </h1>
            </div>
            <div className='service-container'>
                <div className='service-img-container'>
                    <img src={img1} />
                </div>
                <div className='service-text-container'>
                    <h2 className='service-title'>ExpoRL</h2>
                    <h5 className='service-text'>
                        is a crypto trading bot that represents the complete toolbox of the modern-day investo. ExpoRL was designed by our Machine Learning research team. Aggregating stat-arb strategies and NLP indicators, ExpoRL is aiming to over perform markets in bullish regimes while decreasing the drawdowns .
                        It is the right product for people who want to start or improve in investing in crypto currencies.
                    </h5>
                </div>
            </div>
            <div className='service-container'>
                <div className='service-text-container'>
                    <h2 className='service-title'><a target='_blank' href='https://drive.google.com/file/d/1aeZ5EDhnEx1GsgomXcMbdzKc0qwyDAQr/view?usp=sharing'>Fast pricing derivatives</a></h2>
                    <h5 className='service-text'>
                        The objective of this solution is to introduce
                        new pricing methods other than Monte Carlo
                        methods to speed up the computation time of
                        some products called exotic products. o=Our solution have already
                        shown (within top tier investmen that it can reduce computation time from
                        371 days to 2.11 seconds keeping a very
                        accurate precision.
                        Hence, our pricer is based a new deep learning model for non linear interpolation and can work with mono-underlyings as well as multi-underlying options
                    </h5>
                </div>
                <div className='service-img-container'>
                    <img src={img2} />
                </div>
            </div>
            <div className='service-container bottom'>
                <div className='service-img-container'>
                    <img src={img3} />
                </div>
                <div className='service-text-container'>
                    <h2 className='service-title'>AI-tail</h2>
                    <h5 className='service-text'>
                        Our team is a synergy of individuals with expertise in maths, data science, quant trading and finances working together with one collective mind. We will start by establishing an appointment to define your needs and provide you with a tailored AI driven/Big Data solution that will respond to your needs.
                    </h5>
                </div>
            </div>
        </>
    )
}