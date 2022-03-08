import Image from 'next/image'
import Link from 'next/link'

//icon
import ShoppingIcon from "../../assets/icons/shopping-bag.svg"


function Product({id, name, image, sellingPrice, originalPrice, discount}) {
    return (
        <>
        <Link href="/product/[id]" as={`/product/${id}`}>
        <div className="card min-w-[11rem] h-60 lg:w-60 lg:h-80 relative flex justify-between flex-col">
            <div className="flex justify-between">
                <div><p className="rounded-lg p-1 text-sm bg-notification-bg">{discount}</p></div>
                <div><Image src={ShoppingIcon} alt="Earpod" height="22" /></div>
            </div>
            <div className="h-[60%] lg:h-[60%] relative">
                <Image src={image} alt="Earpod" layout="fill" />
            </div>
            
            <div>
            <p className="text-sm md:text-base w-full max-h-1/4 text-ellipsis whitespace-normal">{name}</p>
            <p className="mr-2 inline-block text-xs font-black">₦{sellingPrice}</p>
            <p className="mr-2 inline-block text-xs font-black removed">₦{originalPrice}</p>
            </div>
        </div>
        </Link>

      </>
    )
}

export default Product
