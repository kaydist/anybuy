import React, {useState, useEffect} from "react"
import Image from "next/image"
import { useRouter } from "next/dist/client/router"
import { server } from "../../../Config"


//components
import Banner from '../../../components/Banner'
import ProductContainer from "../../../components/product/ProductContainer"
import ResizableSlider from "../../../components/slider"
import EmptySearch from "../../../components/EmptySearch"

//icons
import FilterIcon from "../../../assets/icons/filter.svg"

//images
import EarpodBanner from "../../../assets/images/earpod.png"
import Notification from "../../../components/Notification"

import { OpenFilterNot } from "../../../animations/filter

function Categories({AllProducts}) {
    const router = useRouter()

    const filter=()=>{        
        document.getElementById("filter").classList.toggle("hidden")
        document.getElementById("filter").classList.toggle("block")
    }

    const [productArray, setProductArray] = useState(AllProducts)

    const [thumb, setThumb] = useState({
        lower: 10000,
        upper: 1000000
    })

    const filtering=()=>{
        const LowerThumb = document.querySelector(".horizontal-slider").childNodes[3].getAttribute("aria-valueNow")
        const UpperThumb = document.querySelector(".horizontal-slider").childNodes[4].getAttribute("aria-valueNow")

        setThumb({
            lower: Number(LowerThumb),
            upper: Number(UpperThumb)
        })

    }

    useEffect(() => {
        const filteredProducts = AllProducts.filter(product => {
            if(product.sellingPrice >= thumb.lower && product.sellingPrice <= thumb.upper){
                return product
            }
        })
        setProductArray(filteredProducts)
        
    }, [thumb])

    return (
        <div className="relative">
            <Notification message="Filters applied"/>

            <section className="flex justify-between items-center my-8">
                <p className="page_heading">{router.query.title}</p>
                <div className="relative">
                    <button className="outlined_btn flex items-center gap-2 rounded-lg px-2" onClick={()=> {filter()}}><Image src={FilterIcon} alt="" height="15" /> Filter</button>

                    <div className="card absolute top-100 right-0 z-30 hidden" id="filter">
                        <p>Price Option</p>
                        <div className="mt-10">
                            <ResizableSlider thumb={thumb}/>
                        </div>
                        <button className="btn float-right mt-10" 
onClick={()=>{
filtering
OpenFilterNot()
filter
}}
>Apply</button>
                    </div>
                </div>
                
            </section>

            {
                productArray.length !== 0
                ? <ProductContainer category={productArray} />
                : <EmptySearch />
            } 

            <Banner 
                image={EarpodBanner}
                info="The Future of voice information Sharing"
                btntext="Explore All"
            />
        </div>
    )
}

export const getServerSideProps = async() => {
    const res = await fetch(
        `${server}/api/products`
    )

    const AllProducts = await res.json()

    return {
        props: {
            AllProducts
        }
    }
}

export default Categories
