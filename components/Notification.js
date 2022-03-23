import React from 'react'

function Notification({message}) {
    return (
        <>
        <div className="top-0 flex absolute w-screen bg-notification-bg -ml-40 left-0 z-50 py-3 md:px-12 lg:px-40 px-4 -translate-y-28 opacity-0">
            <div className="font-extrabold inline text-center w-[95%]"><p>{message}</p></div>
            <div className="font-extrabold inline float-right w-fit">X</div>
        </div>
        </>
    )
}

export default Notification