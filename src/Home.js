import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {Link} from 'react-router-dom'
import TypeAnimation from 'react-type-animation';
import  {useState, useEffect} from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
const [anim, setAnim] = useState(false)
useEffect(() => {
  setTimeout(() => {
    setAnim(!anim)
  }, 1000);
  
}, []);

  
  return (
    <div className="flex-1 relative  bg-rose-100 overflow-hidden">
      <div className="max-w-7xl mx-20">
        <div className="relative z-10 pb-8 bg-rose-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Votre boutique</span>{' '}
                <span className="block text-gray-500 xl:inline">sucrée</span>
              </h1>
              <p className="mt-3 p-10  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-all scale-110">
               {!anim? <div>Anis </div> : null}
               <TypeAnimation
      cursor={false}
      sequence={['La boutique génératrice de serotonine', 1500]}
      wrapper="p"
    />
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to='/products'
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-400 hover:bg-rose-600 md:py-4 md:text-lg md:px-10"
                  >
                    Commencer !
                  </Link>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://scontent.falg6-2.fna.fbcdn.net/v/t1.6435-9/84316186_2652449781529359_9027862935107534848_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=106&ccb=1-5&_nc_sid=2d5d41&efg=eyJpIjoidCJ9&_nc_ohc=-dPQOAAEPWYAX8RNxvC&_nc_ht=scontent.falg6-2.fna&oh=00_AT8iq9egjRiUCl-86DPi_cOQlwCbdJDiyG07FZLDUdbIkQ&oe=6265903B"
          alt=""
        />
      </div>
    </div>
  )
}