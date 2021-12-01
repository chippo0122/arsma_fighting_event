import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Jumbotron from '../../components/Jumbotron'
import HWFC from '../../components/HWFC'
import Flash from '../../components/Flash'
import IntroCtg from '../../components/IntroCtg'
import Prize from '../../components/Prize'
import Fight from '../../components/Fight'
import Locate from '../../components/Locate'
import Purpose from '../../components/Purpose'
import Support from '../../components/Support'
import Footer from '../../components/Footer'

export default function MainIntro() {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        setScrollHeight(window.pageYOffset);

        const detect = window.addEventListener('scroll', () => {
            const { pageYOffset } = window;
            setScrollHeight(pageYOffset);
        })

        //componentWillUnmount
        return () => {
            window.removeEventListener('scroll', detect);
        }
    }, [])

    return (
        <div>
            <Navbar />
            <Jumbotron scrollHeight={scrollHeight} />
            <HWFC scrollHeight={scrollHeight} />
            <Flash />
            <IntroCtg />
            <Purpose />
            <Fight scrollHeight={scrollHeight}/>
            <Prize />
            <Locate />
            <Support />
            <Footer />
        </div>
    )
}
