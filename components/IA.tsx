import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import AI from '../public/assets/AI.svg'
import IButton from './form/Button'
import Link from 'next/link'

export default function IA () {
  const { t } = useTranslation()

  return (
    <div
      id='ia'
      className='flex sm:flex-col xl:flex-row-reverse sm:px-[30px] md:px-[60px] xl:px-[103px] 2xl:px-[60px]'
    >
      <div className='flex-1 flex-col items-start lg:min-h-[550px] py-3 sm:pb-[100px] lg:pb-[0px]'>
        <h2 className='font-secondary font-medium sm:text-[34px] md:text-[48px] lg:text-[60px] text-white sm:pb-[20px] lg:pb-[40px] xl:max-w-[700px]'>
          {t('Explore_our_ia')}
        </h2>
        <div className='sm:space-y-[14px] space-y-[16px]'>
          <p className='font-normal font-primary sm:text-[16px] xl:max-w-[600px] md:text-[20px] text-white sm:leading-[19px] md:leading-[23px]'>
            {t('paragraph_our_ia_1')}
          </p>
          <p className='font-normal font-primary sm:text-[16px] xl:max-w-[600px] md:text-[20px] text-white sm:leading-[19px] md:leading-[23px]'>
            {t('paragraph_our_ia_2')}
          </p>
          <p className='font-normal font-primary sm:text-[16px] xl:max-w-[600px] md:text-[20px] text-white sm:leading-[19px] md:leading-[23px]'>
            {t('paragraph_our_ia_3')}
          </p>
        </div>
        <div className='sm:mt-[60px] lg:mt-[80px]'>
          <Link href='/ia'>
            <IButton label={t('Visit_ia_now')} variant='outlined' />
          </Link>
        </div>
      </div>
      <div className='flex-1 content-center items-center'>
        <Image
          alt='Blog Coderlabs'
          src={AI}
          className='sm:w-[364px] sm:h-[364px] md:w-[572px] md:h-[572px] xl:h-[550px]'
        />
      </div>
    </div>
  )
}
