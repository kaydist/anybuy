
function ProductIndex({title, children}) {
    return (
    <section className="mt-20 w-full overflow-hidden">
        <div className="flex justify-between items-start w-full mb-4">
          <h3 className="font-extrabold text-xl">{title}</h3>
          <h3 className="">See All {`>`}</h3>
        </div>
          <div className="flex flex-row items-center sm:justify-between gap-8 overflow-x-auto overflow-y-hidden w-screen sm:w-full flex-nowrap pr-8 lg:px-0">
            {children}
          </div>
    </section>
    )
}

export default ProductIndex
