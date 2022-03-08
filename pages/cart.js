import Image from 'next/image'

//image
import Earpod from "../assets/items/mHXOMt3WlF8.png"
import SummaryCard from '../components/cart/summarycard'

function cart() {
    return (
        <div>
            <h2 className="text-4xl font-extrabold">Cart</h2>
            <div className="flex justify-between mt-6">
                <section className="w-[70%]">
                    <table className="text-lg table-fixed border-collapse">
                        <thead>
                            <tr>                                    
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-[#9F9F9F15]">
                                <td className="p-4 border-r border-[#9F9F9F15]">
                                    <div className="flex items-center justify-start gap-4">
                                        <div className="bg-white w-40 h-32 rounded-xl flex items-center "><Image src={Earpod} alt="" height='200' width="200" /></div>
                                        <p className="font-bold">Cool Red Xbox Series X|S Controller Skin</p>
                                    </div>
                                </td>
                                <td className="p-4 border-r border-[#9F9F9F15]">
                                    <p className="font-black">₦40,000</p>
                                    <p className="font-black removed">₦50,000</p>
                                </td>
                                <td className="p-4 border-r border-[#9F9F9F15]">
                                <div className="flex flex-row gap-6 mt-3 items-center">
                                    <button className="rounded-full h-8 w-8 bg-white flex items-center justify-center">-</button>
                                    1
                                    <button className="rounded-full h-8 w-8 bg-white flex items-center justify-center">+</button>
                                    </div>
                                </td>
                                <td className="px-4">
                                    <p className="font-black text-xl">₦40,000</p>
                                </td>
                            </tr>                            
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
