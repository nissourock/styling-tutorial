/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'nuka-carousel'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Product = ({product, review, price ,productid,imagelink, isSold, theproduct}) => {
  const [toggle, setToggle] = useState(true)
    const Productcarousel = ({theproduct}) => {
        return (
            
            
        <div class='  hover:scale-125 transition-all      rounded-2xl'>
        <Carousel class='' autoplay="true" autoplayInterval="2000"  >
        <img class="p-10 object-cover h-64 w-64 rounded-2xl "src={theproduct.images[1]}  />
        <img class="p-10 object-cover h-64 w-64 rounded-2xl " src={theproduct.images[2]}  />
        <img class="p-10 object-cover h-64 w-64 rounded-2xl "src={theproduct.images[3]}  />
        <img class="p-10 object-cover h-64 w-64 rounded-2xl " src={theproduct.images[4]}  />
        </Carousel>
        </div> 
                );
            }







    return(
  <div class="max-w-sm  bg-rose-200  text-gray-600 rounded-lg shadow-md  dark:border-gray-700">
            <div class=" h-64 w-64 " onMouseEnter={()=> {
                setToggle(!toggle)
          }}
        onMouseLeave={() => setToggle(!toggle)}>
          {toggle?(          <img class="hover:scale-125 transition-all p-10 object-cover h-64 w-64 rounded-2xl overflow-hidden " src={imagelink} alt="product image" />


          ):(<Productcarousel theproduct={theproduct}/>)}
            </div>
      <div class="px-5 pb-5">
          <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-">{product}</h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
              <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">LOL</span>
          </div>
          <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-700 ">${price}</span>
              
              <Link to={`/productview/${productid}`}  class="text-white bg-rose-400 hover:bg-rose-600 focus:ring-4 focus:ring-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</Link>
              
          </div>
          
      </div>
  </div>
  
  
    )









    
  };

  export default Product