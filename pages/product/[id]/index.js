import React, {useState, useRef} from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { AddToCart } from '../../../store/actions/quantityChange';
import {gsap} from 'gsap';
import styled from 'styled-components';

//componrnets
import ProductIndex from '../../../components/product/ProductIndex'
import Product from '../../../components/product/product'
import Modal from '../../../components/Modal'
import ReactStars from 'react-rating-stars-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



//svgs
import ReviewCard from '../../../components/Review/ReviewCard'
import Rating from '../../../components/Review/Rating'
import SuccessImage from "../../../assets/svgs/success.svg"
import Link from 'next/link'

//data
import { DealOfTheDay } from '../../../data/products'


export const Star=({size})=>{
    return(
        <svg width={size} height={size} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
            <path d="M4.95275 1.59459C5.2521 0.673281 6.55551 0.673281 6.85487 1.59459L7.35734 3.14105C7.49121 3.55307 7.87517 3.83203 8.3084 3.83203H9.93444C10.9032 3.83203 11.3059 5.07165 10.5222 5.64105L9.20673 6.59681C8.85624 6.85146 8.70958 7.30282 8.84346 7.71485L9.34593 9.2613C9.64528 10.1826 8.5908 10.9487 7.80709 10.3793L6.49159 9.42357C6.14111 9.16893 5.66651 9.16893 5.31602 9.42357L4.00053 10.3793C3.21681 10.9487 2.16233 10.1826 2.46169 9.2613L2.96416 7.71485C3.09804 7.30282 2.95138 6.85146 2.60089 6.59681L1.2854 5.64105C0.501681 5.07165 0.904457 3.83203 1.87318 3.83203H3.49922C3.93245 3.83203 4.3164 3.55307 4.45028 3.14105L4.95275 1.59459Z"/>
            </g>
        </svg>
    )
}

