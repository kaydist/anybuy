import React from 'react'
import Link from "next/link"

const AuthFooter = () => {
    return (
        <div className="hidden lg:flex justify-between items-center px-28 py-4 bg-white w-full z-40">
            <span className="inline-block">©AnyPay</span>
            <Link href="/" passHref><span className="text-primary inline-block">Go Home</span></Link>
        </div>
    )
}

export default AuthFooter
