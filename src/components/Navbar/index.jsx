import React, {useRef} from 'react'
import './index.scss'
import Logo from '../../assets/main_logo.png'

export default function Navbar() {
    const arsmaNav = useRef();

    const detectCollapse = () => {
        arsmaNav.current.classList.toggle('nav-bg')
    }

    return (
        <nav ref={arsmaNav} className="arsma-nav navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <div className="brand-wrap">
                        <img className="navbar-logo" src={Logo} alt="main logo" />
                    </div>
                </a>
                <button onClick={detectCollapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarList" aria-controls="navbarList" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarList">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/main_intro">賽事介紹</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/categories">賽事組別</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/media">賽事花絮</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">聯絡我們</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
