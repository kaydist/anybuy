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

function SearchResult() {
    const router = useRouter()
    const name = router.query.search
    const [searchData, setSearchData] = useState([])

    useEffect(()=>{
        const data = JSON.parse(sessionStorage.getItem('search'))
        setSearchData(data)
    }, [])
    return (
        <div>
            <header className="flex justify-between items-center my-8">
                <p className="text-3xl font-extrabold">Search for: “<span className="font-medium">{name}</span>”</p>
                <div className="relative">
                    <button className="outlined_btn flex items-center gap-2 rounded-lg px-2" onClick={()=> {filter()}}><Image src={FilterIcon} alt="" height="15" /> Filter</button>

                    <div className="card absolute top-100 right-0 z-30 hidden" id="filter">
                        <p>Price Option</p>
                        <div className="mt-10">
                            <ResizableSlider/>
                        </div>
                        <button className="btn float-right mt-10">Apply</button>
                    </div>
                </div>
                
            </header>
            
            {
                searchData.length !== 0
                ? <ProductContainer category={searchData} />
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

export default SearchResult
