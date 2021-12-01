import React from 'react'

import './index.scss'

export default function Locate() {
    return (
        <div className="locate py-5">
            <div className="container row mx-auto">
                <div className="col-md-6 col-12">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.212361932401!2d121.60892836954312!3d23.974143173648024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689fea87cd1799%3A0x5b0b76cd62256dc8!2z6Iqx6JOu6Zi_5oCd55Gq6bqX5pmv5aSn6aOv5bqXIEFyc21hIEhvdGVs!5e0!3m2!1szh-TW!2stw!4v1637820313585!5m2!1szh-TW!2stw" title="map" loading="lazy"></iframe>
                </div>
                <div className="col-md-6 col-12 text-center py-3">
                    <p className="fs-1 text-light text-anton">2021.12.25</p>
                    <p className="fs-3 text-light">花蓮阿斯瑪麗景大飯店</p>
                    <p className="fs-3 text-light text-anton">Ready to Fight</p>
                    <div className="arsma-logo mx-auto"></div>
                    <p className="fs-3 text-light">花蓮縣花蓮市博愛街<span className="text-anton">68</span>號</p>
                    <p className="fs-3 text-light">鄰近東大門夜市</p>
                </div>
            </div>
        </div>
    )
}
