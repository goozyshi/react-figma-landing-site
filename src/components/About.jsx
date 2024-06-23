import React from 'react'

import aboutImg from '~/assets/about1.svg'
import members from '~/assets/icons/members.svg'
import clubs from '~/assets/icons/clubs.svg'
import payments from '~/assets/icons/payments.svg'
import bookings from '~/assets/icons/bookings.svg'

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='about'>
        <div className='md:w-11/12 ma-auto flex flex-col md:flex-row justify-between items-center'>
          <div>
            <img src={aboutImg} alt="" className='md:w-[40rem] w-[20rem]'/>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">The unseen of spending three years at Pixelgrade</h2>
            <p className='md:w-3/4 text-sm mb-8 text-neutralGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className="btn-primary mt-4">Learn More</button>
          </div> 
        </div>
      </div>
      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-4xl mx-auto bg-neutralSilver py-16 ">
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">
              Helping a local 
              <p className="text-brandPrimary"> business reinvent itself</p>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>
          {/* stats-icons */}
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src={members} alt="" className='w-[2rem]' />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGray">2,245,341</h4>
                  <p className='text-sm text-neatralGrey'>Members</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <img src={bookings} alt="" className='w-[2rem]' />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGray">828,867</h4>
                  <p className='text-sm text-neatralGrey'>Event Bookings</p>
                </div>
              </div>
            </div>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src={clubs} alt="" className='w-[2rem]' />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGray">46,328</h4>
                  <p className='text-sm text-neatralGrey'>Clubs</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src={payments} alt="" className='w-[2rem]' />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGray">1,926,436</h4>
                  <p className='text-sm text-neatralGrey'>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About