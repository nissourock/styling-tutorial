import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import Product from './Product';
import { useQuery } from 'react-query'
import Select from 'react-select';
import Filter from './Filter';


let options = []
let pics = []

export async function fetchProducts() {
    const { data } = await axios.get('https://dummyjson.com/products/')
    console.log(data.products)
    return data
}






const Productwrapper2 = () => {

    const { data, error, isError, isLoading } = useQuery('products', fetchProducts)
    const [searchParams, setSearchParams] = useSearchParams()
    const mapOptions = () => {

        options = data.products.map(product =>
            ({ value: product.title, label: product.title }))
        return (options)
    };

    const theimages = () => {
        pics = data.products.images.map(pic =>
            ({ original: pic }))
        return (pics)
    };
    // first argument is a string to cache and track the query result
    if (isLoading) {
        return <div class="min-h-screen flex justify-center items-start p-12 bg-rose-100">

            <div class="loader bg-rose-100 p-5 rounded-full flex space-x-3">
                <div class="w-5 h-5 bg-rose-400 rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-rose-500 rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-rose-600 rounded-full animate-bounce"></div>

            </div>



        </div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
    console.log()
    console.log(mapOptions())
    const sort = searchParams.get('sort');
    console.log(sort)
    if (data) {

        if (sort === 'ascending') {
            const asc = data
            asc.products.sort((a, b) => a.price - b.price)
            return (
                <div className="bg-rose-100 ">

                    <div className="  py-16 px-36 sm:py-24 sm:px-2  lg:px-16 ">
                        <h2 className="text-5xl  mb-6 lg:ml-10 sm:ml-2 font-extrabold tracking-tight text-gray-900">Products</h2>
                        <h2 className="text-xl  mb-2 lg:ml-10 sm:ml-2 font-bold tracking-tight text-gray-500">Browse {Object.keys(data.products).length} products </h2>
                        <div class=' flex  mt-6 p-10 mb-32 w-full  justify-items-start'>
                            <Filter class='flex-none ' searchParams={searchParams} setSearchParams={setSearchParams} />
                            <div class='bg-black w-56 mx-6'>
                                <Select class='flex   bg-black w-2/3  '



                                    options={options} />
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">




                            {asc.products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="hover:scale-105 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 shadow-md rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img
                                            src={product.thumbnail}

                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                    </div>

                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link to={`/productview/${product.id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.brand}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${product.price}</p>

                                    </div>

                                </div>

                            ))}
                        </div>

                    </div>
                </div>)
        }

        if (sort === 'descending') {
            const des = data
            des.products.sort((a, b) => b.price - a.price)
            return (
                <div className="bg-rose-100">

                    <div className="  py-16 px-36 sm:py-24 sm:px-2  lg:px-16">
                        <h2 className="text-5xl  mb-6 lg:ml-10 sm:ml-2 font-extrabold tracking-tight text-gray-900">Products</h2>
                        <h2 className="text-xl  mb-2 lg:ml-10 sm:ml-2 font-extrabold tracking-tight text-gray-900">Browse {Object.keys(data.products).length} products </h2>
                        <div class=' flex  mt-6 p-10 mb-32 w-full  justify-items-start'>
                            <Filter class='flex-none ' searchParams={searchParams} setSearchParams={setSearchParams} />
                            <div class='bg-black w-56 mx-6'>
                                <Select class='flex   bg-black w-2/3  '



                                    options={options} />
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">




                            {des.products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 shadow-md rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img
                                            src={product.thumbnail}

                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link to={`/productview/${product.id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.brand}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>)
        }
        if (sort === 'alphabetical') {
            const alpha = data
            alpha.products.sort((a, b) => a.title.localeCompare(b.title))
            return (
                <div className="bg-rose-100">

                    <div className="  py-16 px-36 sm:py-24 sm:px-2  lg:px-16">
                        <h2 className="text-5xl  mb-6 lg:ml-10 sm:ml-2 font-extrabold tracking-tight text-gray-900">Products</h2>
                        <h2 className="text-xl  mb-2 lg:ml-10 sm:ml-2 font-extrabold tracking-tight text-gray-900">Browse {Object.keys(data.products).length} products </h2>
                        <div class=' flex  mt-6 p-10 mb-32 w-full  justify-items-start'>
                            <Filter class='flex-none ' searchParams={searchParams} setSearchParams={setSearchParams} />
                            <div class='bg-black w-56 mx-6'>
                                <Select class='flex   bg-black w-2/3  '



                                    options={options} />
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">




                            {alpha.products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 shadow-md rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img
                                            src={product.thumbnail}

                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link to={`/productview/${product.id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.brand}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>)
        }
    }
    // And lastly this shows all products, oof !
    if (sort === null) {

        return (
            <div className="bg-rose-100">

                <div className="  py-16 px-36 sm:py-24 sm:px-2  lg:px-16">
                    <h2 className="text-5xl  mb-6 lg:ml-10 sm:ml-2 font-extrabold tracking-tight text-gray-900">Products</h2>
                    <h2 className="text-xl  mb-2 lg:ml-10 sm:ml-2 font-extrabold tracking-tight text-gray-900">Browse {Object.keys(data.products).length} products </h2>
                    <div class=' flex  mt-6 p-10 mb-32 w-full  justify-items-start'>
                        <Filter class='flex-none ' searchParams={searchParams} setSearchParams={setSearchParams} />
                        <div class='bg-black w-56 mx-6'>
                            <Select class='flex   bg-black w-2/3  '



                                options={options} />
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">




                        {data.products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 shadow-md rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.thumbnail}

                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={`/productview/${product.id}`}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.brand}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default Productwrapper2;
