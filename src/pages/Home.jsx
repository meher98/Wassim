import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeAboutUs from '../components/HomeAboutUs'
import OurTechnologies from '../components/OurTechnologies'
import Solutions from '../components/Solutions'
import Footer from '../components/Footer'
import News from '../components/news'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className='homeHeader'>
                <HomeHeader/>
                <Solutions/>
            </div>
            <OurTechnologies/>
            <News/>
            <Footer/>
        </> 
    )
}
