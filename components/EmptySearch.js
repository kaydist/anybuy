import React from 'react'
import Link from 'next/link'
import { RobotSVG } from '../assets/svgs/RobotSVG'


function EmptySearch() {
    return (
        <div className="min-h-[50vh] flex flex-col gap-6 items-center justify-center">
            <div className="h-48 w-48"><RobotSVG /></div>
            <p className="text-center max-w-[25%]">
                <p className="font-extrabold text-xl">Product Not Found</p>
                <p className="text-xs">sorry, we could not find your product. check out
some other great products</p>
            </p>

            <Link href="/cartegory/all-products"><button className="btn">All Products</button></Link>
        </div>
    )
}

export default EmptySearch
