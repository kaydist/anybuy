import React, { useState } from "react"

function Modal({ref, state, close, children}) {
    const [open, setIsOpen] = useState(state)

    // make classname back to fixed
    const closeModal =()=>{
        setIsOpen(!state)
    }


    return (
        <>
            {
                state === true
                ?   <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000060] modal z-50" ref={ref}>
                        <div className="w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
                            <div className="mx-auto w-[100%] md:w-[32rem]">
                            {children}
                            </div>
                        </div>                
                    </div>

                :   <></>
                
            }
    </>
    )
    
}

export default Modal
