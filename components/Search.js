import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import SearchIcon from "../assets/icons/search.svg"
import { AllProducts } from '../data/products'

function Search() {
    const [search, setSearch] = useState("")
    const [result, setResult] =useState([])
    const router = useRouter()
    
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        router.push({
            pathname: '/search-result',
            query: { search },
          })
    }

    useEffect(() => {
        const filter = AllProducts.filter( x => {
            return(
                x.name.toLowerCase().includes(search.toLowerCase()) || x.cartegory.toLowerCase().includes(search.toLowerCase())
            )
        })

        if(search===""){
            setResult([])
        }else{
            setResult(filter)
        }
        sessionStorage.setItem('search', JSON.stringify(filter))
    }, [search])

    return (
    <div className="w-full h-fit flex justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-row gap-2 bg-white px-4 rounded-lg overflow-visible relative">
            <div className="p-3 my-2 w-10 h-10 bg-primary flex items-center justify-center rounded-full" onClick={handleSubmit}>
                <Image src={SearchIcon} alt="" height="100" />
            </div>

            <form onSubmit={handleSubmit} className="w-full">
                <input
                type="search"
                name="search"
                placeholder="Search Product"
                className="input w-full h-full border-0 m-0 py-0 focus:border-0"
                onChange={handleChange}
                value={search}
                />
            </form>
      </div>

        <div className="w-full lg:w-1/2 top-[55%] lg:top-[40%] bg-white absolute z-20">
            {
                result.map((item, idx) => {
                    return (
                        <div key={idx} className={"p-3"} 
                        onClick={(e)=>{
                            setSearch(e.currentTarget.innerText)
                        }}>{item.name}</div>                        
                    )
                })
            }
        </div>
    </div>
    )
}


export default Search
