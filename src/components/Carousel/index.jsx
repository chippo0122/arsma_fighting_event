import React from 'react'


import './index.scss'
import mediaMap from './mediaMap'

const makeArr = (num) => {
    let arr = [];
    for(let i = 0; i < num; i ++) {
        arr[i] = i + 1;
    }
    return arr;
}

export default function Carousel(props) {
    const {name, description, img_route, img_total, date} = props.children;
    const count = makeArr(img_total);

    return (
        <div className="carousel-wrap border border-light text-light">
            <h1 className="fs-1 text-center py-1">{name}</h1>
            <span className="text-center d-block mb-3">{date}</span>
            <p className="text-center pb-3">{description}</p>
            <div id={name} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        count.map((el, index) => {
                            const classes = el === 1 ? 'active' : '';

                            return (
                                <button key={el} type="button" data-bs-target={`#${name}`} data-bs-slide-to={index} className={classes}></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner">
                        {
                            count.map((el, index) => {
                                let classes = 'carousel-item';
                                if(el === 1) {
                                    classes += ' active'
                                }

                                return (
                                    <div key={el} className={classes}>
                                        <img className="d-block w-100" src={mediaMap[img_route][index]} alt={mediaMap[img_route][index]} />
                                    </div>
                                )
                            })
                        }
                </div>
                <button className="carousel-control-prev" type="button" ddata-bs-target={`#${name}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${name}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
