import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import { useSelector } from "react-redux"

//styles

//images
import MenuBar from "../assets/icons/Menu Bar.svg"
import Logo from "../assets/svgs/logo.svg"

//svgs
import EmptyUserImage from "../assets/icons/user.svg"
import CartIcon from "../assets/icons/shopping-bag.svg"

export const SearchIcon=()=>{   
    return(
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="search" opacity="0.9">
        <path id="Vector" d="M11.1567 19.5513C15.575 19.5513 19.1567 15.9695 19.1567 11.5513C19.1567 7.13299 15.575 3.55127 11.1567 3.55127C6.73846 3.55127 3.15674 7.13299 3.15674 11.5513C3.15674 15.9695 6.73846 19.5513 11.1567 19.5513Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M21.1566 21.5513L16.8066 17.2013" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}

function Nav() {
    const AuthState = useSelector((state)=> state.auth) 
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
        <header className="mx-auto my-0 flex justify-between items-center p-4 lg:px-44 lg:py-4 bg-white max-w-[109.2rem] z-40 fixed w-screen h-20" >
            <div className="flex gap-4 items-center">
               <div className="inline-block lg:hidden z-50">
                    <Image src={MenuBar} alt="Menu" />
                </div>
                <div>
                    <Image src={Logo} alt="AnyBuy" />
                </div> 
            </div>
            
            
            <nav className="hidden lg:inline-block">
                <ul>
                {
                    [
                        ['Home', '/', '0'],
                        ['Shop', '/category/all-products', '1'],
                        ['Recharge', '/recharge', '2'],
                        ['Contact', '/contact', '3'],
                    ].map(([title, url, idx]) => (
                        <li key={idx}
                        className="nav-links relative inline-block mx-9 font-bold text-sm before:border-b-4 before:border-b-primary before:rounded before:block before:absolute before:-bottom-1 before:content-['']  before:w-0 hover:before:w-1/2 hover:transition-width"
                        onClick={()=>{NavChange(idx, url)}}
                        >{title}</li>
                    ))
                }
                </ul>
            </nav>

            {
                AuthState.loggedIn === false 
                ? <div className="hidden lg:inline-block">
                    <ul>
                        <Link href="/auth/login">
                            <li className="relative inline-block mx-9 font-bold text-sm">Sign In</li>
                        </Link>

                        <Link href="/auth/signup">
                            <li className="inline-block ml-9">
                                <button className="px-8 py-3 btn font-bold text-sm">Create Account</button>
                            </li>
                        </Link>
                    </ul>
                    </div>
                
              
                : <div className="inline-block">
                    <ul className="flex">

                        <Link href="/profile">
                            <li className="relative flex justify-end items-center gap-4 lg:mx-9 font-bold text-sm">
                                <div className="lg:hidden rounded-full h-6 w-6 flex items-center justify-center">
                                    <SearchIcon />
                                </div>

                                <div className="rounded-full bg-muted h-6 w-6 flex items-center justify-center p-0 lg:p-1">
                                    <Image src={EmptyUserImage} alt="No profile Picture" height="100"/>
                                </div>  <span className="hidden lg:inline">Profile</span>
                            </li>
                        </Link>

                        <Link href="/cart">
                            <li className="relative hidden lg:flex items-center gap-2 mx-9 font-bold text-sm">
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
                                Cart
                            </li>
                        </Link>
                    </ul>
                </div>
            }
            
        </header>
    )
}

export default Nav
