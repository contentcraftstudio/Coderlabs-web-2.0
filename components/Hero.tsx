
import { useSize } from 'ahooks'
import Image from 'next/image'
import React from 'react'
import rocket from '../public/assets/rocket.svg'
import logo from '../public/assets/llavelogo.svg'
import logobajo from '../public/assets/rectangle.svg'
import { useTranslation } from 'react-i18next'
import { Dom } from '@/settings/util'

type Props = {}

export default function Hero ({}: Props) {
  const size = useSize(Dom)
  const imgSize = size?.width <= 380 ? 364 : size?.width >= 381 && size?.width <= 768 ? 520 : 600

  const { t } = useTranslation()
  return (
    <>
      <div className=' h-screen-50' />
      <div className='grid sm:grid-cols-1 xl:grid-cols-3'>
        <div className='col-span-2 divide-y-2'>
          <div className='flex sm:pb-[20px] md:p-[40px]]'>
            <Image
              className=' self-start'
              src={logo}
              alt='coderlabs'
              width={20}
              height={70}
            />
            <h1 className='font-secondary font-medium sm:text-[34px] md:text-[48px] xl:text-[60px]'>{t('title_hero')}</h1>
            <Image
              className=' self-end'
              src={logobajo}
              alt='coderlabs'
              width={32}
              height={5}
              style={{ marginBlockEnd: 24 }}
            />
          </div>
          <div className=' space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px]'>
            <p className='font-secondary font-normal sm:w-[290px] md:w-[600px]  sm:text-[16px] md:text-[20px] '>{t('Subtitle_hero')}</p>
            <p className='font-secondary font-normal sm:w-[290px] md:w-[497px] sm:text-[16px] md:text-[20px] '>{t('paragraph_hero')}</p>
          </div>
        </div>
        <div className=' mx-auto'>
          <Image
            alt='rocket'
            src={rocket}
            width={imgSize}
            height={imgSize}
          />
        </div>
      </div>
    </>
  )
}
