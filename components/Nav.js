import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

//styles

//images
import MenuBar from "../assets/icons/Menu Bar.svg"
import Logo from "../assets/svgs/logo.svg"

//svgs
import EmptyUserImage from "../assets/icons/user.svg"
import CartIcon from "../assets/icons/shopping-bag.svg"

function Nav() {
    const AuthState = useSelector((state)=> state.auth) 
    return (
        <header className="mx-auto my-0 flex justify-between items-center p-4 lg:px-44 lg:py-4 bg-white max-w-[109.2rem] z-40"  >
            <div className="inline-block lg:hidden">
                <Image src={MenuBar} alt="AnyBuy" />
            </div>
            <div>
                <Image src={Logo} alt="AnyBuy" />
            </div>
            
            <nav className="hidden lg:inline-block">
                <ul>
                {
                    [
                        ['Home', '/', '1'],
                        ['Shop', '/category/all-products', '2'],
                        ['Recharge', '/recharge', '3'],
                        ['Contact', '/contact', '4'],
                    ].map(([title, url, idx]) => (
                        <Link href={url} key={idx}><li className="relative inline-block mx-9 font-bold text-sm before:border-b-4 before:border-b-primary before:rounded before:block before:absolute before:-bottom-1 before:content-['']  before:w-0 hover:before:w-2/3 hover:transition-width">{title}</li></Link>
                    ))
                }
                </ul>
            </nav>

            {
                AuthState.loggedIn === false 
                ? <div className="hidden lg:inline-block">
                    <ul>
                        <Link href="/auth/login">
                            <li className="relative inline-block mx-9 font-bold text-sm before:border-b-4 before:border-b-primary before:rounded before:block before:absolute before:-bottom-1 before:content-['']  before:w-0 hover:before:w-2/3 hover:transition-width">Sign In</li>
                        </Link>

                        <Link href="/auth/signup">
                            <li className="inline-block ml-9">
                                <button className="px-8 py-3 btn font-bold text-sm">Create Account</button>
                            </li>
                        </Link>
                    </ul>
                    </div>
                
              
                : <div className="hidden lg:inline-block">
                    <ul className="flex">
                        <Link href="/profile">
                            <li className="relative flex items-center gap-2 mx-9 font-bold text-sm before:border-b-4 before:border-b-primary before:rounded before:block before:absolute before:-bottom-1 before:content-['']  before:w-0 hover:before:w-2/3 hover:transition-width">
                                <div className="rounded-full bg-muted h-6 w-6 flex items-center justify-center p-1">
                                    <Image src={EmptyUserImage} alt="No profile Picture" height="100"/>
                                </div>  Profile
                            </li>
                        </Link>

                        <Link href="/cart">
                            <li className="relative flex items-center gap-2 mx-9 font-bold text-sm before:border-b-4 before:border-b-primary before:rounded before:block before:absolute before:-bottom-1 before:content-['']  before:w-0 hover:before:w-2/3 hover:transition-width">
                                <div className="h-6 w-6 flex items-center justify-center">
                                    <Image src={CartIcon} alt="No profile Picture" height="100"/>
                                </div>  Cart
                            </li>
                        </Link>
                    </ul>
                </div>
            }
            
        </header>
    )
}

export default Nav
