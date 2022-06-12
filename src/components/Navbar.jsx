import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/images/logoblanc.png"
import logo2 from "../assets/images/logobleu.png"
import "../assets/css/navbar.css"
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import profile from "../assets/images/profile.png"
import profile2 from "../assets/images/profile2.png"
import Chiffre from './Chiffre'

export default function Navbar() {
    const [moved, setMoved] = useState(false)
    const [click, setClick] = React.useState(false);
    const [charger, setCharger] = useState(false)
    const handleCharger = (val)=>{
        setCharger(val)
    }
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 0) {
            setMoved(true)
        }
        else {
            setMoved(false)
        }
    })
    return (
        <>
            <Chiffre charger={()=>handleCharger()}/>
            <div style={{marginTop:charger? '65px':''}} className={moved ? 'navbar-container' : 'navbar-container-transparent'}>
                <div className={!click ? '' : moved ? "main-container" : "main-container move"} onClick={() => Close()} />
                <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink exact to="/" className="nav-logo">
                            <img src={moved || (click && window.innerWidth < 560) ? logo : logo2} className="logo" />
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className={moved ? 'navigation-item' : 'navigation-item-moved'}>
                                <Link
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className={!moved ? 'link' : 'link-moved'}
                                    onClick={click ? handleClick : null}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={moved ? 'navigation-item' : 'navigation-item-moved'}>
                                <Link
                                    exact
                                    to="/about"
                                    activeClassName="active"
                                    className={!moved ? 'link' : 'link-moved'}
                                    onClick={click ? handleClick : null}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className={moved ? 'navigation-item' : 'navigation-item-moved'}>
                                <NavLink
                                    exact
                                    to="/security"
                                    activeClassName="active"
                                    className={!moved ? 'link' : 'link-moved'}
                                    onClick={click ? handleClick : null}
                                >
                                    Security
                                </NavLink>
                            </li>
                            <li className={moved ? 'navigation-item' : 'navigation-item-moved'}>
                                <NavLink
                                    exact
                                    to="/signup"
                                    activeClassName="active"
                                    className={!moved ? 'link' : 'link-moved'}
                                    onClick={click ? handleClick : null}
                                    className='btn btn-register btn-lg page-scroll'
                                >
                                    Sign Up
                                </NavLink>
                            </li>
                            <li className={moved ? 'navigation-item' : 'navigation-item-moved'}>
                                <NavLink
                                    exact
                                    to="/login"
                                    activeClassName="active"
                                    onClick={click ? handleClick : null}
                                >
                                    <img src={moved || click ? profile2 : profile} className="profileIcon" />
                                </NavLink>
                            </li>
                        </ul>
                        <div className={click ? "nav-icon-moved" : !moved ? "nav-icon" : "nav-icon-moved"} onClick={handleClick}>
                            {click ? <HighlightOffIcon /> : <MenuTwoToneIcon />}
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

