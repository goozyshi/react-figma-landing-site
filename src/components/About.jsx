import React from 'react'

import aboutImg from '~/assets/about1.svg'

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className='md:w-11/12 ma-auto flex flex-col md:flex-row justify-between items-center'>
          <div>
            <img src={aboutImg} alt="" className='md:w-[600px] w-[375px]'/>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className="btn-primary mt-4">Learn More</button>
          </div> 
        </div>
      </div>
    </div>
  )
}
export default About