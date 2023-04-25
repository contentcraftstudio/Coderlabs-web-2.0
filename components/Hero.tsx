import Image from 'next/image'
import React from 'react'
import rocket from '../public/assets/rocket.svg'
import logo from '../public/assets/llavelogo.svg'
import { useTranslation } from 'react-i18next'
import IButton from './form/Button'

export default function Hero () {
  const { t } = useTranslation()
  return (
    <div className='w-[100%] md:px-[60px] lg:px-[103px]'>
      <div className='grid sm:grid-cols-1 xl:grid-cols-3'>
        <div className='col-span-2 divide-y-2 divide-gray-800'>
          <div>
            <Image
              className='lg:mb-[-72px] md:mb-[-60px]  sm:mb-[-43px] sm:ml-[-10px] lg:w-[19px] sm:h-[40px] md:h-[50px] lg:h-[58px]'
              src={logo}
              alt='coderlabs'
              width={20}
              height={70}
            />
            <h1 className='titlehero font-secondary font-medium md:w-[620px] lg:w-[900px] sm:text-[32px] md:text-[46px] xl:text-[58px] lg:leading-[90px] sm:ml-[5px] mb-[40px]'>
              {t('title_hero')}
            </h1>
          </div>
          <div className='space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px] '>
            <p className='font-primary font-normal sm:w-[280px] md:w-[600px] sm:text-[16px] md:text-[20px] sm:leading-[19px] xl:leading-[23px]'>
              {t('Subtitle_hero')}
            </p>
            <p className='font-primary font-normal sm:w-[290px] md:w-[497px] sm:text-[16px] md:text-[20px] '>
              {t('paragraph_hero')}
            </p>
            <div className='flex'>
              <a href='https://website.coderlabs.co/' target='_blank' rel='noreferrer'>
                <IButton label={t('Make_it_happen')} variant='contained' />
              </a>
              <div className='mr-[20px]' />
              <a href='https://calendly.com/coderlabs' target='_blank' rel='noreferrer'>
                <IButton label={t('Book_a_call')} variant='outlined' />
              </a>
            </div>
          </div>
        </div>
        <div className='lg:h-[572px] lg:w-[472px]'>
          <Image
            alt='rocket'
            src={rocket}
            className='sm:w-[364px] sm:h-[364px] md:w-[572px] md:h-[572px] xl:h-[620px] xl:mt-[-95px] '
          />
        </div>
      </div>
    </div>
  )
}
