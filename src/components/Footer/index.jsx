import React from 'react'
import './index.scss'

export default function Footer() {
    return (
        <div className="footer border-top border-light border-3">
            <div className="container-xxl mx-auto">
                <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-md-3">
                        <div className="footer-logo mx-auto"></div>
                    </div>
                    <div className="col-12 col-md-4">
                        <ul className="footer-info list-unstyled ms-auto text-light">
                            <li className="social-media row g-0">
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/HualienWarrior" className="social-link d-block text-light fs-2">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=813tmjvg" className="social-link d-block text-light fs-2">
                                    <i className="bi bi-line"></i>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/HualienMMA" className="social-link d-block text-light fs-2">
                                    <i className="bi bi-chat-text-fill mx-auto"></i>
                                </a>
                            </li>
                            <li className="text-anton">
                                <i className="bi bi-telephone-fill"></i>03-8338008
                            </li>
                            <li>
                                <i className="bi bi-geo-alt-fill">花蓮縣花蓮市三民街<span className="text-anton">41</span>號</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
