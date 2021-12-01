import React from 'react'

import './index.scss'

export default function Prize() {
    return (
        <div className="prize d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-light text-center display-3 py-5">獲勝獎金由您爭取</h3>
            <p className="text-light text-center fs-3">
                菁英獎金賽 : 最低<span className="text-anton">2,000</span>元起
            </p>
            <p className="text-light text-center fs-3">
                團體獎金賽 : 最低<span className="text-anton">3,000</span>元起
            </p>
            <a href="https://drive.google.com/file/d/1Q4R3TtACnx6w5uIlSb254tQXt6VA2Eaa/view" target="_blank" rel="noreferrer" className="btn btn-prize text-light mb-2">點此了解更多</a>
            <button href="https://drive.google.com/file/d/1Q4R3TtACnx6w5uIlSb254tQXt6VA2Eaa/view" target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sign" disabled>立即報名(已截止)</button>
        </div>
    )
}
