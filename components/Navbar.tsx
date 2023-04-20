/* eslint-disable quote-props */
import Image from 'next/image'
import React from 'react'
import { useSize } from 'ahooks'
import { Dom } from '@/settings/util'
import coderlabsLogo from '../public/assets/coderlabs_logo.svg'
import SwitchButton from './SwitchButton'
type Props = {}

const BASE = () => {
  const base = {
    sm: {
      w: 35,
      h: 32
    },
    md: {
      w: 45,
      h: 40
    },
    xl: {
      w: 52,
      h: 48
    }
  }
  return base
}

export default function Navbar ({}: Props) {
  const size = useSize(Dom)
  const imgS =
    size?.width <= 380
      ? 'sm'
      : size?.width >= 381 && size?.width <= 768
        ? 'md'
        : 'xl'
  const base = BASE()
  return (
    <nav id='nav' className='container py-4 px-[40px] flex justify-between items-center'>
      <Image
        src={coderlabsLogo}
        alt='coderlabs logo'
        height={base[imgS].h}
        width={base[imgS].w}
      />
      <div>
        <SwitchButton />
      </div>
    </nav>
  )
}
