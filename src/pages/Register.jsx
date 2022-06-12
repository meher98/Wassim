import React  from 'react';
import RegisterForm from '../components/RegisterForm';
import '../assets/css/Registerpage.css'
import Footer from '../components/Footer';
export default function Register() {
    return(
        <div className='registerpage'>
        <RegisterForm/>
        <Footer/>
        </div>
    )
}