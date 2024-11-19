"use client";

import Image from 'next/image';
import avatar from 'app/wes.png'; // Ensure this path is correct

import mountain from 'app/mountain.jpg'
import nolames from 'app/nolames.jpg'
import dissasembly from 'app/dissasembly.jpeg'
import ss2s from 'app/ss2s.jpeg';

import picture from 'app/avatar.jpg'

export default function Page() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-medium">hey, im wes.</h1>
      <p className="mt-4">This is a simple home page without any API integrations.</p>
      <div className="mt-8">
        <Image
          src={avatar}
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <br></br>
                I suppose I can begin building the front of my page
                <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
                  
                  <div className="relative h-40">
                    <Image src={mountain} alt={''} /> mega1
                  </div>

                  <div className="relative"> 
                    <Image src={dissasembly} alt={''} /> mega2
                  </div>
                  
                  <div className="relative sm:row-span-">
                    <Image src={nolames} alt={''} /> mega3
                  </div>

                  <div className="relative sm:row-span-2"> 
                  <Image src={ss2s} alt={''} /> mega4
                  </div>
                  
  
                  <div className="relative sm:row-span-2">
                    <Image src={picture} alt={''} />mega5
                  </div>
                  
        
                  <div className="relative h-40 sm:col-start-3 sm:row-start-"> 
    <Image src={picture} alt={''} /> mega6 
  </div>



                </div>

      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="group flex w-full"><a href="https://www.youtube.com/@leerob" target="_blank" className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
          <Image
            src={avatar}
            alt="Avatar"
            width={64}
            height={64}
            className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
        />
        <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
          <svg width="15" height="11" role="img" aria-label="YouTube logo">
            <use href="/sprite.svg#youtube"></use>
            </svg>
            </div></div>
            <div className="flex flex-col">
              <p className="font-medium text-neutral-900 dark:text-neutral-100">Wes Aman</p>
              <p className="text-neutral-600 dark:text-neutral-400">62,000 subscribers</p>
              </div></div>
              <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
            </svg>
              </div>
              </a>
              </div>
              
              <div className="group flex w-full"><a href="https://www.youtube.com/@vercelhq" target="_blank" className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                <div className="flex items-center space-x-3">
                <div className="relative h-16">
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
                  />
          <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
            <svg width="15" height="11" role="img" aria-label="YouTube logo">
              <use href="/sprite.svg#youtube"></use>
              </svg>
              </div></div>
              <div className="flex flex-col"><p className="font-medium text-neutral-900 dark:text-neutral-100">CodeWithWes
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">93,800 subscribers</p>
              </div></div>
              <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
                </svg>
              </div>
              </a>
              </div></div>

                   
      </div>
    </section>
  );
}