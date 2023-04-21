import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

type Props = {
  img: any
  name: string
  occupation: string
  paragraph: string
}

export default function CardTestimonials ({
  img,
  name,
  occupation,
  paragraph
}: Props) {
  const { t } = useTranslation()
  return (
    <div className='flex items-center sm:h-[260px] md:h-[277px] lg:h-[318px] sm:w-[330px] md:w-[573px] lg:w-[573px] sm:px-[30px] md:px-[70px] lg:px-[66px] border-2 rounded border-white'>
      <div className='divide-y-2'>
        <div className='sm:pb-[16px] md:pb-[32px]'>
          <p className='font-primary leading-[22px] font-normal sm:text-[16px] md:text-[19px] xl:text-[19px] text-center text-white'>
            {t(paragraph)}
          </p>
        </div>
        <div className='flex justify-center items-center sm:pt-[16px] md:pt-[32px] gap-[20px]'>
          <Image src={img} alt={name} width='55' height='55' />
          <div className=''>
            <p className='font-primary font-medium sm:text-[14px] md:text-[16px] lg:text-[16px] text-white'>
              {name}
            </p>
            <p className='font-primary font-normal sm:text-[14px] md:text-[16px] lg:text-[16px] text-gray-300 sm:w-[134px] md:w-full'>
              {occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
