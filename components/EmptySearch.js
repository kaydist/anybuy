import React from 'react'
import Link from 'next/link'
import { RobotSVG } from '../assets/svgs/RobotSVG'


function EmptySearch({heading, message}) {
    return (
        <div className="min-h-[50vh] flex flex-col gap-6 items-center justify-center">
            <div className="h-48 w-48"><RobotSVG /></div>
            <p className="text-center w-[85%] lg:max-w-[25%]">
                <p className="font-extrabold text-xl">{heading}</p>
                <p className="text-xs">{message}</p>
            </p>

            <Link href="/category/all-products" passHref><button className="btn">All Products</button></Link>
        </div>
    )
}

export default EmptySearch
