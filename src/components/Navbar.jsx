import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '~/assets/logo.png'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  // 菜单开关
  const toggleMenu = () => {
    setIsMenuOpen(true)
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
      <nav>
        <div>
          <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={logo} alt="" className='w-10 inline-block items-center' />
            <span className='text-[#263238]'>NEXCENT</span>
          </a>
          {/* nav items for large devices */}
          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({ link, path }) => {
                return <Link to={path} key={path} className='block text-base text-gray-900 hover:text-brandPrimary cursor-pointer'>{link}</Link>
              })
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar