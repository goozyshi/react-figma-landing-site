import React from 'react'

import membership from '~/assets/icons/membership.png'
import national from '~/assets/icons/national.png'
import club from '~/assets/icons/club.png'

import company1 from '~/assets/company1.png'
import company2 from '~/assets/company2.png'
import company3 from '~/assets/company3.png'
import company4 from '~/assets/company4.png'
import company5 from '~/assets/company5.png'
import company6 from '~/assets/company6.png'
import company7 from '~/assets/company7.png'
const Services = () => {
  const services = [
    {
      id: 1, 
      title: 'Membership Organisations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
      icon: membership
    },
    {
      id: 2, 
      title: 'National Associations',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
      icon: national
    },
    {
      id: 3, 
      title: 'Clubs And Groups',
      desc: 'Our membership management software provides full automation of membership renewals and payments',
      icon: club
    },
  ]
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-4xl max-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">Our Clients</h2>
        <p className="text-neatralDGrey">We have been working with some Fortune 500+ clients</p>

        {/* logos */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
          <img src={company7} alt="" />
        </div>
      </div>
      {/* services info */}
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">Manage your entire community in a single system</h2>
        <p className="text-neatralDGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
          services.map(item => {
            return (
              <div
                key={item.id}
                className='px-4 py-8 text-center mx-auto rounded-md shadow cursor-pointer md:w-[300px] md:h-80 hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'
              >
                <div>
                  <div className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img src={item.icon} alt=""  className='-ml-5'/>
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">{item.title}</h4>
                  <p className="text-sm text-neutralGrey">{item.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Services