/* eslint-disable no-undef */
import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import logo from '../public/assets/llavelogo.svg'
import logobajo from '../public/assets/rectangle.svg'
import facebook from '../public/assets/facebook.svg'
import instagram from '../public/assets/instagram.svg'
import twitter from '../public/assets/twitter.svg'
import linkedin from '../public/assets/linkedin.svg'

type Props = {}

export default function Footer ({}: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className=' w-[100%] grid grid-cols-1 divide-y-2 divide-gray-300 px-4 container'>
      <div className='py-[18px] flex justify-start'>
        <Image
          src={logo}
          alt='coderlabs'
          width={20}
          height={70}
        />
        <h3 className='font-secondary text-[64px] font-bold text-white px-1'>{t('Navigate')}</h3>
      </div>
      <div className='py-[22px] flex justify-start gap-[40px] flex-wrap sm:text-center'>
        <a href='#'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>{t('Identity')}</p>
        </a>
        <a href='#'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>{t('Services')}</p>
        </a>
        <a href='#'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>{t('Tools')}</p>
        </a>
        <a href='#'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>{t('Advantages')}</p>
        </a>
        <a href='#'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>{t('Team')}</p>
        </a>
        <a href='#'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>{t('Blog')}</p>
        </a>
      </div>
      <div className='py-[18px] flex justify-start items-end'>
        <h3 className='font-secondary text-[64px] font-bold text-white px-1'>{t('Contact')}</h3>
        <Image
          src={logobajo}
          alt='coderlabs'
          width={32}
          height={5}
          style={{ marginBlockEnd: 24 }}
        />
      </div>
      <div className='py-[18px] flex justify-between flex-wrap px-[8px] items-center'>
        <div className='flex justify-between gap-[16px] sm:text-center'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>contact@coderlabs.co</p>
          <p className='font-primary text-[20px] font-medium text-gray-100 text-center'>1234567890</p>
          <p className='font-primary text-[20px] font-medium text-gray-100 text-center'>Barranquilla</p>
        </div>
        <div className='sm:text-center'>
          <p className='font-primary text-[20px] font-medium text-gray-100 text-center'>Book a call</p>
        </div>
        <div className='sm:text-center flex justify-between gap-[30px]'>
          <a href='#'>
            <Image
              src={instagram}
              alt='coderlabs instagram'
              width={32}
              height={32}
              style={{ marginBlockEnd: 24 }}
            />
          </a>
          <a href='#'>
            <Image
              src={facebook}
              alt='coderlabs facebook'
              width={32}
              height={32}
              style={{ marginBlockEnd: 24 }}
            />
          </a>
          <a href='#'>
            <Image
              src={twitter}
              alt='coderlabs twitter'
              width={32}
              height={32}
              style={{ marginBlockEnd: 24 }}
            />
          </a>
          <a href='#'>
            <Image
              src={linkedin}
              alt='coderlabs linkedin'
              width={32}
              height={32}
              style={{ marginBlockEnd: 24 }}
            />
          </a>
        </div>
      </div>
      <div className='py-[18px]'>
        <p className='font-primary text-[16px] font-medium text-gray-400 text-center'>2023 CoderLabs SAS. Developing with love Barranquilla, Colombia.</p>
      </div>
    </div>
  )
}
