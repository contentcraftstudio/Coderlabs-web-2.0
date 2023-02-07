import Image from 'next/image'
import React from 'react'
import aliados from '../public/assets/aliado.svg'
import { useTranslation } from 'react-i18next'

type Props = {}

export default function BestSec ({}: Props) {
  const { t } = useTranslation()
  return (
    <div className='mx-auto'>
      <h3 className=' font-secondary font-medium text-center sm:text-[34px] md:text-[48px] xl:text-[64px]'>{t('We_are_the_best_choice')}</h3>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div className='sm:w-[330px] md:w-[400px] sm:h-[270px] md:h-[400px] shadow-md flex flex-col items-center sm:gap-[12px] md:gap-[24px] xl:gap-[32px] sm:pt-[42px] md:pt-[84px] mx-auto rounded'>
          <div className='sm:w-[36px] sm:h-[36px] md:w-[64px] md:h-[64px] '>
            <Image
              alt={t('We_are_your_allies')}
              src={aliados}
            />
          </div>
          <p className=" text-center">{t('We_are_your_allies')}</p>
          <p className=" text-center">{t('paragraph_card_best_choice')}</p>
        </div>
        <div className='sm:w-[330px] md:w-[400px] sm:h-[270px] md:h-[400px] shadow-lg flex flex-col items-center sm:gap-[12px] md:gap-[24px] xl:gap-[32px] sm:pt-[42px] md:pt-[84px] mx-auto rounded'>
          <div className='sm:w-[36px] sm:h-[36px] md:w-[64px] md:h-[64px]'>
            <Image
              alt={t('We_are_your_allies')}
              src={aliados}
            />
          </div>
          <p className="text-center">{t('We_are_your_allies')}</p>
          <p className="text-center">{t('paragraph_card_best_choice')}</p>
        </div>
      </div>
    </div>
  )
}
