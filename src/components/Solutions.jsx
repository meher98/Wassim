import React from 'react'
import '../assets/css/solutions.css'
import logoexporl from "../assets/images/logoExpoRL.png"
import eqX from "../assets/images/depp eq@1X.png"
import layedphone from "../assets/images/layedphone.png"
export default function Solutions() {
    return (
        <div className="orange">
            <div className="paraimg" >
                <img className="layedphone" src={layedphone} />
            </div>
            <div className='inivisible-container'>
                <img className="exporl" src={logoexporl} />
                <div className="mobile-container">
                    <h3 className="title-container" >AI based crypto-investing</h3>
                    <ul className="list">
                        <div className="left-element">
                            <li />
                            <p className="text">Sophisticated Machine Learning aggregation of statarb signals</p>
                        </div>
                        <div className="left-element">
                            <li />
                            <p className="text">State of the art NLP sentiment analysis</p>
                        </div>
                    </ul>
                </div>
                <img className="exporl" src={eqX} />
                <div className="mobile-container">
                    <h3 className="title-container" >Equity Derivatives fast pricing</h3>
                    <ul className="list">
                        <div className="right-element">
                            <li />
                            <p className="text">Sophisticated Machine Learning aggregation of statarb signals</p>
                        </div>
                        <div className="right-element">
                            <li />
                            <p className="text">State of the art NLP sentiment analysis</p>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="container-expo-rl">
                <div className="container-logo-expo-rl">
                    <img className="exporl" src={logoexporl}/>
                </div>
                <div className="left-container">
                    <h3 className="title-container" >AI based crypto-investing</h3>
                    <ul className="list">
                        <div className="left-element">
                            <li />
                            <p className="text">Sophisticated Machine Learning aggregation of statarb signals</p>
                        </div>
                        <div className="left-element">
                            <li />
                            <p className="text">State of the art NLP sentiment analysis</p>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="darkblue">
                <div className="bottom-container">
                    <h3 className="bottom-title">AI tailored solutions</h3>
                    <p className="bottom-text">we provide you with a tailored AI driven/Big Data solution that will respond to your needs.</p>
                </div>
                <div className="container-eqx-rl">
                    <div className="container-logo-eqx-rl">
                        <img className="exporl" src={eqX} />
                    </div>
                    <div className="right-container">
                        <h3 className="title-container" >Equity Derivatives fast pricing</h3>
                        <ul className="list">
                            <div className="right-element">
                                <li />
                                <p className="text">Sophisticated Machine Learning aggregation of statarb signals</p>
                            </div>
                            <div className="right-element">
                                <li />
                                <p className="text">State of the art NLP sentiment analysis</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
