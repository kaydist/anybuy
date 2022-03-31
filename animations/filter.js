import { gsap } from "gsap";

export const OpenFilterNot=()=>{
    const Notification = document.getElementById("filterNotification")
    const tl = gsap.timeline()
    tl.fromTo(Notification, {y: -40, opacity: 0}, {y: -20, opacity: 1, duration: 1})   
    CloseFilterNot() 
}

export const CloseFilterNot=()=>{
    const Notification = document.getElementById("filterNotification")
    const tl = gsap.timeline()
    tl.to(Notification, {y: -40, opacity: 0, duration: 1, delay: 5})
}