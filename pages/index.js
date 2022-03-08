import Head from 'next/head'
import Image from 'next/image'

//component
import Product from '../components/product/product'
import Banner from '../components/Banner'

//icon
import SearchIcon from "../assets/icons/search.svg"

//items
import Earpod from "../assets/items/mHXOMt3WlF8.png"

//images
import Airtime from "../assets/svgs/airtime.svg"
import Data from "../assets/svgs/data.svg"
import Ps4Pad from "../assets/images/ps4pad.png"
import XboxPad from "../assets/images/xboxpad.png"
import ProductIndex from '../components/product/ProductIndex'
import { DealOfTheDay, Gaming, Recommendation } from '../data/products'

export default function Home() {
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
      
      <div className="w-full lg:w-1/2 flex flex-row gap-2 bg-white px-4 rounded-lg mt-36 mb-12 lg:my-12 overflow-visible">
        <div className="p-3 my-2 w-10 h-10 bg-primary flex items-center justify-center rounded-full"><Image src={SearchIcon} alt="" height="100" /></div>
        <input
          type="search"
          name="search"
          placeholder="Search Product"
          className="input w-full border-0 m-0 py-0 focus:border-0"
        />
      </div>

      <div className="w-full overflow-hidden">
        <h3 className="font-extrabold text-xl text-white mb-4 w-full text-center">Recommeded for you</h3>
          <div className="flex flex-row lg:justify-center pr-8 lg:px-0 items-center gap-8 overflow-x-auto overflow-y-hidden w-screen lg:w-full flex-nowrap">
          {
            Recommendation.filter((product, idx) => idx < 3).map((product)=> {
              const {
                  id,
                  name,
                  image,
                  originalPrice,
                  discount,
                  sellingPrice
              } = product

              return(    
                  <Product 
                  key={id}
                  id={id}
                  discount={discount}
                  name={name}
                  image={image}
                  sellingPrice={sellingPrice}
                  originalPrice={originalPrice}
                  />
              )
          })
          }
          </div>
      </div>
      </div>

      <div className="absolute w-full lg:h-[34rem] top-0 h-[18rem]">
        <Image src={Ps4Pad} alt="" layout="fill"/>
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
        
        <div className="card gap-2 flex flex-col items-center justify-center">
          <div className="rounded-full w-16 h-16 relative bg-black"><Image src={Airtime} alt="" layout="fill"/></div>
          <p>Gaming</p>
        </div>
        <div className="card gap-2 flex flex-col items-center justify-center">
          <div className="rounded-full w-16 h-16 relative bg-black"><Image src={Airtime} alt="" layout="fill"/></div>
          <p>Gaming</p>
        </div>
        <div className="card gap-2 flex flex-col items-center justify-center">
          <div className="rounded-full w-16 h-16 relative bg-black"><Image src={Airtime} alt="" layout="fill"/></div>
          <p>Gaming</p>
        </div>
        <div className="card gap-2 flex flex-col items-center justify-center">
          <div className="rounded-full w-16 h-16 relative bg-black"><Image src={Airtime} alt="" layout="fill"/></div>
          <p>Gaming</p>
        </div>

      </div>
    </section>

    <ProductIndex title="Top Deals of the Day">
    {
      DealOfTheDay.filter((product, idx) => idx < 4).map((product)=> {
        const {
            id,
            name,
            image,
            originalPrice,
            discount,
            sellingPrice
        } = product

        return(    
            <Product 
            key={id}
            id={id}
            discount={discount}
            name={name}
            image={image}
            sellingPrice={sellingPrice}
            originalPrice={originalPrice}
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

    <ProductIndex title="Gaming">
    {
      Gaming.filter((product, idx) => idx < 4).map((product)=> {
        const {
            id,
            name,
            image,
            originalPrice,
            discount,
            sellingPrice
        } = product

        return(    
            <Product 
            key={id}
            id={id}
            discount={discount}
            name={name}
            image={image}
            sellingPrice={sellingPrice}
            originalPrice={originalPrice}
            />
        )
    })
    }
    </ProductIndex>
    </>
  )
}
