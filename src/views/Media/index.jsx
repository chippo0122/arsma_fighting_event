import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './index.scss'

import mediaList from './mediaList.json'
import Carousel from '../../components/Carousel'

import './index.scss'

export default function Media() {
    return (
        <div className="media">
            <Navbar />
            <div className="crsl-container px-3 mx-auto">
                {
                    mediaList.map(el => {
                        return <Carousel key={el.name}>{el}</Carousel>
                    })
                }
            </div>
            <div className="media-bg"></div>
            <Footer />
        </div>
    )
}
