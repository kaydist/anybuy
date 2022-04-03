import React, { useState, useMemo } from "react"
import { openModal, closeModal } from "../animations/modal"

function Modal({ref, state, close, children}) {

    // make classname back to fixed

    useMemo(() => {
        if(state === true){
            openModal()
        }else if(state === false){
            closeModal()
        }
        console.log(state)
    }, [state])

    return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000060] modal -z-50 opacity-0" ref={ref} id="modal">
        <div className="w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
            <div className="mx-auto w-[100%] md:w-[32rem]" id="modal-content">
            {children}
            </div>
        </div>                
    </div>
    //     <>
    //         {
    //             state === true
    //             ?   <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000060] modal z-50 opacity-0" ref={ref} id="modal">
    //                     <div className="w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
    //                         <div className="mx-auto w-[100%] md:w-[32rem]" id="modal-content">
    //                         {children}
    //                         </div>
    //                     </div>                
    //                 </div>

    //             :   <></>
                
    //         }
    // </>
    )
    
}

export default Modal
