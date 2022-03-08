import Image from "next/image"

//logo
import LogoWhite from "../assets/svgs/Logo-white.svg"
import Facebook from "../assets/svgs/Facebook-mono-icon.svg"
import Twitter from "../assets/svgs/Twitter-icon.svg"
import Instagram from "../assets/svgs/Instagram-icon.svg"

function AppFooter() {
    return (
        <footer className="lg:flex flex-col bg-footer-bg md:px-12 lg:px-40 px-4 lg:py-16 text-white hidden" >
            <div className="grid grid-cols-3">
                <div>
                    <Image src={LogoWhite} alt="Anybuy" height="50" />
                    <p className="my-4 max-w-[75%]">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                    <div className="flex flex-row justify-start items-center gap-4">
                        <div className="bg-[#FFFFFF20] flex items-center justify-center p-2 rounded-full h-12 w-12">
                            <Image src={Facebook} alt="Anybuy" height="70" />
                        </div>
                        <div className="bg-[#FFFFFF20] flex items-center justify-center p-2 rounded-full h-12 w-12">
                            <Image src={Twitter} alt="Anybuy" height="70" />
                        </div>
                        <div className="bg-[#FFFFFF20] flex items-center justify-center p-2 rounded-full h-12 w-12">
                            <Image src={Instagram} alt="Anybuy" height="70" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <nav>
                        <p className="text-lg font-extrabold">Pages</p>
                        <ul className="flex flex-col gap-4 justify-start items-left mt-6">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Buy Airtime</li>
                            <li>Contact</li> 
                        </ul>
                    </nav>
                </div>
                <div>
                    <p className="text-lg font-extrabold">Newsletter</p>
                    <p className="my-4 max-w-[75%]">Get more Information about Anypay and more update</p>

                    <div className="w-full flex flex-row gap-2 bg-white px-1 rounded-lg">
                    <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="input w-full border-0 m-0 py-0 focus:border-0"
                    />
                    <button className="my-1 btn rounded-lg">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter
