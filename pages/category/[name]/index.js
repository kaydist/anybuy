import {useState} from "react"
import Image from "next/image"


//components
import Banner from '../../../components/Banner'
import ProductContainer from "../../../components/product/ProductContainer"
import ResizableSlider from "../../../components/slider"

//icons
import FilterIcon from "../../../assets/icons/filter.svg"

//images
import EarpodBanner from "../../../assets/images/earpod.png"

function categories({AllProducts}) {

    const filter=()=>{        
        document.getElementById("filter").classList.toggle("hidden")
        document.getElementById("filter").classList.toggle("block")
    }
    return (
        <div>
            <header className="flex justify-between items-center my-8">
                <p className="text-3xl font-extrabold">All Product</p>
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

            <ProductContainer category={AllProducts} />

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
        `http://localhost:3000/api/products`
    )

    const AllProducts = await res.json()

    return {
        props: {
            AllProducts
        }
    }
}

export default categories
