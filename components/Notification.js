import React from 'react'
import { CloseFilterNot } from '../animations/filter'

function Notification({message}) {
    return (
        <div className="top-0 flex sticky w-screen lg:-ml-40 md:-ml-12 -ml-4 bg-notification-bg z-30 py-3 md:px-12 lg:px-40 px-4 overflow-hidden opacity-1 -translate-y-20" id="filterNotification">
            <div className="font-extrabold inline text-center w-[95%]"><p>{message}</p></div>
            <div className="font-extrabold inline float-right w-fit hover:cursor-pointer" onClick={CloseFilterNot}>X</div>
        </div>
    )
}

export default Notification