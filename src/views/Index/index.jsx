import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
//style sheet
import './index.scss'
//pic
import Logo from '../../assets/main_logo.png'

export default function Index(props) {
    const mainLogo = useRef();
    const indexNav = useRef();

    useEffect(() => {
        setTimeout(() => {
            mainLogo.current.classList.remove('hide');
        }, 300);
        
        setTimeout(() => {
            indexNav.current.classList.remove('hide');
        }, 1000)
    }, [])

    return (
        <div className="Index">
            <div className="index-background"></div>
            <img ref={mainLogo} className="main-logo hide" src={Logo} alt="main logo" />
            <div ref={indexNav} className="index-nav-wrap row g-0 hide">
                <div className="index-nav row g-0">
                    <div className="col-6 d-flex justify-content-start align-items-center">
                        <NavLink to="/main_intro">賽事介紹</NavLink>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <NavLink to="/categories">賽事組別</NavLink>
                    </div>
                    <div className="col-6 d-flex justify-content-start align-items-center">
                        <NavLink to="/media">賽事花絮</NavLink>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <NavLink to="/contact">聯絡我們</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
