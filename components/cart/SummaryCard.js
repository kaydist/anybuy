import React from 'react'

function SummaryCard() {
    return (
        <div className="card flex flex-col gap-8 h-fit">
            <p className="font-black">Order Summary</p>

            <div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">Total Items</p>
                    <p className="font-bold">1</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">Total Price</p>
                    <p className="font-bold">₦240,000</p>
                </div>
            </div>

            <p className="text-center text-xs">Shipping informations and tax will be in the checkout</p>

            <button className="btn w-full">Checkout</button>
        </div>
    )
}

export default SummaryCard
