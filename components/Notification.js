import React from 'react'
import { CloseFilterNot } from '../animations/filter'

function Notification({message}) {
    return (
        <div className="top-0 flex sticky w-screen bg-notification-bg left-0 right-0 z-30 py-3 -ml-4 lg:-ml-40 md:px-12 lg:px-40 px-4 opacity-1 -translate-y-20" id="filterNotification">
            <div className="font-extrabold inline text-center w-[95%]"><p>{message}</p></div>
            <div className="font-extrabold inline float-right w-fit" onClick={CloseFilterNot}>X</div>
        </div>
    )
}

export default Notification