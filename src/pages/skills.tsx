import HomeBar from '@/components/HomeBar'
import Link from 'next/link'
import React from 'react'
import { BsCodeSlash, BsPerson, BsPersonPlus } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'
import {SiJavascript, SiTypescript,SiPostgresql, SiReact, SiNestjs, SiFirebase, SiAngular} from 'react-icons/si'
import {FaCss3Alt, FaGitAlt, FaHtml5, FaJava} from 'react-icons/fa'
import {TbApi, TbBrandNextjs, TbBrandVscode} from 'react-icons/tb'
import Header from '@/components/Header'

const Skills = () => {
  return (
    <>
    <div className="isolate">
        <div className="absolute h-full inset-x-0 top-[10rem] bg-slate-500 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-5rem]">
            <svg
                className="relative bottom-0 left-1/4 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 translate-y-3 rotate-[10deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
            >
                <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".5"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                        id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#3471eb" />
                        <stop offset={1} stopColor="#ab31e8" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                className="relative top-1/4 right-0 -z-10 h-[21.1875rem] max-w-none -translate-y-3/4 translate-x-3 rotate-[0deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
            >
                <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".5"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                    <linearGradient
                        id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                        x1="-78.208"
                        x2="1155.49"
                        y1="474.645"
                        y2=".177"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#3471eb" />
                        <stop offset={1} stopColor="#ab31e8" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        {/* Skills */}
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-3">
            <Header page={'Skills'}/>
            <div className="w-full max-w-[1000px] md:mt-[-200px] rounded-lg overflow-hidden">
                <div className="w-full bg-transparent p-6 flex flex-row justify-center items-start flex-wrap md:gap-20 gap-10">
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-blue-500 text-7xl bg-white rounded-lg '><SiTypescript/></div>
                        <div className='text-white'>TypeScript</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-yellow-500 text-7xl bg-black rounded-lg '><SiJavascript/></div>
                        <div className='text-white'>JavaScript</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-sky-500 text-7xl  rounded-lg '><SiReact/></div>
                        <div className='text-white'>React</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-white text-7xl bg-black rounded-lg '><TbBrandNextjs/></div>
                        <div className='text-white'>Next.js</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-red-500 text-7xl rounded-lg '><FaHtml5/></div>
                        <div className='text-white'>HTML</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-blue-500 text-7xl rounded-lg '><FaCss3Alt/></div>
                        <div className='text-white'>CSS</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-blue-500 text-7xl rounded-lg '><SiPostgresql/></div>
                        <div className='text-white'>PostgeSQL</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-red-600 text-7xl rounded-lg '><SiNestjs/></div>
                        <div className='text-white'>Nest.js</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-yellow-400 text-7xl rounded-lg '><SiFirebase/></div>
                        <div className='text-white'>Firebase</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-red-500 text-7xl rounded-lg '><FaGitAlt/></div>
                        <div className='text-white'>Git</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-white text-7xl bg-blue-600 rounded-lg '><TbApi/></div>
                        <div className='text-white'>REST API</div>
                    </div>
                    <div className='flex flex-col justify-center items-center hover:shadow-2xl'>
                        <div className='text-blue-500 text-7xl rounded-lg '><TbBrandVscode/></div>
                        <div className='text-white'>VS Code</div>
                    </div>
                </div>
            </div>
            <HomeBar />
        </div>
    </div>
</>
  )
}

export default Skills