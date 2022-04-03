import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../store/actions/quantityChange'

//icon

export const ShoppingIcon=()=>{
    return(
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="black">
        <path d="M6.06683 2.23926L3.06683 6.23926V20.2393C3.06683 20.7697 3.27755 21.2784 3.65262 21.6535C4.02769 22.0285 4.5364 22.2393 5.06683 22.2393H19.0668C19.5973 22.2393 20.106 22.0285 20.481 21.6535C20.8561 21.2784 21.0668 20.7697 21.0668 20.2393V6.23926L18.0668 2.23926H6.06683Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.06683 6.23926H21.0668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0668 10.2393C16.0668 11.3001 15.6454 12.3175 14.8953 13.0677C14.1451 13.8178 13.1277 14.2393 12.0668 14.2393C11.006 14.2393 9.98855 13.8178 9.23841 13.0677C8.48826 12.3175 8.06683 11.3001 8.06683 10.2393" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}

export const InCartShoppingIcon=()=>{
    return(
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="white" fill="red">
        <path d="M6.06683 2.23926L3.06683 6.23926V20.2393C3.06683 20.7697 3.27755 21.2784 3.65262 21.6535C4.02769 22.0285 4.5364 22.2393 5.06683 22.2393H19.0668C19.5973 22.2393 20.106 22.0285 20.481 21.6535C20.8561 21.2784 21.0668 20.7697 21.0668 20.2393V6.23926L18.0668 2.23926H6.06683Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.06683 6.23926H21.0668" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0668 10.2393C16.0668 11.3001 15.6454 12.3175 14.8953 13.0677C14.1451 13.8178 13.1277 14.2393 12.0668 14.2393C11.006 14.2393 9.98855 13.8178 9.23841 13.0677C8.48826 12.3175 8.06683 11.3001 8.06683 10.2393" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}

function Product({product}) {
    const dispatch = useDispatch()
    const AuthState = useSelector((state) => state.auth)
    const CartState = useSelector(state => state.cart.cart)
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
            const activeTypeId = image[0].id
            const quantity = 1

            const promising = new Promise((resolve)=>{
                resolve(1 * Number(sellingPrice))
            })
            promising.then((totalItemPrice)=> {
                dispatch(AddToCart({quantity, id, name, activeType, activeTypeId, sellingPrice, originalPrice, totalItemPrice}))
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
                    {   // checking if already in cart
                        CartState.find(item => item.id === id) === undefined
                        ? <ShoppingIcon />
                        : <InCartShoppingIcon />
                    }
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
