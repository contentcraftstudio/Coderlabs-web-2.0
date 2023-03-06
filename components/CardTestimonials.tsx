import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

type Props = {
  img: any;
  name: string;
  occupation: string;
  paragraph: string;
}

export default function CardTestimonials ({ img, name, occupation, paragraph }: Props) {
  const { t } = useTranslation()
  return (
    <div className=' sm:w-[330px]  lg:w-[573px]  h-[318px] divide-y-2 sm:pt-[40px] md:pt-[60px] sm:px-[30px] px-[70px] pb-[32px] border-2 rounded border-white'>
      <div className='pb-[32px]'>
        <p className=' font-primary font-normal sm:text-[16px] xl:text-[19px] text-center text-white'>{t(paragraph)}</p>
      </div>
      <div className='flex justify-center items-center gap-x-[20px] sm:pt-[16px] pt-[32px]'>
        <Image
          src={img}
          alt={name}
          width='55'
          height='55'
        />
        <div className=''>
          <p className='font-primary font-medium text-[16px] text-white'>{name}</p>
          <p className='font-primary font-medium text-[16px] text-gray-300'>{occupation}</p>
        </div>
      </div>
    </div>
  )
}
