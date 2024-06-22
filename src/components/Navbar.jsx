import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '~/assets/logo.png'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  // 菜单开关
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    const hanldeScroll = () => {
      setIsSticky(window.screenY > 100)
    }
    window.addEventListener('scroll', hanldeScroll)
    return (() => {
      window.addEventListener('scroll', hanldeScroll)
    })
  })

  // 菜单数据
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'About', path: 'about' },
    { link: 'Product', path: 'product' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'FAQ', path: 'faq' },
  ]
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300": "bg-white"}`}>
        <div className='flex  justify-between items-center text-base gap-8'>
          <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={logo} alt="" className='w-10 inline-block items-center' />
            <span className='text-[#263238]'>NEXCENT</span>
          </a>
          {/* nav items for large devices */}
          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({ link, path }) =>
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className='block text-base text-gray-900 hover:text-brandPrimary cursor-pointer first:font-medium'
                >{link}</Link>
              )
            }
          </ul>

          {/* btn for large devices */}
          <div className='space-x-12 hidden lg:flex items-center'>
            <a href='' className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>Login</a>
            <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray'>Sign Up</button>
          </div>

          {/* menu btn for only mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-neutralDGray focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
            </button>
          </div>
        </div>
        {/* menu btn for only mobile */}
        <div className={`space-y-4 px-4 py-7 bg-brandPrimary ${isMenuOpen ? 'block fixed right-0 left-0' : 'hidden'}`}>
          {
            navItems.map(({ link, path }) =>
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className='block text-base text-white hover:text-brandPrimary cursor-pointer first:font-medium'
              >{link}</Link>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar