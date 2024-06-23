import React from 'react'

import blog1 from '~/assets/blog1.png'
import blog2 from '~/assets/blog2.png'
import blog3 from '~/assets/blog3.png'
import arrow from '~/assets/icons/arrow.svg'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      image: blog1,
    },
    {
      id: 2,
      title: 'What are your safeguarding responsibilities and how can you manage them?',
      image: blog2,
    },
    {
      id: 3,
      title: 'Revamping the Membership Model with Triathlon Australia',
      image: blog3,
    }    
  ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-4xl mx-auto my-12' id='testimonial'>
      <div className='text-center'>
          <h2 className="text-4xl text-neutralDGray font-semibold mb-4">Caring is the new marketing</h2>
          <p className='text-sm text-neutralGray mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lots more.​</p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {
          blogs.map(blog => {
            return (
              <div key={blog.id} className='relative mx-auto mb-12 cursor-pointer'>
                <img src={blog.image} alt="" className='w-[30rem] hover:scale-95 transition-all duration-300' />
                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                  <h3>{blog.title}</h3>
                  <div className="flex items-center  justify-center gap-8">
                    <a href="/" className='font-bold text-brandPrimary hover:text-neutralGray'>
                      Readmore
                      <img src={arrow} alt="" className='inline-block w-[20px] ml-2'/>
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Blog