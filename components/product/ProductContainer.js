
//component
import Product from './product'


function ProductContainer({category}) {
    return (
        <section className="grid grid-flow-row lg:grid-cols-4 grid-cols-auto-fill gap-10 w-full overflow-hidden">
            {
                category.map((product, idx) => {
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
        </section>
    )
}

export default ProductContainer
