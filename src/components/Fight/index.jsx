import React, {useRef, useEffect} from 'react'

import './index.scss'

export default function Fight(props) {
    const fight = useRef();
    const fist = useRef();
    const {scrollHeight} = props;

    useEffect(() => {
        const {offsetTop, offsetHeight} = fight.current;
        const viewHeight = window.innerHeight;
        const detect = scrollHeight + viewHeight - (offsetHeight / 2) > offsetTop
        if(detect) {
            fight.current.classList.add('fight-show')
        }
        
    })


    return (
        <div ref={fight} className="fight d-flex flex-column justify-content-center align-items-center">
            <h3 className="display-5">
                <span className="text-anton">Kafid</span>庇佑的華麗拳腿
            </h3>
            <div ref={fist} className="fist"></div>
            <h3 className="display-5">
                <span className="text-anton">Malataw</span>賜予的力量統御
            </h3>
        </div>
    )
}
