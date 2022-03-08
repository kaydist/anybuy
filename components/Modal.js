
function Modal({children}) {

    // make classname back to fixed
    return (
        <div className="hidden top-0 left-0 w-screen h-screen bg-[#00000060] z-50">
            <div className="w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
                <div className="mx-auto w-[92%] md:w-[32rem]">
                {children}
                </div>
            </div>                
        </div>
    )
}

export default Modal
