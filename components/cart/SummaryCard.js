import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

function SummaryCard() {
    const TotalState = useSelector((state) => state.cart)
    return (
        <div className="card flex flex-col gap-8 h-fit">
            <p className="font-black">Order Summary</p>

            <div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">Total Items</p>
                    <p className="font-bold">{TotalState.totalCartQuantity}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">Total Price</p>
                    <p className="font-bold">₦{TotalState.totalCartPrice}</p>
                </div>
            </div>

            <p className="text-center text-xs">Shipping informations and tax will be in the checkout</p>

            <Link href="/checkout" passHref><button className="btn w-full">Checkout</button></Link>
        </div>
    )
}

export default SummaryCard
