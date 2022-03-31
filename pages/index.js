import React from 'react'
import Image from 'next/image'
import {useRouter} from "next/router"

//component
import Product from '../components/product/product'
import Banner from '../components/Banner'
import Search from '../components/Search'

//images
import Airtime from "../assets/svgs/airtime.svg"
import Data from "../assets/svgs/data.svg"
import Ps4Pad from "../assets/images/ps4pad.png"
import XboxPad from "../assets/images/xboxpad.png"
import ProductIndex from '../components/product/ProductIndex'
import { DealOfTheDay, Gaming, Recommendation } from '../data/products'

export default function Home() {
  const router = useRouter()
  const categories=[
    {
      id: 1,
      name: "Gaming",
      title: "Gaming",
      thumbnail: "https://res.cloudinary.com/kaydist/image/upload/v1646751499/Anybuy/categories/Ellipse_2_tiutud.png"
    },
    {
      id: 2,
      name: "Speakers",
      title: "Speakers",
      thumbnail: "https://res.cloudinary.com/kaydist/image/upload/v1646751499/Anybuy/categories/Ellipse_3_ojmeqr.png"
    },
    {
      id: 3,
      name: "Phones",
      title: "Phones",
      thumbnail: "https://res.cloudinary.com/kaydist/image/upload/v1646751498/Anybuy/categories/Ellipse_5_h3zwkr.png"
    },
    {
      id: 4,
      name: "Laptops",
      title: "Laptops",
      thumbnail: "https://res.cloudinary.com/kaydist/image/upload/v1646751498/Anybuy/categories/Ellipse_6_ylxo7f.png"
    },
    {
      id: 5,
      name: "Laptops",
      title: "Laptops",
      thumbnail: "https://res.cloudinary.com/kaydist/image/upload/v1646751498/Anybuy/categories/Ellipse_6_ylxo7f.png"
    },
    {
      id: 6,
      name: "VR",
      title: "VR",
      thumbnail: "https://res.cloudinary.com/kaydist/image/upload/v1646751499/Anybuy/categories/Ellipse_7_calli1.png"
    },
  ]

  return (
    <>
    <section className="relative overflow-visible">
      <div className="flex justify-center flex-col items-center z-10 relative">
      <div className="flex justify-center flex-col items-start lg:items-center w-full px-4 text-white font-black mt-20">
          <h1 className="lg:text-4xl text-2xl">
          Buy the best Product
          </h1>
          <h1 className="lg:text-4xl text-2xl">
          at Affordable Prices
          </h1>
          <button className="btn mt-4 lg:hidden">Explore All</button>
      </div>
      
      <div className="mt-36 mb-12 lg:my-12 w-full">        
        <Search />
      </div>

      <div className="w-full overflow-hidden">
        <h3 className="font-extrabold text-xl text-white mb-4 w-full text-center">Recommeded for you</h3>
          <div className="flex flex-row lg:justify-center pr-8 lg:px-0 items-center gap-8 overflow-x-auto overflow-y-hidden w-screen lg:w-full flex-nowrap">
          {
            Recommendation.filter((product, idx) => idx < 3).map((product)=> {
              return(    
                  <Product 
                  key={product.id}
                  product={product}
                  />
              )
          })
          }
          </div>
      </div>
      </div>

      <div className="absolute w-full lg:h-[34rem] top-0 h-[18rem]">
        <div className="relative w-full h-full">
          <Image src={Ps4Pad} alt="" layout="fill" objectFit="fill"/>
        </div>
      </div>
    </section>

    <section className="mt-20 overflow-hidden">
      <h2 className="font-extrabold text-xl mb-4">Recharge Your Phone</h2>
      <div className="flex flex-row gap-8">

        <div className="card gap-2 flex flex-col items-center justify-center">
          <Image src={Airtime} alt="" height="50"/>
          <p>Airtime</p>
        </div>
        <div className="card gap-2 flex flex-col items-center justify-center">
          <Image src={Data} alt="" height="50"/>
          <p>Data</p>
        </div>
        
      </div>
    </section>

    <section className="mt-20 card overflow-hidden">
      <h2 className="font-extrabold text-xl mb-4">Categories</h2>
      <div className="flex flex-row items-center gap-8 overflow-x-auto overflow-y-hidden w-screen sm:w-full whitespace-nowrap flex-nowrap pr-8">

        {
          categories.map((category)=>{

          return(
            <div 
            key={category.id}
            className="gap-2 flex flex-col items-center justify-center"
            onClick={()=>{
              router.push({
                pathname: `/category/${category.name}`,
                query: category,
              })
            }}
            >
              <div className="rounded-full w-16 h-16 relative">
                <Image src={category.thumbnail} alt="" layout="fill"/>
              </div>
              <p>{category.name}</p>
            </div>
          )
          })
        }

      </div>
    </section>

    <ProductIndex title="Top Deals of the Day" link="deals-of-the-day">
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

    <Banner 
    image={XboxPad}
    info="Gaming at your Fingertips"
    btntext="Explore All"
    />

    <ProductIndex title="Gaming" link="gaming">
    {
      Gaming.filter((product, idx) => idx < 4).map((product)=> {
        return(    
          <Product 
          key={product.id}
          product={product}
          />
      )
    })
    }
    </ProductIndex>
    </>
  )
}
