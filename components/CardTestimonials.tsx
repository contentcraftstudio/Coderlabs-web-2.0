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
    <div className='h-[318px] sm:w-[330px]  lg:w-[573px] divide-y-2 sm:pt-[40px] md:pt-[80px] sm:px-[30px] px-[70px] border-2 rounded border-white'>
      <div className='pb-[32px]'>
        <p className='h-[66px] flex items-end font-primary leading-[22px] font-normal sm:text-[16px] xl:text-[19px] text-center text-white'>{t(paragraph)}</p>
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
          <p className='font-primary font-normal text-[16px] text-gray-300'>{occupation}</p>
        </div>
      </div>
    </div>
  )
}
