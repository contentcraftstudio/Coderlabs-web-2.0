import React from 'react'
import Image from 'next/image'
import img from '../public/assets/ux.svg'
type Props = {}

export default function Card({}: Props) {
  return (
    <div className='w-375 h-375 flex flex-col gap-10 shadow-xl p-[12px] rounded border-b-[22px] '>
      <div className=''>
        <Image
          src={img}
          alt='UI/UX Design'
          width={150}
          height={150}
        />
      </div>
      <div className='w-100% text-center'>
        <h3>UI/UX Design</h3>
        <p>User Interface Design and User Experience.</p>
      </div>
    </div>
  )
}
;
