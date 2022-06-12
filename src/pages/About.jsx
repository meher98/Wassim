import react from 'react'
import HomeAboutUs from '../components/HomeAboutUs'
import Navbar from '../components/Navbar'
import '../assets/css/About.css'
import OurCofounders from '../components/OurCofounders'
import Footer from '../components/Footer'
import OfficialPartners from '../components/OfficialPartners'


export default function About() {
    return(
        <>
        <Navbar/>
        <HomeAboutUs/>
        <OurCofounders/>
        <OfficialPartners/>
        <Footer/>
        </>
        )
}