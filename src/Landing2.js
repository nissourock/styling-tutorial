import React from 'react'
import styles from './landing2.module.css';
import illustration from './images2/illustration-editor-desktop.svg'
import phone from './images2/illustration-phones.svg'
import arrow from './images2/icon-arrow-dark.svg'
import { useState } from 'react';
import galaxy from './images2/galaxy.jpg'
import { style } from '@mui/material/node_modules/@mui/system';
import DarkModeToggle from "react-dark-mode-toggle";





export default function Landing2() {
    const [toggle, setToggle] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    console.log(toggle)
    return (<div className={isDarkMode? styles.maindark : styles.main}>
        <div className={isDarkMode? styles.headerbgdark : styles.headerbg}  >
            <div className='flex flex-col p-10  pb-40 '>
                <div className='flex justify-between items-center'>
                
    
                    <div className='flex  '>
                        <div className='text-4xl mx-6'>
                            <p>Blogr</p>
                        </div>
                        <div className='mx-6 cursor-pointer' onClick={() => setToggle(!toggle)}>
                            <div className='inline relative ' >Product
                                <div className={`w-40 my-2 mx-auto bg-white opacity-80 backdrop-blur-sm rounded-2xl absolute ${toggle ? 'h-40' : "h-0 hidden"} transition-all ease-in-out duration-150`}><a href='#products'>ANIS</a></div> </div>

                            <img src={arrow} className={`mx-1 w-4 inline-block stroke-black ${toggle ? 'rotate-180' : ""} transition-all ease-in-out duration-300`}></img>
                        </div>
                        <div className='mx-6'>
                            <span>Company</span>
                            <img src={arrow} className='mx-1 w-4 inline-block'></img>
                        </div>
                        <div className='mx-6'>
                            <span>Connect</span>
                            <img src={arrow} className='mx-1 w-4 inline-block'></img>
                        </div>
                    </div>
                    <div className='flex items-end '>
                        <div className='mx-6 hover:bg-white p-2 rounded-xl'>Login</div>
                        <div className='mx-6 hover:bg-white p-2 rounded-xl'>Sign up</div>
                        
                        <DarkModeToggle className='h-2'
      onChange={setIsDarkMode}
      checked={isDarkMode}
      
    />
                        
                    </div>
                </div>
                <div className='text-center my-10 text-5xl font-semibold opacity-80'>A modern publishing platform</div>
                <div className='text-center my-10 text-2xl font-thin'>Grow your audience and build your online brand</div>
                <div className='flex mx-auto gap-2 '>
                    <div className='p-2 hover:bg-rose-200 bg-rose-600 rounded-3xl font-light opacity-90'>Start for free</div>
                    <div className='p-2 hover:bg-rose-200 bg-rose-600 rounded-3xl font-light opacity-90'>Learn more</div>

                </div>
            </div>



        </div>
        <div className={isDarkMode ? styles.section : ""}>
        <div className='flex flex-col   py-24 '>
            <div className='mx-auto text-3xl font-semibold stroke-transparent'>Designed for the future</div>

            <div className='flex items-center overflow-hidden'>
                <div className='flex flex-col basis-1/2 w-3/4 mx-10 '>
                    <div className='text-2xl my-4' >Introducing an extensible editor</div>
                    <div className='font-light'>Exercitation amet tempor voluptate deserunt amet consequat aute nostrud incididunt dolor voluptate. Aliqua nulla eiusmod eiusmod cupidatat officia sint sint. Ipsum quis ullamco voluptate veniam consequat do cupidatat ut et.</div>
                    <div className='text-xl my-4'>Robust content manager</div>
                    <div className='font-light'>Exercitation amet tempor voluptate deserunt amet consequat aute nostrud incididunt dolor voluptate. Aliqua nulla eiusmod eiusmod cupidatat officia sint sint. Ipsum quis ullamco voluptate veniam consequat do cupidatat ut et.</div>

                </div>
                <div className='basis-1/2 relative'>
                    <img className='ml-14 overflow-hidden object-cover  ' src={illustration}></img></div></div>
        </div>
        </div>

        <div className={styles.middlebg}>
            <div className='flex items-start justify-items-start '>
                <div className=' relative self-start scale-110 sm:-translate-y-20'><img src={phone} className=""></img></div>
                <div className='flex flex-col w-3/4 mx-10 my-10 '>
                    <div className='text-2xl my-4' >Introducing an extensible editor</div>
                    <div className='font-light'>Exercitation amet tempor voluptate deserunt amet consequat aute nostrud incididunt dolor voluptate. Aliqua nulla eiusmod eiusmod cupidatat officia sint sint. Ipsum quis ullamco voluptate veniam consequat do cupidatat ut et.</div>

                </div>
            </div>
        </div>

        <div className={styles.otherbg}>
            <div className='flex flex-col p-10  pb-40 '>
                <div className='flex justify-between items-center'>
                    <div className='flex  '>
                        <div className='text-4xl mx-6'>
                            <p>Blogr</p>
                        </div>
                        <div className='mx-6 cursor-pointer' onClick={() => setToggle(!toggle)}>
                            <div className='inline relative ' >Product
                                <div className={`w-40 my-2 mx-auto bg-white opacity-80 backdrop-blur-sm rounded-2xl absolute ${toggle ? 'h-40' : "h-0 hidden"} transition-all ease-in-out duration-150`}><a href='#products'>ANIS</a></div> </div>

                            <img src={arrow} className={`mx-1 w-4 inline-block stroke-black ${toggle ? 'rotate-180' : ""} transition-all ease-in-out duration-300`}></img>
                        </div>
                        <div className='mx-6'>
                            <span>Company</span>
                            <img src={arrow} className='mx-1 w-4 inline-block'></img>
                        </div>
                        <div className='mx-6'>
                            <span>Connect</span>
                            <img src={arrow} className='mx-1 w-4 inline-block'></img>
                        </div>
                    </div>
                    <div className='flex items-end '>
                        <div className='mx-6 hover:bg-white p-2 rounded-xl'>Login</div>
                        <div className='mx-6 hover:bg-white p-2 rounded-xl'>Sign up</div>
                    </div>
                </div>
                <div className={styles.textclip}>Just some galaxy text</div>
                <div className='text-center my-10 text-2xl font-thin'>Grow your audience and build your online brand</div>
                <div className='flex mx-auto gap-2 '>
                    <div className='p-2 hover:bg-rose-200 bg-rose-600 rounded-3xl font-light opacity-90'>Start for free</div>
                    <div className='p-2 hover:bg-rose-200 bg-rose-600 rounded-3xl font-light opacity-90'>Learn more</div>

                </div>
            </div>


            



        </div>

        <div className={isDarkMode ? styles.section : ""}>
        <div className='flex flex-col   py-24 '>
            <div className='mx-auto text-3xl font-semibold stroke-transparent'>Designed for the future</div>

            <div className='flex items-center overflow-hidden'>
                <div className='flex flex-col basis-1/2 w-3/4 mx-10 '>
                    <div className='text-2xl my-4' >Introducing an extensible editor</div>
                    <div className='font-light'>Exercitation amet tempor voluptate deserunt amet consequat aute nostrud incididunt dolor voluptate. Aliqua nulla eiusmod eiusmod cupidatat officia sint sint. Ipsum quis ullamco voluptate veniam consequat do cupidatat ut et.</div>
                    <div className='text-xl my-4'>Robust content manager</div>
                    <div className='font-light'>Exercitation amet tempor voluptate deserunt amet consequat aute nostrud incididunt dolor voluptate. Aliqua nulla eiusmod eiusmod cupidatat officia sint sint. Ipsum quis ullamco voluptate veniam consequat do cupidatat ut et.</div>

                </div>
                <div className='basis-1/2 relative'>
                    <img className='ml-14 overflow-hidden object-cover  ' src={illustration}></img></div></div>
        </div>
        </div>



        <div className={styles.imgdiv}>
            <img src={galaxy} className={styles.imgcon}></img>
        </div>





    </div>

    )
}
