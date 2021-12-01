import React from 'react'
import CtgCard from '../../components/CtgCard'

import './index.scss'

export default function IntroCtg() {
    return (
        <div className="intro-ctg py-5">
            <div className="container px-3">
                <div className="row g-2">
                    <div className="col-2 col-lg-12">
                        <h3 className="intro-ctg-title text-light display-5 text-center m-0">多元的賽事組別</h3>
                    </div>
                    <ul className="intro-ctg-list col-10 col-lg-12 list-unstyled">
                        <li>
                            <CtgCard type={'noob'}>新人歡樂組</CtgCard>
                        </li>
                        <li>
                            <CtgCard type={'open'}>踢拳公開賽</CtgCard>
                        </li>
                        <li>
                            <CtgCard type={'elite'}>菁英獎金賽</CtgCard>
                        </li>
                        <li>
                            <CtgCard type={'group'}>團體獎金賽</CtgCard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
