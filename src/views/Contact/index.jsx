import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './index.scss'

import HMMAA from '../../assets/HMMAA.png';
import hualienWarrior from '../../assets/main_logo.png'
import QR from '../../assets/QR.jpg'

export default function Contact() {
    return (
        <div className="contact">
            <Navbar />
            <div className="container mx-auto">
                <div className="contact-logo row align-items-center">
                    <div className="col-md-5 col-12 mb-3">
                        <div className="flip">
                            <div className="flip-wrap w-100">
                                <img className="hmmaa d-block" src={HMMAA} alt="hmmaa" />
                                <div className="hmmaa-back bg-dark text-light">
                                    <p className="fs-4 border-light border-bottom border-1">線上服務</p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-light fs-6" target="_blank" rel="noreferrer" href="https://www.facebook.com/HualienWarrior">
                                                <i className="bi bi-facebook me-1"></i>Facebook粉絲專業
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-light fs-6" target="_blank" rel="noreferrer" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=813tmjvg">
                                                <i className="bi bi-line me-1"></i>Line官方帳號
                                            </a>
                                        </li>
                                        <img className="d-block w-50 mx-auto" src={QR} alt="qr_code" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-11">
                        <div className="flip">
                            <div className="flip-wrap w-100">
                                <img className="hualien-warrior d-block" src={hualienWarrior} alt="hualien warrior" />
                                <div className="hualien-warrior-back bg-dark text-light">
                                    <iframe title="contact_map" className="mb-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.413927984684!2d121.6059332153655!3d23.981156085837807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689fe5b79cda29%3A0xec7e7a9e926c30d6!2z5aWU6LeR5bGx6LGs6YGL5YuV5pWZ5a6k5LqM6aSod2l0aOiKseiTrue4o-atpuihk-mBi-WLleaOqOW7o-WNlOacgw!5e0!3m2!1szh-TW!2stw!4v1637903148525!5m2!1szh-TW!2stw"  loading="lazy"></iframe>
                                    <p className="fs-4 border-bottom border-light border-1">聯絡方式</p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="bi bi-telephone-fill me-1"></i>
                                            03-8338008
                                        </li>
                                        <li>
                                            <i className="bi bi-geo-alt-fill me-1"></i>
                                            花蓮縣花蓮市三民街41號
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
