import React, { useRef, useEffect } from 'react'

import './index.scss'

export default function CtgCard(props) {
    const { children, type } = props;
    const ctgImg = useRef();

    useEffect(() => {
        ctgImg.current.classList.add(type)
    }, [type])

    return (
        <a href={`#/categories#${children}`} className="ctg-card-wrap">
            <div className="ctg-card">
                <div ref={ctgImg} className="ctg-img"></div>
                <div className="ctg-card-hover">
                    <h4 className="ctg-card-title text-light">
                        {children}
                    </h4>
                </div>
            </div>
        </a>
    )
}
