import React, { useEffect, useRef } from 'react'
import './index.scss'

export default function CtgDetail(props) {
    const { index } = props.children;
    const { name, detail, addition } = props.children.el;
    const checkPos = index % 2 === 0;
    const detailCard = useRef();

    useEffect(() => {
        if (checkPos) {
            detailCard.current.classList.remove('right-side');
            detailCard.current.classList.add('left-side');
        } else {
            detailCard.current.classList.add('right-side');
        }
    }, [checkPos])

    return (
        <div id={name} className="ctg-detail my-3">
            <div ref={detailCard} className="ctg-detail-card py-3 px-5">
                <h3 className="text-light">{name}</h3>
                {
                    addition ?
                        <div>
                            <p className="text-light">{detail}</p>
                            <button className="btn btn-sm btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${name}`}>
                                更多...
                            </button>
                            <div className="collapse p-3" id={`collapse_${name}`}>
                                <p className="text-light">{addition}</p>
                            </div>
                        </div>
                        :
                        <p className="text-light">{detail}</p>
                }
            </div>
        </div>
    )
}
