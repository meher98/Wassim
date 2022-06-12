import React from 'react'
import '../assets/css/OurTechnologies.css'
import blockchain from '../assets/images/Blockchain.png'
import bigdata from '../assets/images/Big Data.png'
import machine from '../assets/images/1.png'
import dots_blanc from '../assets/images/Dots_blanc.png'
import dots_blanc_copie from '../assets/images/Dots_blanc_copie2.jpg'
export default function OurTechnologies() {
	return (
		<div className="techpage">
			<div className="technologies-container">

				<div className='ourtechnologies'>
					<h1>
						OUR TECHNOLOGIES
					</h1>
				</div>
				<div className="technologie">
					<div className='cercle'>
						<img className="techimage" src={machine} alt='machine learning' />

					</div>
					<div className="shaped-rectangle">
						<h1 className="technologie-title"> Machine Learning </h1>
						<p className="technologie-detail">First class machine learning researches</p>
					</div>


				</div>
				<div className="technologie">
					<div className='cercle'>
						<img className="techimage" src={bigdata} alt='machine learning' />
					</div>
					<div className="shaped-rectangle">
						<h1 className="technologie-title"> Big Data </h1>
						<p className="technologie-detail">Big Data expertise</p>
					</div>


				</div>
				<div className="technologie">
					<div className='cercle'>
						<img className="techimage" src={blockchain} alt='machine learning' />
					</div>
					<div className="shaped-rectangle">
						<h1 className="technologie-title"> Blockchain </h1>
						<p className="technologie-detail">Blockchain driven technology</p>
					</div>


				</div>
			</div>
			<img className="dots_blanc" src={dots_blanc} alt="dots_blanc" />
			<img className="dots_blanc_copie" src={dots_blanc_copie} alt="dots_blanc" />
		</div>

	)
}