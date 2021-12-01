import React, { useRef, useState, useEffect } from 'react'
import './index.scss'

export default function Jumbotron(props) {

    const jumbotron = useRef();
    const sloganWrap = useRef();

    const { scrollHeight } = props;

    const [height, setHeight] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const height = jumbotron.current ? jumbotron.current.offsetHeight : 0;
        setHeight(isNaN(height) ? 1 : height);
        sloganWrap.current.classList.remove('slogan-hide')
    }, [])

    useEffect(() => {
        setOpacity(1 - (scrollHeight / height));
    }, [scrollHeight, height])

    return (
        <div ref={jumbotron} className="jumbotron">
            <div ref={sloganWrap} className="jumbo-slogan-wrap slogan-hide">
                <h2 className="jumbo-slogan display-1 text-light">
                    洄瀾勇士 拳力出擊
                    <span className="fs-3 text-fjalla">
                        Sa'icelen! Subitay
                    </span>
                </h2>
                <h2 className="jumbo-slogan jumbo-slogan-bg text-light slogan-bg-1 display-1">
                    洄瀾勇士 拳力出擊
                    <span className="fs-3 text-fjalla">
                        Sa'icelen! Subitay
                    </span>
                </h2>
                <h2 className="jumbo-slogan jumbo-slogan-bg slogan-bg-2 display-1">
                    洄瀾勇士 拳力出擊
                    <span className="fs-3 text-fjalla">
                        Sa'icelen! Subitay
                    </span>
                </h2>
            </div>
            <div style={{ transform: `translateX(-${scrollHeight}px)`, opacity: opacity }} className="jumbo-pic jumbo-left"></div>
            <div style={{ transform: `translateX(${scrollHeight}px)`, opacity: opacity }} className="jumbo-pic jumbo-right"></div>
        </div>
    )
}
