import {gsap} from 'gsap'


export const openSideNav=()=>{
    const sideNav = document.getElementById('SideNav')    
    const q = gsap.utils.selector(sideNav)

    const tIn = gsap.timeline()
    tIn.fromTo(sideNav, {translateX: "-100vw"}, {translateX: "0",  duration: 1, ease: "expo.out"})
    tIn.fromTo(q(".nav-links-text"), {y: 200}, {y: 0, stagger: 0.1, duration: 0.4}, "<")
}

export const closeSideNav=()=>{
    const sideNav = document.getElementById('SideNav')    
    const q = gsap.utils.selector(sideNav)

    const tOut = gsap.timeline()
    tOut.to(q(".nav-links-text"), {y: 200, stagger: 0.25, duration: 0.5})
    tOut.to(sideNav, {translateX: "-100vw",  duration: 1, ease: "expo.out"}, "<40%")
}