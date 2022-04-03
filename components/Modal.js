import React from "react"
import { useMemo, useEffect } from "react"

function Modal({ref, state, close, children}) {

    const showClass = state === true ? "fixed top-0 left-0 w-screen h-screen bg-[#00000060] modal z-50 opacity-1 transition-all" : "fixed -top-[100%] left-0 w-screen h-screen bg-[#00000060] modal z-50 opacity-0 transition-all"

    const showContentClass = state === true ? "mx-auto w-[100%] md:w-[32rem] scale-100 transition-all" : "mx-auto w-[100%] md:w-[32rem] scale-0 transition-all"


    return (

        <div className={showClass} ref={ref} id="modal">
            <div className="w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
                <div className={showContentClass} id="modal-content">
                {children}
                </div>
            </div>                
        </div>

    )
    
}

export default Modal
