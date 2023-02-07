import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

type Props = {
  color: string;
  img: any;
  title: string;
  paragraph: string;
}

export default function Card ({ color, img, title, paragraph }: Props) {
  const { t } = useTranslation()

  return (
    <div className={`sm:w-[300px] sm:h-[300px] md:w-[310px] md:h-[310px] xl:w-[375px] xl:h-[375px] flex flex-col gap-[10px] shadow-xl py-[12px] rounded border-b-[22px] border-b-${color}`}>
      <div className='flex justify-center'>
        <Image
          src={img}
          alt='UI/UX Design'
          width={120}
          height={120}
        />
      </div>
      <div className='w-100% text-center'>
        <h3 className='sm:text-[16px] md:text-[18px] xl:text-xl font-secondary font-medium'>{t(title)}</h3>
        <p className='sm:text-[14px] md:text-[16px] xl:text-xl font-normal pt-[10px] '>{t(paragraph)}</p>
      </div>
    </div>
  )
}
;
