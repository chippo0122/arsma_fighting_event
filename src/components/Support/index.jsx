import React from 'react'
import './index.scss'

export default function Support() {
    return (
        <div className="support bg-dark text-light d-flex justify-content-center align-items-center flex-column pb-5">
            <h3 className="pt-5 text-center display-5">生於斯長於斯,洄瀾之子不遺餘力</h3>
            <p className="pt-5">主辦單位</p>
            <div className="hmmaa"></div>
            <p className="pt-5">贊助單位</p>
            <div className="row support-wrap">
                <div className="col-6 col-md-3">
                    <div className="arsma-support"></div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="song-ju-support"></div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="muscle-factory-support"></div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="running-pig-support"></div>
                </div>
            </div>
            <p>指導單位</p>
            <ul className="support-wrap list-unstyled">
                <li>花蓮縣政府</li>
                <li>花蓮縣議會</li>
                <li>花蓮縣體育會</li>
                <li>台灣柔術總會</li>
                <li>台灣踢拳協會</li>
                <li>中華民國綜合格鬥協會</li>
            </ul>
        </div>
    )
}
