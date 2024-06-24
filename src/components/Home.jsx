import React from 'react'
import { Carousel } from "flowbite-react";

import banner1 from '~/assets/banner1.png'

const Home = () => {
  // 打印1
  
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-4 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel pauseOnHover className='w-full mx-auto'>
          <div className="md:my-28 my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-xl md:text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
              <button
                className="btn-primary"
              >Register</button>
            </div>
          </div>
          <div className="md:my-28 my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-xl md:text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                React and Tailwind CSS <span className='text-brandPrimary leading-snug'>by vite</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
              <button
                className="btn-primary"
              >Register</button>
            </div>
          </div>
          <div className="md:my-28 my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-xl md:text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Learn and Earn Money <span className='text-brandPrimary leading-snug'>from 4 Month</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
              <button
                className="btn-primary"
              >Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
export default Home