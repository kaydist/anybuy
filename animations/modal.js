import { gsap } from "gsap";

export const openModal=()=>{
    const Modal = document.getElementById("modal")
    const ModalContent = document.getElementById("modal-content")

    gsap.set(Modal, {opacity: 0, zIndex: 50})
    gsap.set(ModalContent, {scale: 0})

    const tl = gsap.timeline()
    tl.fromTo(Modal, 
        {opacity: 0},
        {opacity: 1, duration: 0.3}
    ),
    tl.fromTo(
        ModalContent,
        {scale: 0},
        {scale: 1, duration: 0.3},
        "<50%"
    )
}

export const closeModal=()=>{
    const Modal = document.getElementById("modal")
    const ModalContent = document.getElementById("modal-content")

    const tl = gsap.timeline()
    tl.fromTo(
        ModalContent, 
        {scale: 1},
        {scale: 0, duration: 0.3}
    )
    tl.fromTo(
        Modal, 
        {opacity: 1},
        {opacity: 0, zIndex: -50, duration: 0.3},
        "<50%"
    )
}