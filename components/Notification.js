import React from 'react'

function Notification() {
    return (
        <div className="top-0 absolute w-full bg-notification-bg left-0 z-20 py-3 md:px-12 lg:px-40 px-4  -translate-y-full hidden">
            <div className="font-extrabold text-center w-[95%]"><p>Filter Applied</p></div>
            <div className="font-extrabold float-right w-fit">X</div>
        </div>
    )
}

export default Notification