import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux";

//redux functions
import { RemoveFromCart } from '../store/actions/quantityChange';

//image
import DeleteIcon from "../assets/icons/trash.svg"
import SummaryCard from '../components/cart/summarycard'
import QuantityButton from '../components/product/QuantityButton'

function Cart() {
    let currentScreenWidth = useSelector((state)=> state.screenSize);
    const TotalState = useSelector((state) => state.cart)
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <div>
            <h2 className="text-4xl font-extrabold mt-6 ">Cart</h2>
            
            {
                        currentScreenWidth === "isNotMobile"
                ? <div className="flex flex-wrap justify-between">
                    <section className="w-full lg:w-[70%]">
                    <table className="text-lg table-fixed border-collapse">
                        <thead>
                            <tr>                                    
                                <th> </th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((product, idx) =>{
                                    const {
                                        id,
                                        name,
                                        activeType,
                                        originalPrice,
                                        discount,
                                        sellingPrice,
                                        totalItemPrice,
                                        quantity
                                    } = product
                                    return (
                                        <tr className="border-t border-[#9F9F9F15]" key={idx}>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <Image 
                                                src={DeleteIcon} 
                                                alt="remove from cart" 
                                                width="100" 
                                                height="50" 
                                                className="btn bg-white p-0"
                                                onClick={()=> {
                                                    dispatch(RemoveFromCart(product))
                                                }}
                                                />
                                            </td>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <div className="flex items-center justify-start gap-4">
                                                    <div className="bg-white w-40 h-32 rounded-xl flex items-center flex-[0.35]">
                                                        <Image src={activeType} alt="" height='200' width="200" />
                                                    </div>
                                                    <p className="font-bold flex-[0.65]">{name}</p>
                                                </div>
                                            </td>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <p className="font-black">₦{sellingPrice}</p>
                                                <p className="font-black removed">₦{originalPrice}</p>
                                            </td>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <QuantityButton product={product} />
                                            </td>
                                            <td className="px-4">
                                                <p className="font-black text-xl">₦{totalItemPrice}</p>
                                            </td>
                                        </tr>  
                                    )
                                })
                            } 

                        </tbody>
                    </table>
                    </section>

                    <section className="w-full lg:w-[25%]">
                        <SummaryCard />
                    </section>
                </div>

                : <div className="flex flex-wrap justify-around gap-6 min-h-[80vh]">
                    <section>
                    {
                    cart.map((product, idx) =>{
                    const {
                        id,
                        name,
                        activeType,
                        originalPrice,
                        discount,
                        sellingPrice,
                        totalItemPrice,
                        quantity
                    } = product
                    return (
                            <div key={id} className="flex items-center justify-start gap-4 my-4">
                            <div className="bg-muted w-40 h-30 rounded-xl flex items-center flex-[0.4]">
                                <Image src={activeType} alt="" height='200' width="200" />
                            </div>
                            <div className="flex-[0.6] flex flex-col gap-2">
                                <p className="font-bold">{name}</p>
                                <p className="font-black text-xs">₦{totalItemPrice}</p>
                                <p className="text-xs -mt-3"><QuantityButton product={product} /></p>
                            </div>

                            <Image 
                            src={DeleteIcon} 
                            alt="remove from cart" 
                            width="20" 
                            height="20" 
                            onClick={()=> {
                                dispatch(RemoveFromCart(product))
                            }}
                            />
                            </div>
                        )
                    })
                    }
                </section>

                    <section className="w-full">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">Total Items</p>
                        <p className="font-bold">{TotalState.totalCartQuantity}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm">Total Price</p>
                        <p className="font-bold">₦{TotalState.totalCartPrice}</p>
                    </div>
                    </section>

                    <Link href="/checkout" passHref><button className="btn w-full h-12">Proceed to checkout</button></Link>

                </div>
            }
                
            
        </div>
    )
}

export default Cart
