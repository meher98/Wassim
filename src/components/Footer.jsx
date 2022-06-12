import react from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'
import logoblanc from '../assets/images/logoblanc.png'
import Fb from '../assets/images/Facebook.png'
import Insta from '../assets/images/Instagram.png'
import LinkedIn from '../assets/images/Linkedin.png'
import Youtube from '../assets/images/Youtube.png'
import phone from '../assets/images/phone.png'
import mail from '../assets/images/mail.png'
import location from '../assets/images/location.png'

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={logoblanc} />
            </div>
            <div className="footer-col">
                <h3>EXPLORE</h3>
                <Link to='/' className='link'> <p>Home</p> </Link>
                <Link to='/about' className='link'><p>About Us</p></Link>
                <Link to='/technologies' className='link'> <p>Our Technologies</p> </Link>
                <Link to='/register' className='link'> <p>Register</p> </Link>
            </div>
            <div className="footer-col">
              
                <h3>Contact Us</h3>
                <div className="logo-info">
                <img src={phone} alt="phone" className="contact-logo" />
                <p>+44 113 328 1274 </p>
                </div>
                <div className="logo-info">
                <img src={mail} alt="mail" className="contact-logo" />
                <p>contact@richmondanalytica.com</p>
                </div>
                <h3>Visit Us</h3>
                <div className="logo-info" >
                <img src={location} alt='location' className="contact-logo" />
                <p>46 Lower Richmond Road
                    Unit 18, London
                    SW14 7EX
                </p>
            </div>
            </div>
            <div className="footer-col">
                <h3>Follow Us</h3>
                <div className="social-media">
                <a href='https://www.instagram.com/richmondanalytica/' target='_blank' className='link'> <img src={Insta} alt='Instagram'  className='socialmedia-logo'/> </a>
                <a href='https://www.facebook.com/richmondanalytica' target='_blank' className='link'> <img src={Fb} alt='facebook' className='socialmedia-logo'/> </a>
                <a href='https://www.linkedin.com/company/richmond-analytica/' target='_blank' className='link'> <img src={LinkedIn} alt='Linkedin' className='socialmedia-logo'/> </a>
                <a href='' target='_blank' className='link'> <img src={Youtube} alt='Youtube' className='socialmedia-logo'/> </a>
                </div>
            </div>
        </div>
    )
}