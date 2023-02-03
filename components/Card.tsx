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
    <div className={`w-[375px] h-[375px] flex flex-col gap-[10px] shadow-2xl py-[12px] px-[12px] rounded border-b-[22px] border-b-${color}`}>
      <div className='flex justify-center'>
        <Image
          src={img}
          alt='UI/UX Design'
          width={150}
          height={150}
        />
      </div>
      <div className='w-100% text-center'>
        <h3 className='text-xl font-secondary font-medium'>{t(title)}</h3>
        <p className='text-xl font-normal pt-[10px] '>{t(paragraph)}</p>
      </div>
    </div>
  )
}
;
