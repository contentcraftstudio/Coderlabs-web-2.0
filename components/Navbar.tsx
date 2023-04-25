/* eslint-disable quote-props */
import Image from 'next/image'
import React from 'react'
import coderlabsLogo from '../public/assets/coderlabs_logo.svg'
import SwitchButton from './SwitchButton'

export default function Navbar () {
  return (
    <nav id='nav' className='py-4 flex justify-between items-center md:px-[24px] lg:px-[40px]'>
      <Image
        src={coderlabsLogo}
        alt='coderlabs logo'
        className=' sm:w-[35px] sm:h-[32px] md:w-[45px] md:h-[40px] xl:w-[52px] xl:h-[48px]'
      />
      <div>
        <SwitchButton />
      </div>
    </nav>
  )
}
