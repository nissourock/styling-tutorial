import React from 'react'
import forestpic from './forest.webp'
import deco from './deco.webp'
import { CalendarIcon, PlayIcon, TagIcon, ClockIcon} from '@heroicons/react/outline'
export default function Blog() {
  return (
    <div className='flex-1 '>
      <div className='shadow-2xl relative overflow-hidden mx-auto my-4 flex flex-col sm:flex-row w-3/4 sm:h-72 sm:items-start items-center   bg-gradient-to-tr from-orange-300 to-orange-400 rounded-lg hover:scale-110 transition-all ease-in-out '>

        <img src={forestpic} className='sm:h-72    ' alt='forest pic'></img>
        
        <div className='flex flex-col  mx-4 my-4 sm:mx-6 sm:mb-10  '>
          <div className='block text-2xl sm:mb-4 font-semibold '>Card Title</div>
          <div className=' flex '>
            <CalendarIcon className='w-6 mr-2' />
            <h1 className='text-clip font-mono font-thin'>Mon, May 2nd, 2022</h1>
          </div>
          <div className='text-sm '>Pariatur occaecat ut sit enim tempor amet proident consequat ipsum culpa cillum voluptate ipsum. Aliqua pariatur incididunt excepteur sit cillum. Eiusmod deserunt excepteur qui adipisicing reprehenderit. Laboris laborum commodo et ipsum Lorem laborum laborum. Lorem Lorem ipsum officia dolore Lorem minim mollit. </div>
          

          <div className='flex flex-wrap sm:flex-nowrap flex-row sm:absolute sm:bottom-6 my-2 text-white '>
          <div className=' bg-gray-600  inline-block p-1 bg-transparent my-2  rounded-md '>
            <TagIcon className='w-6 inline mr-2' />
            <div className='text-xs font-sans font-light inline mr-2'>Voyage</div>
          </div>

          <div className='ml-2  bg-gray-600  inline-block p-1 bg-transparent my-2 rounded-md'>
            <ClockIcon className='w-6 inline mr-2' />
            <div className='text-xs font-sans font-light inline mr-2'>2 weeks</div>
          </div>
          <div className='ml-2 bg-gray-600  inline-block p-1 bg-transparent my-2 rounded-md'>
            <PlayIcon className='w-6 inline mr-2' />
            <div className='text-xs font-sans font-light inline mr-2'>Video</div>
          </div>  
          
          
          <div className='ml-2 bg-gray-600  inline-block p-1 bg-transparent my-2 rounded-md'>
            <PlayIcon className='w-6 inline mr-2' />
            <div className='text-xs font-sans font-light inline mr-2'>Video</div>
          </div>
          <div className='ml-2 bg-gray-600  inline-block p-1 bg-transparent my-2 rounded-md'>
            <PlayIcon className='w-6 inline mr-2' />
            <div className='text-xs font-sans font-light inline mr-2'>Video</div>
          </div>
          <div className='ml-2 bg-gray-600  inline-block p-1 bg-transparent my-2 rounded-md'>
            <PlayIcon className='w-6 inline mr-2' />
            <div className='text-xs font-sans font-light inline mr-2'>Video</div>
          </div>
          </div>
        </div>
        
        



      </div>
      
      <div className='min-w-full' style={{backgroundImage: `url(${deco})`, height: '100vh',objectFit: "cover",width: '100vw',backgroundRepeat: 'no-repeat' }} className="h-32 bg-fixed object-cover"> AAAAAAAAAAAAAAAAAA</div>


    </div>
  )
}
