import Image from 'next/image'
import { useSelector, useDispatch } from "react-redux";

//redux functions
import { RemoveFromCart } from '../store/actions/quantityChange';

//image
import DeleteIcon from "../assets/icons/trash.svg"
import SummaryCard from '../components/cart/summarycard'
import QuantityButton from '../components/product/QuantityButton'

function cart() {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <div>
            <h2 className="text-4xl font-extrabold">Cart</h2>
            <div className="flex justify-between mt-6">
                <section className="w-[70%]">
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
                                        image,
                                        originalPrice,
                                        discount,
                                        sellingPrice,
                                        totalItemPrice
                                    } = product
                                    return (
                                        <tr className="border-t border-[#9F9F9F15]" key={idx}>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <Image 
                                                src={DeleteIcon} 
                                                alt="remove from cart" 
                                                width="100" 
                                                onClick={()=> {
                                                    dispatch(RemoveFromCart(id))
                                                }}
                                                />
                                            </td>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <div className="flex items-center justify-start gap-4">
                                                    <div className="bg-white w-40 h-32 rounded-xl flex items-center flex-[0.35]">
                                                        <Image src={image} alt="" height='200' width="200" />
                                                    </div>
                                                    <p className="font-bold flex-[0.65]">{name}</p>
                                                </div>
                                            </td>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <p className="font-black">₦{sellingPrice}</p>
                                                <p className="font-black removed">₦{originalPrice}</p>
                                            </td>
                                            <td className="p-4 border-r border-[#9F9F9F15]">
                                                <QuantityButton />
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

                <section className="w-[25%]">
                    <SummaryCard />
                </section>
            </div>
        </div>
    )
}

export default cart
