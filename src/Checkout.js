import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux';
import { store, add, remove } from "./store/state.js";




const Checkout = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch();
  const Modal = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }

    function openModal() {
      setIsOpen(true)
    }
    return (<div className=''>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center px-3 py-2 bg-rose-600 text-white text-sm font-medium rounded-md hover:bg-rose-500 focus:outline-none focus:bg-rose-500"
        >
          <span>Payment</span>

          <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-rose-50 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Commande en attente de confirmation
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Un conseiller va vous contacter afin de confirmer votre commande, merci pour votre confiance !
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-rose-400 border border-transparent rounded-md hover:bg-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-600"
                    onClick={closeModal}
                  >
                    Comprendu
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>

    )
  }


  const Disclosures = () => {
    return (<div className='border-2 p-6'>
      <h1 className='text-lg   text-warmGray-600'>FAQ</h1>
      <div className="w-full  pt-10">
        <div className="w-full max-w-md p-2  bg-rose-50 rounded-md">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-rose-900 bg-rose-200 rounded-sm hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  <span>Quel est le délai de livraison habituel ?</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-rose-500`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-300 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-300 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Nta w zahrek chriki
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-rose-900 bg-rose-200 rounded-sm hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  <span>Ai-je la garantie de ne pas me faire aggresser par le livreur ?</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-rose-500`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-150 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Non.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div></div>
    )
  }
















  return (
    <div className='bg-rose-100'>







      <div class="container mx-auto px-20 py-10 ">
        <h3 class="text-gray-700 text-2xl font-medium">Checkout</h3>
        <div class="flex flex-col lg:flex-row mt-8">
          <div class="w-full lg:w-1/2 order-2">

            <form class="mt-8 lg:w-3/4">
              <div>
                <h4 class="text-sm text-gray-500 font-medium">Delivery method</h4>
                <div class="mt-6">
                  <button class="flex items-center justify-between w-full bg-white rounded-md border-2 border-rose-500 p-4 focus:outline-none">
                    <label class="flex items-center">
                      <input type="radio" class="form-radio h-5 w-5 text-rose-600" checked /><span class="ml-2 text-sm text-gray-700">Quick Delivery</span>
                    </label>

                    <span class="text-gray-600 text-sm">$18</span>
                  </button>
                  <button class="mt-6 flex items-center justify-between w-full bg-white rounded-md border p-4 focus:outline-none">
                    <label class="flex items-center">
                      <input type="radio" class="form-radio h-5 w-5 text-rose-600" /><span class="ml-2 text-sm text-gray-700">I'll take my time bro, don't stress me out</span>
                    </label>

                    <span class="text-gray-600 text-sm">$26</span>
                  </button>
                </div>
              </div>
              <div class="mt-8">
                <h4 class="text-sm text-gray-500 font-medium">Delivery address</h4>
                <div class="mt-6 flex">
                  <label class="block w-5/12">
                    <select class="form-select text-gray-700 mt-1 block w-full">
                      <option>Alger-centre</option>
                      <option>Hydra</option>
                      <option>Rouiba</option>
                      <option>Sidi Yahia</option>
                    </select>
                  </label>
                  <label class="block flex-1 ml-3">
                    <input type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="Address" />
                  </label>
                </div>
              </div>
              <div class="mt-8">
                <h4 class="text-sm text-gray-500 font-medium">Date</h4>
                <div class="mt-6 flex">
                  <label class="block flex-1">
                    <input type="date" class="form-input mt-1 block w-full text-gray-700" placeholder="Date" />
                  </label>
                </div>
              </div>
              <div class="flex items-center justify-between mt-8">


                <Modal />
              </div>
            </form>
          </div>
          <div class="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
            <div class="flex justify-center lg:justify-end">
              <div class="border rounded-md max-w-md w-full px-4 py-3">
                <div class="flex items-center justify-between">
                  <h3 class="text-gray-700 font-medium">Order total ({products.length})</h3>
                  <span class="text-gray-600 text-lg">${products.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)}</span>
                </div>
                {products.map(item => {
                  return (<div class="flex justify-between mt-6">
                    <div class="flex">
                      <img class="h-20 w-20 object-cover rounded" src={item.thumbnail} alt="" />
                      <div class="mx-3">
                        <h3 class="text-sm text-gray-600">{item.title}</h3>
                        <div class="flex items-center mt-2">
                          <button class="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => store.dispatch(add(item))}>
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                          <span class="text-gray-700 mx-2">{item.quantity}</span>
                          <button class="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => store.dispatch(remove(item))}>
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <span class="text-gray-600">${item.price * item.quantity}</span>
                  </div>)
                })}


              </div>
            </div>
            <Disclosures />
          </div>

        </div>

      </div>


    </div>
  );
}

export default Checkout;
