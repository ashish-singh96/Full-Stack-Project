import React from 'react'

const BannerPage = () => {
    return (

        <>
            <img src='../../Images/banner.jpg' alt='bannar Image' className='object-fit mb-0' />

            <section className="">
                <div className="py-10 mx-10 grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden pb-2 ">
                        <a className="block h-full w-full">
                            <img
                                className="max-h-[15rem] w-full object-fit rounded-lg "
                                alt="featured image"
                                src="../../Images/img1.jpg"
                            />

                        </a>
                    </article>
                    <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden pb-2">
                        <a className="block h-full w-full">
                            <img
                                className="max-h-[15rem] w-full object-fit rounded-lg "
                                alt="featured image"
                                src="../../Images/img2.png"
                            />
                        </a>
                    </article>

                </div>

                <div className='flex mx-10'>
                <img src='../../Images/ele.png' className='w-8' alt='ele1'/>
                    <h1 className='text-5xl  font-bold  text-[#1e1e26]'>Electrifying Offers</h1>
                </div>
            </section>

        </>

    )
}

export default BannerPage