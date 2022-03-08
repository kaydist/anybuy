import React from 'react'
import Image from 'next/image'

//componrnets
import ProductIndex from '../../../components/product/ProductIndex'
import Product from '../../../components/product/product'
import Modal from '../../../components/Modal'

//image
import Earpod from "../../../assets/items/mHXOMt3WlF8.png"


//svgs
import ReviewCard from '../../../components/Review/ReviewCard'
import Rating from '../../../components/Review/Rating'
import SuccessImage from "../../../assets/svgs/success.svg"


export const Star=()=>{
    return(
        <svg width="20" height="20" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#C4C4C4">
            <path d="M4.95275 1.59459C5.2521 0.673281 6.55551 0.673281 6.85487 1.59459L7.35734 3.14105C7.49121 3.55307 7.87517 3.83203 8.3084 3.83203H9.93444C10.9032 3.83203 11.3059 5.07165 10.5222 5.64105L9.20673 6.59681C8.85624 6.85146 8.70958 7.30282 8.84346 7.71485L9.34593 9.2613C9.64528 10.1826 8.5908 10.9487 7.80709 10.3793L6.49159 9.42357C6.14111 9.16893 5.66651 9.16893 5.31602 9.42357L4.00053 10.3793C3.21681 10.9487 2.16233 10.1826 2.46169 9.2613L2.96416 7.71485C3.09804 7.30282 2.95138 6.85146 2.60089 6.59681L1.2854 5.64105C0.501681 5.07165 0.904457 3.83203 1.87318 3.83203H3.49922C3.93245 3.83203 4.3164 3.55307 4.45028 3.14105L4.95275 1.59459Z"/>
            </g>
        </svg>
    )
}

function item({product}) {
    const {id, name, image, discount, sellingPrice, originalPrice, about,  colors, rating, reviews } = product
    return (
        <>
        
            <div className="grid grid-rows-auto-fill lg:grid-rows-1 lg:grid-cols-2 lg:h-[25rem] gap-12">
                <div className="bg-white rounded-2xl h-full relative p-10 flex items-center justify-center">
                    <Image src={image} alt="Earpod" width="350" height="300" />
                </div>
                <div className="flex flex-col justify-between gap-6">
                    <h1 className="text-2xl font-bold max-w-[80%]">{name}</h1>
                    <div className="flex gap-4">
                        <p className="text-2xl font-black">₦{sellingPrice}</p>
                        <p className="text-2xl font-black removed">₦{originalPrice}</p>
                    </div>

                    <div>
                        <p>Select Color</p>
                        <div className="flex flex-row gap-6 mt-3">
                            {
                                colors.map((color) =>{
                                return (
                                    <div key={color.id} className="rounded-full h-8 w-8" style={{backgroundColor: `${color.color}`}}/>
                                )
                            }) 
                            }
                        </div>
                    </div>

                    <div>
                        <p>Quantity</p>
                        <div className="flex flex-row gap-6 mt-3 items-center">
                            <button className="rounded-full h-8 w-8 bg-white flex items-center justify-center">-</button>
                            1
                            <button className="rounded-full h-8 w-8 bg-white flex items-center justify-center">+</button>
                        </div>
                    </div>
                    
                    <div className="flex gap-6">
                        <button className="btn rounded-xl">Add to Cart</button>
                        <button className="btn rounded-xl bg-[#112211]">Buy Now</button>
                    </div>
                </div>
            </div>

            <section className="mt-16">
                <p className="font-extrabold text-xl">About Item</p>
                <p className="text-justify">
                    {about}
                </p>
            </section>

            <section className="mt-16">
                <p className="font-extrabold text-xl">Reviews (29)</p>

                <div className="flex justify-between flex-wrap">
                <div className="flex flex-col gap-6 lg:w-[65%] w-full py-6">
                    {
                        reviews.map((review) =>{
                            return (
                                <ReviewCard key={review.userId} review={review}/>
                            )
                        }) 
                    }
                </div>

                <div className="card w-full lg:w-[30%] flex flex-col gap-6 font-bold h-fit">
                    <p className="text-2xl">Ratings</p>

                    <div className="flex items-center">
                        <p className="mr-3 text-3xl">4.5</p>
                        <span><Star /></span>
                        <span><Star /></span>
                        <span><Star /></span>
                        <span><Star /></span>
                        <span><Star /></span>
                    </div> 

                    <Rating star="5" percent="58%"/>                
                    <Rating star="4" percent="28%"/>                
                    <Rating star="3" percent="38%"/>                
                    <Rating star="2" percent="58%"/>                
                    <Rating star="1" percent="68%"/>                
                </div>
                </div>

                

            </section>

            <ProductIndex title="Related Products">
                <Product 
                discount=""
                name="Apple Wireless Airpod"
                image={Earpod}
                sellingPrice="70,000"
                originalPrice="80,000"
                />
            </ProductIndex>
            
            <Modal>
                <div className="card w-[92%] md:w-[32rem] flex flex-col items-center gap-8">
                    <p className="w-full font-bold flex justify-end">X</p>
                    <Image src={SuccessImage} alt="success" height="100" />
                    <p className="font-bold">Item Added to Cart</p>
                    <div className="flex w-full gap-4">
                        <button className="w-full underline-offset-4 underline">Continue Shopping</button>
                        <button className="btn rounded-xl w-full">Proceed to Checkout</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export const getServerSideProps = async(context) =>{
    const res = await fetch (`http://localhost:3000/api/products/${context.params.id}`)

    const product = await res.json()

    return{
        props: {
            product
        }
    }
}

export default item