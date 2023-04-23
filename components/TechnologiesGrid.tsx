import React from 'react'
import Image from 'next/image'
import { TechnologiesData } from '@/pages/apis/technologiesData'

export default function TechnologiesGrid () {
  return (
    <div className=' sm:w-[290px] md:w-[570px] grid grid-cols-4 gap-1 sm:mx-auto'>
      {TechnologiesData.data.map((item) => {
        return (
          <Image
            key={item.alt}
            alt={item.alt}
            src={item.img}
            className='shadow-2xl'
          />
        )
      })}
    </div>
  )
}
