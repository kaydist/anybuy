import Image from 'next/image'
import {useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { RemoveFromRechargeCart } from '../../store/actions/quantityChange'

//image
import TrashIcon from "../../assets/icons/trash.svg"


function RechargeReview() {
    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.rechargeCart.cart)
    const totalCartPrice = useSelector((state) => state.rechargeCart.totalCartPrice)

    //tax
    const [tax, setTax] = useState(10000)

    return (
        <div className="card flex flex-col gap-8 h-fit">
            <p className="font-black">Order Reviews</p>

            <div className="flex flex-col gap-6">
                {
                    cart.map((product, idx) =>{
                        const {
                            carrierNetwork,
                            mobileNumber,
                            amount,
                            logo
                        } = product
                        
                        return(
                            <div key={idx} className="flex items-center justify-start gap-4">
                            <div className="bg-muted w-40 h-24 rounded-xl flex justify-center items-center flex-[0.4]">
                                <Image src={logo} alt={carrierNetwork} height='60' width="60" />
                            </div>
                            <div className="flex-[0.6]">
                                <p className="font-bold">{carrierNetwork}</p>
                                <p className="font-black text-xs">₦{amount}, {amount}</p>
                                <p className="text-xs">Mobile No : {mobileNumber}</p>
                            </div>

                            <Image 
                            src={TrashIcon} 
                            alt="Delete" 
                            width='20' height='20' 
                            className="float-right"
                            onClick={()=>{
                                dispatch(RemoveFromRechargeCart(idx))
                            }}/>
                            </div>
                        )
                    })
                }
                
            </div>

            <div className="border-t border-muted py-6">
                <div className="flex justify-between items-center">
                    <p className="text-sm">Subtotal</p>
                    <p className="font-black text-xl">₦{totalCartPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">Tax</p>
                    <p className="font-black text-xl">₦{tax}</p>
                </div>
            </div>

            <div className="flex justify-between items-center border-t border-muted py-6">
                <p className="text-sm">Total</p>
                <p className="font-black text-2xl">₦{tax + totalCartPrice}</p>
            </div>

            <button className="btn w-full">Purchase</button>
        </div>
    )
}

export default RechargeReview
