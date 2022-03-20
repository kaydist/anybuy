import React from 'react'
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

            <button className="btn">All Products</button>
        </div>
    )
}

export default EmptySearch