function item({product}) {
    let currentScreenWidth = useSelector((state)=> state.screenSize);
    const productImageContainer = useRef(null)
    const [activeColor, setActiveColor] = useState(0) 

    const dispatch = useDispatch()
    const {id, name, image, discount, sellingPrice, originalPrice, about,  colors, rating, reviews } = product

    //quantity of items
    const [quantity, setQuantity] = useState(1)

    const Increment=()=>{
        setQuantity(quantity + 1)
    }

    const Decrement=()=>{
        if(quantity <= 1){
            setQuantity(quantity = 1)
        }else{
            setQuantity(quantity - 1)
        }
    }


    const swatching =(e, index)=>{
        const swatches = document.querySelectorAll(".swatches")
        const productImages = document.querySelectorAll(".product-image-container")
        const coord = productImages[index].getBoundingClientRect().width * index
        setActiveColor(index)
        
        swatches.forEach((swatch)=>{
            swatch.classList.remove("after:border-2")
        })
        let swatchColor = e.target.getAttribute("swatch")
        e.target.classList.add("after:border-2")
        e.target.classList.add("after:border-["+swatchColor+"]")
        
        gsap.to(productImageContainer.current, {
            x: -coord, duration: 1, ease: "Power2.easeOut"
        })
        
    }

    const ActiveTab = styled.div`

        div .react-tabs__tab {
            display: inline-block;
            border: 1px solid transparent;
            border-bottom: #ff6915;
            bottom: -1px;
            position: relative;
            list-style: none;
            padding: 6px 12px;
            cursor: pointer;
        }

        div .react-tabs__tab--selected {
            background: none;
            border-bottom: 0.2rem solid #ff6915;
            border-left: 0;
            border-top: 0;
            border-right: 0;
    }`;

    return (
        <>
            
        
            <div className="grid grid-rows-auto-fill lg:grid-rows-1 lg:grid-cols-2 lg:h-[25rem] gap-12">
                <div className="lg:bg-white bg-[#DEDEDE] h-[18rem] w-screen lg:w-full lg:rounded-2xl lg:h-full -mx-3 p-6 overflow-hidden">
                <div className="h-full flex items-center justify-start" ref={productImageContainer}>
                    {
                        image.map((image)=>{
                            return(                                
                                <div className="relative min-w-full h-full product-image-container" >
                                    <Image src={image.picture} alt="Earpod" layout="fill" />
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                <div className="flex flex-col justify-between gap-6">
                    <h1 className="text-2xl font-bold max-w-[80%]">{name}</h1>
                    <div className="flex gap-4">
                        <p className="text-2xl font-black">₦{sellingPrice}</p>
                        <p className="text-2xl font-black removed">₦{originalPrice}</p>
                    </div>

                    <div className="flex flex-wrap lg:flex-col justify-between gap-x-8 gap-y-6">
                    <div>                                                            
                        <p className="font-bold">Select Color</p>
                        <div className="flex flex-row gap-6 mt-3">
                            {
                                image.map((color, index) =>{
                                return (
                                    <div 
                                    key={color.id} 
                                    className="rounded-full h-6 w-6 p-1 z-[2] relative swatches after:h-8 after:w-8 after:border-2 after:rounded-full after:block after:absolute after:-top-1 after:-left-1 after:mt-0" 
                                    style={{backgroundColor: `${color.color}`}}
                                    swatch={color.color}
                                    onClick={(e)=> swatching(e, index)}
                                    
                                    />
                                    
                                )
                            }) 
                            }
                        </div>
                    </div>

                    <div>
                        <p>Quantity</p>
                        <div className="flex flex-row gap-6 mt-3 items-center">
                            <button className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
                            onClick={Decrement}>-</button>
                            {quantity}
                            <button 
                            className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
                            onClick={Increment}
                            >+</button>
                        </div>
                    </div>
                    </div>
                    {
                        currentScreenWidth === "isMobile"

                        ? <div className="flex gap-6 fixed bottom-0 py-3 justify-around z-40 bg-body-bg -mx-6 p-6 w-full">
                            <button 
                            className="btn rounded-xl w-full h-12"
                            onClick={()=> {
                                const activeType = image[activeColor].picture
                                const promising = new Promise((resolve)=>{
                                    resolve(quantity * Number(sellingPrice))
                                })
                                promising.then((totalItemPrice)=> {
                                    dispatch(AddToCart({quantity, id, name, activeType, sellingPrice, originalPrice, totalItemPrice}))
                                })
                                
                            }} 
                                >
                                    Add to Cart
                            </button>
                            <Link href="/cart"><button className="btn rounded-xl w-full bg-[#112211]">Buy Now</button></Link>
                        </div>

                        : <div className="flex gap-6">
                            <button 
                            className="btn rounded-xl"
                            onClick={()=> {
                                const activeType = image[activeColor].picture
                                const promising = new Promise((resolve)=>{
                                    resolve(quantity * Number(sellingPrice))
                                })
                                promising.then((totalItemPrice)=> {
                                    dispatch(AddToCart({quantity, id, name, activeType, sellingPrice, originalPrice, totalItemPrice}))
                                })
                                
                            }} 
                                >
                                    Add to Cart
                            </button>
                            <Link href="/cart"><button className="btn rounded-xl bg-[#112211]">Buy Now</button></Link>
                            </div>
            }
                    
                    
                </div>
            </div>

            {
                currentScreenWidth === "isMobile"

                ? <div className="mt-12">
                <ActiveTab>
                <Tabs>    
                    <TabList className="font-extrabold text-xl border-b border-muted">
                        <Tab>Description</Tab>
                        <Tab>Reviews (29)</Tab>
                    </TabList>

                    <TabPanel>
                    <p className="text-justify mt-6">
                        {about}
                    </p>
                    </TabPanel>

                    <TabPanel>
                    <div className="flex justify-between flex-wrap">
                        <div className="flex flex-col gap-6 lg:w-[65%] w-full py-6">
                            {
                                reviews.map((review) =>{
                                    return (
                                        <ReviewCard key={review.userId} star={<Star size="11"/>} review={review}/>
                                    )
                                }) 
                            }
                        </div>

                        <div className="card w-full lg:w-[30%] flex flex-col gap-6 font-bold h-fit">
                            <p className="text-2xl">Ratings</p>

                            <div className="flex items-center">
                                <p className="mr-3 text-3xl">4.5</p>
                                <ReactStars 
                                count= {5}
                                value= {4.5}
                                char= {<Star size="20"/>}
                                isHalf= {false}
                                activeColor= '#FF9315'
                                />                        
                            </div> 

                            <Rating star="5" percent="58%"/>                
                            <Rating star="4" percent="28%"/>                
                            <Rating star="3" percent="38%"/>                
                            <Rating star="2" percent="58%"/>                
                            <Rating star="1" percent="68%"/>                
                        </div>
                        </div>

                        
                    </TabPanel>
                </Tabs>
                
                
                </ActiveTab>
                </div>

                :<div>
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
                                    <ReviewCard key={review.userId} star={<Star size="11"/>} review={review}/>
                                )
                            }) 
                        }
                    </div>

                    <div className="card w-full lg:w-[30%] flex flex-col gap-6 font-bold h-fit">
                        <p className="text-2xl">Ratings</p>

                        <div className="flex items-center">
                            <p className="mr-3 text-3xl">4.5</p>
                            <ReactStars 
                            count= {5}
                            value= {4.5}
                            char= {<Star size="20"/>}
                            isHalf= {false}
                            activeColor= '#FF9315'
                            />                        
                        </div> 

                        <Rating star="5" percent="58%"/>                
                        <Rating star="4" percent="28%"/>                
                        <Rating star="3" percent="38%"/>                
                        <Rating star="2" percent="58%"/>                
                        <Rating star="1" percent="68%"/>                
                    </div>
                    </div>

                </section>
                </div>
            }

            <aside className="mb-20">
            <ProductIndex title="Top Deals of the Day">
                {
                    DealOfTheDay.filter((product, idx) => idx < 4).map((product)=> {
                    return(    
                        <Product 
                        key={product.id}
                        product={product}
                        />
                    )
                })
                }
            </ProductIndex>
            </aside>
            
            <Modal>
                <div className="card w-[92%] md:w-[32rem] flex flex-col items-center gap-8">
                    <p className="w-full font-bold flex justify-end">X</p>
                    <Image src={SuccessImage} alt="success" height="100" />
                    <p className="font-bold">Item Added to Cart</p>
                    <div className="flex w-full gap-4">
                        <button className="w-full underline-offset-4 underline">Continue Shopping</button>
                        <Link href="/cart"><button className="btn rounded-xl w-full">Proceed to Checkout</button></Link>
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