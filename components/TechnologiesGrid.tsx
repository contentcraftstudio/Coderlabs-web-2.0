import React from 'react'
import Image from 'next/image'
import { TechnologiesData } from '@/pages/apis/TechnologiesData'

type Props = {}

export default function TechnologiesGrid ({}: Props) {
  return (
    <div className=' w-[570px] grid grid-cols-4 gap-4'>
      {TechnologiesData.data.map((item) => {
        return (
          <Image
            key={item.alt}
            alt={item.alt}
            src={item.img}
            width={132}
            height={132}
            className='shadow-2xl'
          />
        )
      })}
    </div>
  )
}
