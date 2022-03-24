let initialState=""

const screenSize= (state=initialState, action) =>{
    switch(action.type){
        case "isMobile":
            if(action.payload <= 768){
                return state ="isMobile"
            }else{
                return state ="isNotMobile"
            }  
        default:
            return state
    }
}

export default screenSize