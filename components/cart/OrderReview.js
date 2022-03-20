import Image from 'next/image'
import {useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { RemoveFromCart } from '../../store/actions/quantityChange'

//image
import TrashIcon from "../../assets/icons/trash.svg"


function OrderReview() {
    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart.cart)
    const totalCartPrice = useSelector((state) => state.cart.totalCartPrice)

    //tax
    const [tax, setTax] = useState(10000)

    return (
        <div className="card flex flex-col gap-8 h-fit">
            <p className="font-black">Order Reviews</p>

            <div className="flex flex-col gap-6">
                {
                    cart.map((product) =>{
                        const {
                            id,
                            name,
                            image,
                            quantity,
                            totalItemPrice
                        } = product

                        return(
                            <div key={id} className="flex items-center justify-start gap-4">
                            <div className="bg-muted w-40 h-30 rounded-xl flex items-center flex-[0.4]">
                                <Image src={image} alt="" height='200' width="200" />
                            </div>
                            <div className="flex-[0.6]">
                                <p className="font-bold">{name}</p>
                                <p className="font-black text-xs">₦{totalItemPrice}</p>
                                <p className="text-xs">Quantity : {quantity}</p>
                            </div>

                            <Image 
                            src={TrashIcon} 
                            alt="Delete" 
                            width='20' height='20' 
                            className="float-right"
                            onClick={()=>{
                                dispatch(RemoveFromCart(id))
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

export default OrderReview
