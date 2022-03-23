let initialState=""

const screenSize= (state=initialState, action) =>{
    switch(action.type){
        case "isMobile":
            if(action.payload <= 768){
                console.log("isMobile")
                return state ="isMobile"
            }else{
                console.log("isNotMobile")
                return state ="isNotMobile"
            }  
        default:
            return state
    }
}

export default screenSize