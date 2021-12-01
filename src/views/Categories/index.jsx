import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtgDetail from '../../components/CtgDetail'

import infomation from "./infomation.json"

import './index.scss'

export default function Categories() {
    return (
        <div className="categories">
            <div className="ctg-jumbotron"></div>
            <Navbar />
            <h1 className="text-light display-3 py-3 text-center">賽事組別</h1>
            <div className="container ctg-main">
                
                {
                    infomation.map((el, index) => {
                        return (
                            <CtgDetail key={el.name}>{{el, index}}</CtgDetail>
                        )
                    })
                }
                <div className="central-line"></div>
            </div>
            <div className="sign-rule mb-5">
                <a href="https://drive.google.com/file/d/1Q4R3TtACnx6w5uIlSb254tQXt6VA2Eaa/view" target="_blank" rel="noreferrer" className="btn btn-outline-light d-block my-2">詳細活動規章</a>
                <button className="btn btn-warning d-block my-2 w-100" disabled>我要報名(已截止)</button>
            </div>
            <Footer />
        </div>
    )
}
