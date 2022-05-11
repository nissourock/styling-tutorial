import React from 'react';
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon, MinusCircleIcon } from '@heroicons/react/outline'
import { useSelector } from "react-redux";
import { store, add ,remove, deleteitem} from "./store/state.js";
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { RemoveCircle, RemoveFromQueue } from '@material-ui/icons';

export default function Cart() {
  const cartProducts = useSelector((state)=> state)
  const dispatch = useDispatch()
    const CartProduct = ({cartproduct}) => {
      console.log(cartproduct)
      return (
        <div class="flex items-start pt-8 pb-12">
          <img
            class="object-cover w-16 h-20 border-2 border-black rounded-lg"
            src="../../photos/tee-green-person-2.png"
            alt="Basic Tee"
          />

          <div class="ml-4">
            <h3 class="text-sm">anis</h3>
            <h4 class="text-sm text-gray-600 mt-1">Price</h4>
            <dl class="mt-1 space-y-1 text-xs text-gray-500">
              <div>
                <dt class="inline">Size:</dt>
                <dd class="inline">XXS</dd>
              </div>

              <div>
                <dt class="inline">Color:</dt>
                <dd class="inline">White</dd>
              </div>
            </dl>
          </div>
        </div>

      )
    }






  return (
    
    <Popover className="relative">
        <Popover.Button> <ShoppingCartIcon className='w-10 h-10 mr-4'  
   /></Popover.Button>
  <Transition enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
  <Popover.Panel className="absolute z-10 right-4">
  <div
    id="popover"
  class="block p-10 sm:px-12 border-2 border-black bg-rose-100 rounded-b-xl shadow-[0_4px_0_0_rgba(0,0,0,1)] max-w-sm w-screen"
  aria-modal="true"
  aria-label="Item added to your cart"
  role="dialog"
  tabindex="-1"
>
  <div class="flex items-start justify-between">
    <h2 class="flex items-center text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>

      <span class="ml-2 text-sm"> Item added to your cart </span>
    </h2>

    <Popover.Button 
      class="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
      type="button"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      </Popover.Button>
  </div>
  {cartProducts.map((item,index) => <div key={index}>
    <div className="flex justify-between ">
      <div class="flex items-start pt-8 pb-12">
        <img
          class="object-cover w-16 h-20 border-2 border-black rounded-lg"
          src={item.thumbnail}
          alt="Basic Tee"
        />

        <div class="ml-4">
          <h3 class="text-sm">{item.title}</h3>
          <h4 class="text-sm text-gray-600 mt-1">Price: ${item.price}</h4>
          <dl class="mt-1 space-y-1 text-xs text-gray-500">
            <div>
              <dt class="inline">In stock: {item.stock>1 ? "Yes" : "No"} </dt>
              
            </div>

            <div>
              <dt class="inline">Brand: </dt>
              <dd class="inline">{item.brand}</dd>
            </div>
            <div>
              <dt class="inline">In cart: </dt>
              <dd class="inline">{item.quantity}</dd>
            </div>
           <button onClick={() => store.dispatch(deleteitem(item))} className='text-base text-gray-500 hover:text-rose-600 hover:underline hover:scale-105'> Remove </button>
          </dl>
        </div>
      </div>
      <div class=' flex mb-7 items-center'>
       <MinusCircleIcon onClick={() => store.dispatch(remove(item))}
        className='h-6 w-6 hover:text-rose-700 hover:scale-125 transition-all text-gray-500'/>
       
       <PlusCircleIcon onClick={() => store.dispatch(add(item))}
        className='h-6 w-6 hover:text-rose-700 hover:scale-125 transition-all text-gray-500'/>
        </div>
      
      </div>
      
    
  </div>) }
   
   

  <div class="space-y-4 text-center">
    <a
      class="block p-4 text-sm border-2 border-black rounded-full hover:ring-1 hover:ring-black shadow-[0_4px_0_0_rgba(0,0,0,1)] font-medium"
      href="/cart"
    >
      Total:  ${cartProducts.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)}
    </a>

    <form action="/cart" method="post">
    <Popover.Button         class="block w-full p-4 text-sm font-medium rounded-full text-yellow-50 bg-rose-600 hover:ring-1 hover:ring-rose-900"
>
      <Link to="/checkout"
        type="submit"
      >
        Check out
      </Link>
      </Popover.Button> 
    </form>
    <Popover.Button>
    <Link to='/products2'
      class="inline-block text-sm tracking-wide underline underline-offset-4 hover:text-2xl/75"
      href="/collections/all"
    >
      Continue shopping
    </Link>
    </Popover.Button>
  </div>
</div>
</Popover.Panel>
</Transition> 
</Popover>)
}