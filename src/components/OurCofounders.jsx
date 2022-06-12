import react from 'react'
import '../assets/css/OurCofounders.css'
import logo from "../assets/images/logoblanc.png"
import john from '../assets/images/john.png'
import Linkedin from '../assets/images/Linkedin.png'
import { Link, useHistory } from 'react-router-dom'

export default function OurCofounders() {
    const history = useHistory()
    return (
        <div className="Ourcofounders-container">
            <div className="ourcofounders">
                <h1 className="ourcofounders-title"> OUR CO-FOUNDERS </h1>
                <hr className="ourcofounders-line" />
            </div>
            <div className="cofounders-presentation">
                <p className="confounders-text">
                    Richmond Analytica was founded by talented people, two former promotion mates at Paris Dauphine and ENS. They had the idea of ​​cofoundin Richmond Analytica to bring hedge fund and investment bank expertise in crypto markets so as to make these markets efficient and profitable for retail after the big banks and investment firms have come into force in this market. As a result, Richmond Analytica exists in order to create a certain balance in the crypto markets by offering investment companies.
                </p>
            </div>
            <div className="cofounders-images">
               <a href='https://www.linkedin.com/company/richmond-analytica/' target="_blank" ><img  src={logo} className="cofounderLogo" /> </a>  
            </div>
        </div>
    )
}