import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import { useSelector } from 'react-redux'

import CartIcon from "../assets/icons/shopping-bag.svg"
import CloseIcon from "../assets/icons/closeIcon"
import Logo from "../assets/svgs/logo.svg"
import Facebook from "../assets/svgs/Facebook-mono-icon.svg"
import Twitter from "../assets/svgs/Twitter-icon.svg"
import Instagram from "../assets/svgs/Instagram-icon.svg"

function SideNav() {
    const CartCount = useSelector((state)=> state.cart)
    const router = useRouter()
    const NavChange =(idx, url)=>{
       const AllLinks = document.querySelectorAll(".Nav-links")
       AllLinks.forEach(link =>{
           link.classList.remove("before:w-full")
           link.classList.add("before:w-0")
       })
       router.push(`${url}`)
    }
    return (
        <div className="bg-body-bg w-screen h-screen fixed inset-0 z-[49] px-6 py-8 flex justify-between flex-col -translate-x-[100vw]">
            <div className="w-full flex justify-between">
                <div>
                    <CloseIcon />
                </div>

                <div>
                    <Image src={Logo} alt="AnyBuy" />
                </div> 

                <Link href="/cart" passHref>
                    <div className="relative flex items-center gap-2 font-bold text-sm">
                        <div className="h-6 w-6 flex items-center justify-center relative">
                            <Image src={CartIcon} alt="No profile Picture" height="100"/>
                            {
                                
                                CartCount.cart.length > 0
                                ?   <div className="absolute -right-2 -top-2 text-body-bg text-xs bg-red-600 rounded-full w-4 h-4 flex justify-center">
                                        {CartCount.cart.length} 
                                    </div>
                                : ""
                            }                            
                        </div>
                    </div>
                </Link>
            </div>
            
            <nav>
                <ul>
                {
                    [
                        ['Home', '/', '0'],
                        ['Shop', '/category/all-products', '1'],
                        ['Recharge', '/recharge', '2'],
                        ['Contact', '/contact', '3'],
                    ].map(([title, url, idx]) => (
                        <li key={idx}
                        className="nav-links relative block my-9 font-bold text-4xl before:border-b-4 before:border-b-primary before:rounded before:block before:absolute before:-bottom-1 before:content-['']  before:w-0 hover:before:w-1/2 hover:transition-width"
                        onClick={()=>{NavChange(idx, url)}}
                        >{title}</li>
                    ))
                }
                </ul>
            </nav>

            <div className="flex flex-row justify-end items-center gap-4">
                <div className="bg-[#00000060] flex items-center justify-center p-2 rounded-full h-12 w-12">
                    <Image src={Facebook} alt="Anybuy" height="70" />
                </div>
                <div className="bg-[#00000060] flex items-center justify-center p-2 rounded-full h-12 w-12">
                    <Image src={Twitter} alt="Anybuy" height="70" />
                </div>
                <div className="bg-[#00000060] flex items-center justify-center p-2 rounded-full h-12 w-12">
                    <Image src={Instagram} alt="Anybuy" height="70" />
                </div>
            </div>
        </div>
    )
}

export default SideNav
