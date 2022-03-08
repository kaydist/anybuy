import Image from 'next/image'

function Banner({image, info, btntext}) {
    return (
        <section className="mt-20 relative w-full lg:h-80 h-64">
      <Image src={image} alt="" layout="fill" />
      <div className="flex flex-col justify-center gap-4 lg:justify-between items-start h-full py-2 px-6 lg:py-24 lg:px-14 absolute text-white z-10">
        <h2 className="text-3xl font-extrabold lg:max-w-[20rem]">{info}</h2>
        <button className="btn">{btntext}</button>
      </div>
    </section>
    )
}

export default Banner
