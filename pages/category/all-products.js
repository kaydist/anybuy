import React, {useState, useEffect} from "react"
import Image from "next/image"
import { useRouter } from "next/dist/client/router"


//components
import Banner from '../../components/Banner'
import ProductContainer from "../../components/product/ProductContainer"
import ResizableSlider from "../../components/slider"

//icons
import FilterIcon from "../../assets/icons/filter.svg"

//images
import EarpodBanner from "../../assets/images/earpod.png"
import Notification from "../../components/Notification"

function AllProductsPage({AllProducts}) {
    const router = useRouter()

    const filter=()=>{        
        document.getElementById("filter").classList.toggle("hidden")
        document.getElementById("filter").classList.toggle("block")
    }

    const [productArray, setProductArray] = useState(AllProducts)

    const [thumb, setThumb] = useState({
        lower: 0,
        upper: 10000000
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
            <Notification message="Filters applied" />
            <header className="flex justify-between items-center my-8">
                <p className="text-3xl font-extrabold">All Products</p>
                <div className="relative">
                    <button className="outlined_btn flex items-center gap-2 rounded-lg px-2" onClick={()=> {filter()}}><Image src={FilterIcon} alt="" height="15" /> Filter</button>

                    <div className="card absolute top-100 right-0 z-30 hidden" id="filter">
                        <p>Price Option</p>
                        <div className="mt-10">
                            <ResizableSlider thumb={thumb} onclick={e =>{}}/>
                        </div>
                        <button className="btn float-right mt-10" onClick={filtering}>Apply</button>
                    </div>
                </div>
                
            </header>

            <ProductContainer category={productArray} />
            

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

export default AllProductsPage
