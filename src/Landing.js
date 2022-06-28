import React from 'react'
import styles from './landing.module.css';
import headerpic from './images/desktop/image-header.jpg'
import egg from './images/desktop/image-transform.jpg'
import gobelet from './images/desktop/image-stand-out.jpg'
import cherry from './images/desktop/image-graphic-design.jpg'
import orange from './images/desktop/image-photography.jpg'
import emily from './images/image-emily.jpg'
import milk from './images/desktop/milk.jpg'
import bowl from './images/desktop/bowl.jpg'
import cornet from './images/desktop/cornet.jpg'
import sugar from './images/desktop/sugar.jpg'

import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import arrow from './images/icon-arrow-down.svg'
import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';

// style={{
//   backgroundImage: `url(${headerpic})`
// }}

export default function Landing() {
  return (<div className='flex flex-col '>
    <div className={styles.bgimage} >
      
      <div className='flex justify-between p-10  top-0 bg-niceBlue h-2'>
        <div className='font-[barlow] text-2xl text-white'>Sunnyside</div>
        <div className='flex items-center text-white font-[fraunces]'>
          <a className='mx-2 hover:bg-white hover:text-black p-2 hover:rounded-3xl cursor-pointer'>About</a>
          <a className='mx-2 hover:bg-white hover:text-black p-2 hover:rounded-3xl cursor-pointer' href='#products'>Services</a>
          <a className='mx-2 hover:bg-white hover:text-black p-2 hover:rounded-3xl' href='#brand'>Products</a>
          <a className='mx-2 hover:bg-white hover:text-black p-2 hover:rounded-3xl' href='#testimonies'>Testimonies</a>

          <a className='mx-2 hover:bg-white hover:text-black p-2 hover:rounded-3xl'>Contact</a>
        </div>

      </div>
      <div>
      <h1 className=' sticky top-0 my-6 text-center wrap mx-auto h-10 my-32 font-[fraunces] text-7xl text-white font-bold '>EVOLVE YOUR BRAND</h1>
      </div>
      <img src={arrow} className='mx-auto  sticky top-20 my-6 '></img>
     

    </div>
  
    <div className='flex flex-row'>
    
      <div className='basis-1/2  flex flex-col justify-around items-center' id='products'>
      <Fade left>
        
        <div  className='w-3/4 font-[fraunces] text-xl sm:text-4xl'>Make your website stand out</div>
        <div className='w-3/4 font-[harlow] sm:text-lg text-gray-700' >We are a full service agency specizliing in making you regret the day you decided to step foot in this shitty world you like to call earth</div>
        <div className='inline w-3/4'>
        <span className={`${styles.linkunderline} linkunderline font-[fraunces] text-lg sm:text-xl bg-rose-200`}>Learn more</span>
        </div>
        </Fade>
      </div>
      
    
      <div className='basis-1/2'><img src={egg} className=" "></img></div>
      
    </div>
    
    

    <div className='flex flex-row-reverse'>
      <div className='basis-1/2  flex flex-col justify-around items-center' id="brand">
        <div className='w-3/4 font-[fraunces] text-xl sm:text-4xl'>Transform your brand</div>
        <div className='w-3/4 font-[harlow] sm:text-lg text-gray-700' >We are a full service agency specizliing in making you regret the day you decided to step foot in this shitty world you like to call earth</div>
        <div className='w-3/4 font-[fraunces] text-lg sm:text-xl'>Learn more
        <div className='bg-red w-6 absolute top-1'></div></div>
      </div>
      <div className='basis-1/2'><img src={gobelet} className=" "></img></div>
    </div>


    <div className='flex flex-row ' >
    <div className=' basis-1/2 flex flex-col justify-end ' class={styles.dottedbg} style={{
      backgroundImage: `url(${cherry})`, height: "100vh", width: '50vw', backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
    }}>
      <div className='mx-auto  px-20 text-center py-10 w-3/4 '>
        <h1 className='mb-6 text-center font-[fraunces] text-xl opacity-50 dottedbg' class={styles.dottedbg}>Graphic design</h1>
        <p className='font-[harlow] text-lg opacity-80 '>Great design makes you memorable, here at fuck you corporation, we strive to make your life a lot worse than it has to be</p>
      </div>
    </div>
      <div className='basis-1/2 flex flex-col justify-end' style={{
      backgroundImage: `url(${orange})`, height: "80vh", width: 'auto', backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
    }}>
      <div className='mx-auto  w-3/4 py-10 text-center px-20 '>
        <h1 className='mb-6 text-center font-[fraunces] text-xl opacity-50 '>Graphic design</h1>
        <p className='font-[harlow] text-lg opacity-80 '>Great design makes you memorable, here at fuck you corporation, we strive to make your life a lot worse than it has to be</p>
      </div>
    
    </div>
    </div>
    <div className='flex flex-col  justify-center py-20 flex-wrap ' id='testimonies'>
      <h1 className='font-[fraunces] mx-auto text-2xl opacity-60'>CLIENT TESTIMONIALS</h1>

      <div className='flex justify-evenly sm:mx-20 mt-10 '>
        <div className=''>
          <div><img src={emily} className="mx-auto rounded-full object-cover"></img></div>
          <div className='mx-auto mt-6 text-center w-3/4'>We put our turst in sunnidance agency of great depression thoughts of old</div>
          <div className='mx-auto mt-10 mb-2 text-center font-[fraunces] text-xl font-bold'>Emily R.</div>
          <div className='mx-auto  text-center font-[harlow] text-sm text-gray-500'>Marketing director </div>
        </div>


        <div className=''>
          <div><img src={emily} className="mx-auto rounded-full object-cover"></img></div>
          <div className='mx-auto mt-6 text-center w-3/4'>We put our turst in sunnidance agency of great depression thoughts of old</div>
          <div className='mx-auto mt-10 mb-2 text-center font-[fraunces] text-xl font-bold'>Emily R.</div>
          <div className='mx-auto  text-center font-[harlow] text-sm text-gray-500'>Marketing director </div>
        </div>

        <div className=''>
          <div className='mx-auto'><img src={emily} className="mx-auto rounded-full object-cover"></img></div>
          <div className='mx-auto mt-6 text-center w-3/4'>We put our turst in sunnidance agency of great depression thoughts of old</div>
          <div className='mx-auto mt-10 mb-2 text-center font-[fraunces] text-xl font-bold'>Emily R</div>
          <div className='mx-auto  text-center font-[harlow] text-sm text-gray-500'>Marketing director </div>

        </div>
      </div>
    </div>


    <div className='flex flex-1'>
      <div className='flex-1'><img src={milk} ></img></div>
      <div className='flex-1'><img src={bowl}></img></div>
      <div className='flex-1'><img src={cornet}></img></div>
      <div className='flex-1' ><img src={sugar}></img></div>
    </div>

<div className='flex flex-col bg-darkCyanF items-center '>
<div className='font-[fraunces] text-4xl opacity-80 my-10'>sunnyside</div>
<div className='flex justify-between my-10'>
<div className='font-[harlow] mx-8 text-green-100 opacity-80' >About</div>
  <div className='font-[harlow]  mx-8 text-green-100 opacity-80'>Services</div>
  <div className='font-[harlow]  mx-8 text-green-100 opacity-80'>Projects</div>
</div>

<div className='flex m-10'>
  <div><img src={facebook} className="w-10 mx-2 opacity-100 fill-current"></img></div>
  <div><img src={instagram} className="w-10 mx-2"></img></div>
  <div><img src={twitter} className="w-10 mx-2"></img></div>
  <div><img src={pinterest} className="w-10 mx-2"></img></div>
</div>

</div>
  </div>
  )
}
