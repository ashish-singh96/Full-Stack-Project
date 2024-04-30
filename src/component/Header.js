import React from 'react'

const Header = () => {
    return (
        <header className="px-4 bg-[#d8d22e] fixed top-0 left-0 w-full z-50 ">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-6 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    <span className="mr-2 text-3xl text-blue-600">
                        <img src='../../Images/logo.svg' alt='logo' />
                    </span>

                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label
                    className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
                    htmlFor="navbar-open"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.88em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                </label>
                <nav
                    aria-label="Header Navigation"
                    className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
                >
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className="flex items-center">
                            <img src='../../Images/icon2.svg' alt='icon2' />
                            <img src='../../Images/icon1.svg' className='mx-4' alt='icon2' />
                            <a className="text-white mb-2">
                                My Booking
                            </a>
                        </li>
                        <li className="">
                            <a className="text-white">
                                Manage Booking
                            </a>
                        </li>
                        <li className="mt-2 sm:mt-0">
                            <div className="avatar">
                                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header