import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

import { Icons } from '../../../assets'
import { Button } from '../../atoms'
import useAppProvider from '../../../hooks/useAppProvider'

const Navbar = () => {
  const { handleRegisterModal, registerModal } = useAppProvider()
  return (
    <nav
      className={
        registerModal
          ? `navbar navbar-expand-lg bg-blue`
          : `navbar navbar-expand-lg bg-blue fixed-top `
      }
    >
      <div className='container py-3 d-flex justify-content-between align-items-center'>
        <Link className='navbar-brand' to='/'>
          <div className='d-flex align-items-center gap-2'>
            <img className='logo' src={Icons.logo} alt='logo' />
            <span className='fs-md fw-bold text-white'>Techstudio Academy</span>
          </div>
        </Link>

        <HiOutlineMenuAlt4
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className='navbar-toggler text-white fs-6xl border-0'
        />

        <div
          className='collapse navbar-collapse d-lg-flex justify-content-end ms-lg-10 ms-xl-24'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav d-flex gap-6 justify-content-center align-items-center my-10 my-lg-0'>
            <Button
              onClick={handleRegisterModal}
              linkHref='/'
              linkText='Register'
              solidBtn
              navBtn
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
