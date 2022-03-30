import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../store/actions/quantityChange'

//icon
import ShoppingIcon from "../../assets/icons/shopping-bag.svg"

function Product({product}) {
    const dispatch = useDispatch()
    const AuthState = useSelector((state) => state.auth)
    const router = useRouter()

    const route =()=>{
        router.push(`/product/${id}`)
    }

    const {
        id, name, thumbnail, image, discount, sellingPrice, originalPrice
    } = product

    const AddtocartFunction=()=>{
        if(AuthState.currentUser === null){
            router.push(`/auth/login`)
        }else{      

            const activeType = image[0].picture
            const quantity = 1

            const promising = new Promise((resolve)=>{
                resolve(1 * Number(sellingPrice))
            })
            promising.then((totalItemPrice)=> {
                dispatch(AddToCart({quantity, id, name, activeType, sellingPrice, originalPrice, totalItemPrice}))
            })

        }
    }
    
    return (
        <>
        <div className="card p-4 min-w-[10rem] h-60 lg:w-60 lg:h-80 relative flex justify-between flex-col" id="ProductCard">
            <div className="flex justify-between">
                <div><p className="rounded-lg p-1 text-sm bg-notification-bg">{discount}</p></div>
                <div 
                className="hover:cursor-pointer"
                onClick={AddtocartFunction}>
                    <Image src={ShoppingIcon} alt="Earpod" height="22" />
                </div>
            </div>

            <div className="h-full flex justify-between flex-col" onClick={route}>
                <div className="h-[60%] lg:h-full flex justify-between items-center relative">
                        <Image src={thumbnail} alt="Earpod" layout="fill" className="scale(0.8)" />
                </div>
                
                <div>
                <p className="text-sm md:text-base w-full max-h-1/4 text-ellipsis whitespace-normal">{name}</p>
                <p className="mr-2 inline-block text-xs font-black">₦{sellingPrice}</p>
                <p className="mr-2 inline-block text-xs font-black removed">₦{originalPrice}</p>
                </div>
            </div>
        </div>

      </>
    )
}

export default Product
