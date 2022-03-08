import Image from 'next/image'

//image
import Earpod from "../../assets/items/mHXOMt3WlF8.png"
import TrashIcon from "../../assets/icons/trash.svg"

function OrderReview() {
    return (
        <div className="card flex flex-col gap-8 h-fit">
            <p className="font-black">Order Reviews</p>

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-start gap-4">
                    <div className="bg-muted w-40 h-30 rounded-xl flex items-center ">
                        <Image src={Earpod} alt="" height='200' width="200" />
                    </div>
                    <div className="">
                        <p className="font-bold">Cool Red Xbox Series X|S Controller Skin</p>
                        <p className="font-black text-xs">₦40,000</p>
                        <p className="text-xs">Quantity : 1</p>
                    </div>

                    <Image src={TrashIcon} alt="Delete" width='50' height='50' className="float-right"/>
                </div>
            </div>

            <div className="border-t border-muted py-6">
                <div className="flex justify-between items-center">
                    <p className="text-sm">Subtotal</p>
                    <p className="font-black text-xl">₦240,000</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">Tax</p>
                    <p className="font-black text-xl">₦10,000</p>
                </div>
            </div>

            <div className="flex justify-between items-center border-t border-muted py-6">
                <p className="text-sm">Total</p>
                <p className="font-black text-2xl">₦250,000</p>
            </div>

            <button className="btn w-full">Purchase</button>
        </div>
    )
}

export default OrderReview
