import React, {useEffect, useRef, useState} from 'react'
import CloseIcon from '../assets/icons/closeIcon'
import {gsap} from 'gsap'

function PopNotification({message, openPopUp}) {

    const PopUp = useRef(null)
    const q = gsap.utils.selector(PopUp)
    const tl = useRef(null)  
    
    const ClosePopUp=()=>{
        tl.current = gsap.timeline()
            .to(q("p"), {opacity: 0, duration: 0.2})
            .to(PopUp.current, {width: "0", opacity: 0, display: "none", duration: 0.5})
    }


    return (
        <>
            <div className="card w-fit shadow-md px-6 text-red-600 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden justify-center items-center h-12" ref={PopUp} id="PopUp">
                <p className="flex flex-nowrap gap-4 justify-center items-center w-[95%]">
                    {message}
                </p>            
                <div className="float-right inline-block" onClick={ClosePopUp}><CloseIcon /></div>
            </div>
        </>
    )
}

export default PopNotification
