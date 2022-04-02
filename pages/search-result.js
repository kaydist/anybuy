import React, {useState, useEffect} from "react"
import Image from "next/image"
import {useRouter} from "next/router"
import { AllProducts } from "../data/products"


//components
import Banner from '../components/Banner'
import ProductContainer from "../components/product/ProductContainer"
import ResizableSlider from "../components/slider"

//images
import EarpodBanner from "../assets/images/earpod.png"

//icons
import FilterIcon from "../assets/icons/filter.svg"
import EmptySearch from "../components/EmptySearch"

import { OpenFilterNot } from "../animations/filter"

function SearchResult() {
    const router = useRouter()
    const name = router.query.search
    const [searchData, setSearchData] = useState([])

    const filter=()=>{        
        document.getElementById("filter").classList.toggle("hidden")
        document.getElementById("filter").classList.toggle("block")
    }

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

    useEffect(()=>{
        const data = JSON.parse(sessionStorage.getItem('search'))
        const filteredProducts = data.filter(product => {
            if(product.sellingPrice >= thumb.lower && product.sellingPrice <= thumb.upper){
                return product
            }
        })
        setSearchData(filteredProducts)
    }, [thumb])




    return (
        <div>
            <header className="flex justify-between gap-8 items-center my-8">
                <p className="page_heading text-2xl lg:text-3xl overflow-hidden whitespace-nowrap text-ellipsis">Search for: “<span className="font-medium">{name}</span>”</p>
                <div className="relative">
                    <button className="outlined_btn flex items-center gap-2 rounded-lg px-2" onClick={()=> {filter()}}><Image src={FilterIcon} alt="" height="15" /> Filter</button>

                    <div className="card absolute top-100 right-0 z-30 hidden" id="filter">
                        <p>Price Option</p>
                        <div className="mt-10">
                            <ResizableSlider thumb={thumb}/>
                        </div>
                        <button className="btn float-right mt-10" onClick={()=>{
filtering
OpenFilterNot()
filter
}}>Apply</button>
                    </div>
                </div>
                
            </header>
            
            {
                searchData.length !== 0
                ? <ProductContainer category={searchData} />
                : <EmptySearch heading="Product Not Found" message="sorry, we could not find your product. check out
                some other great products"/>
            } 


            <Banner 
                image={EarpodBanner}
                info="The Future of voice information Sharing"
                btntext="Explore All"
            />
        </div>
    )
}

export default SearchResult
