import {gsap} from "gsap"

export const OpenUp =()=>{
    const PopUp = document.getElementById("PopUp")
    const q = gsap.utils.selector(PopUp)

    gsap.set(PopUp, {width: "0", display:"flex"})   
    const tl = gsap.timeline()
    tl.fromTo(PopUp, {width: "0"}, {width: "90%", duration: 0.5})
    tl.fromTo(q("p"), {opacity: 0}, {opacity: 1, duration: 0.2})    
}