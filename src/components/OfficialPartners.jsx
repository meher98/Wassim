import React from 'react'
import '../assets/css/OfficialPartners.css'
import binance from '../assets/images/binance_broker.png'

export default function OfficialPartners() {
    return(
        <div className="officialpartners-container">
            <h1 className="partner-title">OFFICIAL PARTNERS</h1>
            <hr className="partner-title-line" />
            <div className='binance-logo-container'>
                <img src={binance} alt="binance-logo" className="binance-logo" />
            </div>
         </div>
    )
}