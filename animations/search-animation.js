import {gsap} from "gsap"

export const OpenSearch=()=>{
    document.getElementById("Nav-logo").classList.add('hidden')
    document.getElementById("Nav-Search-Icon").classList.add('hidden')
    const NavSearch = document.getElementById("Nav-Search")
    const q = gsap.utils.selector(NavSearch)

    gsap.set(NavSearch, {display:"flex"})   
    gsap.set(q("form"), {width: "0"})   
    const tl = gsap.timeline()
    tl.fromTo(q("form"), {width: "0"}, {width: "100%", ease: "expo.out", duration: 2.5}) 
}

export const CloseSearch=()=>{
    document.getElementById("Nav-logo").classList.remove('hidden')
    document.getElementById("Nav-Search-Icon").classList.remove('hidden')
    const NavSearch = document.getElementById("Nav-Search")
    const q = gsap.utils.selector(NavSearch)
  
    const tl = gsap.timeline()
    tl.fromTo(q("form"), {width: "100%"}, {width: "0", ease: "expo.out", duration: 2.5}) 
    tl.to(NavSearch, {display: "hidden"}) 
}