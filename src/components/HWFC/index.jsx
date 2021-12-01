import React, {useRef, useEffect} from 'react'
import './index.scss'

export default function HWFC(props) {
    const hwfc = useRef();
    const firstSentence = useRef();
    const scndSentence =  useRef();

    useEffect(() => {
        const {scrollHeight} = props;
        const {offsetTop, offsetHeight} = hwfc.current;
        const viewHeight = window.innerHeight;
        const crossBorder = (scrollHeight + offsetTop) - viewHeight;
        if(crossBorder <= 0) {
            firstSentence.current.classList.remove('fade-in');
        } else if(crossBorder > 0 && crossBorder < offsetHeight / 4 * 3) {
            firstSentence.current.classList.remove('fade-out');
            firstSentence.current.classList.add('fade-in');
            scndSentence.current.classList.remove('fade-in');
        } else if(crossBorder > offsetHeight / 4 * 3  && crossBorder < offsetHeight + offsetHeight / 4) {
            firstSentence.current.classList.remove('fade-in');
            firstSentence.current.classList.add('fade-out');
            scndSentence.current.classList.remove('fade-out');
            scndSentence.current.classList.add('fade-in');
        } else if (crossBorder > offsetHeight + offsetHeight / 4) {
            firstSentence.current.classList.remove('fade-out');
            scndSentence.current.classList.remove('fade-in');
            scndSentence.current.classList.add('fade-out');
        } 
        
    }, [props])

    return (
        <div ref={hwfc} className="hwfc">
            <h3 ref={firstSentence} className="first-sentence text-center display-4">
                花蓮縣格鬥運動推廣協會主辦
                <br />
                花蓮最具指標性運動賽事
            </h3>
            <h3 ref={scndSentence} className="scnd-sentence text-center display-4">
                一同見證
                <br />
                花蓮最壯、最強、最美運動員們
                <br />
                最精采的表現
            </h3>
        </div>
    )
}
