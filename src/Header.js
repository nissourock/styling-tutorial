import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import Cart from './Cart'
import Navbar from './components/Navbar'


import { useSelector } from 'react-redux'
import { Switch } from '@headlessui/react'
const Header = () => {


    const cartCount = useSelector((state) => state)

    return (
        <> <div class='bg-gradient-to-b from-rose-400 to-rose-100'>
            <div class={'   flex top-0   '}>

                <Link to="/home" class={"sm:block md:block lg:ml-20  text-6xl text-rose-50 p-12  font-thin "}>La Boutique </Link>


                <div class={"  p-10 "}>

                </div>



            </div>


            <nav class="  px-2 sm:px-4 py-2.5 shadow-2xl  ">
                <div class="container flex  justify-between items-center mx-auto">
                    <div></div>
                    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-lg
                    text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg
                    md:font-medium">

                            <li>
                                <NavLink to="/home" className={({ isActive }) =>
                                    (isActive ? "text-rose-400" : "not-active-class")} class="block py-2 pr-4 pl-3 text-white bg-blue-200 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/products" className={({ isActive }) =>
                                    (isActive ? "text-rose-400" : "not-active-class")} class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products2" className={({ isActive }) =>
                                    (isActive ? "text-rose-400" : "not-active-class")} class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products 2</NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact" className={({ isActive }) =>
                                    (isActive ? "text-rose-400" : "not-active-class")} class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products3" className={({ isActive }) =>
                                    (isActive ? "text-rose-400" : "not-active-class")} class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products 3</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className={({ isActive }) =>
                                    (isActive ? "text-rose-400" : "not-active-class")} class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</NavLink>
                            </li>
                            <li>
                                <div className='relative  '>
                                    <div className="absolute bottom-8 left-9 ">{cartCount.length}</div>
                                    <Cart />

                                </div>
                            </li>
                        </ul>
                    </div>
                 
                </div>
                <Navbar/>
            </nav>

            
        </div>
            

        </>
    )
};


export default Header;