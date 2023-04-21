/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import logo from '../public/assets/llavelogo.svg'
import logobajo from '../public/assets/rectangle.svg'
import facebook from '../public/assets/facebook.svg'
import instagram from '../public/assets/instagram.svg'
import twitter from '../public/assets/twitter.svg'
import linkedin from '../public/assets/linkedin.svg'
import calendar from '../public/assets/calendar.svg'

type Props = {}

function Lg () {
  const { t } = useTranslation()

  return (
    <div className='grid grid-cols-1 divide-y-2 divide-gray-300 mx-[62px]'>
      <div className='pb-[40px] flex justify-start'>
        <Image
          src={logo}
          alt='coderlabs'
          className='self-start mt-[10px] w-[20px] h-[70px]'
        />
        <h3 className='font-secondary ml-[-8px] text-[64px] font-bold text-white px-1'>
          {t('Navigate')}
        </h3>
      </div>
      <div className='py-[40px] flex justify-start gap-[40px] flex-wrap'>
        <a href='#nav'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>
            {t('Identity')}
          </p>
        </a>
        <a href='#services'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>
            {t('Services')}
          </p>
        </a>
        <a href='#tools'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>
            {t('Tools')}
          </p>
        </a>
        <a href='#advantages'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>
            {t('Advantages')}
          </p>
        </a>
        <a href='#team'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>
            {t('Team')}
          </p>
        </a>
        <a href='#blog'>
          <p className='font-primary text-[20px] font-medium text-gray-300 text-center'>
            {t('Blog')}
          </p>
        </a>
      </div>
      <div className='py-[40px] flex justify-start '>
        <h3 className='font-secondary text-[64px] font-bold text-white px-1'>
          {t('Contact')}
        </h3>
        <Image
          src={logobajo}
          alt='coderlabs'
          className='self-end mt-[10px] w-[35px] h-[50px]'
        />
      </div>
      <div className='py-[40px] flex flex-col md:flex-row gap-4 justify-between flex-wrap px-[8px] items-center'>
        <div className='flex flex-col md:flex-row justify-between gap-[44px] '>
          <p className='font-primary text-[20px] font-medium text-gray-300'>
            contact@coderlabs.co
          </p>
          <p className='font-primary text-[20px] font-medium text-gray-100'>
            3226320675
          </p>
          <p className='font-primary text-[20px] font-medium text-gray-100'>
            Barranquilla
          </p>
        </div>
        <div>
          <a
            href='https://calendly.com/coderlabs'
            target='_blank'
            className='md:text-center flex flex-row items-center gap-[14px] sm:mb-[10px]' rel='noreferrer'
          >
            <p className='h-[22px] font-primary text-[20px] font-medium text-gray-100 '>
              Book a call
            </p>
            <Image
              src={calendar}
              alt='coderlabs'
              className='self-end w-[20px] h-[20px]'
            />
          </a>
        </div>
        <div className='flex justify-between gap-[30px] items-center'>
          <a href='https://www.instagram.com/coderlabs_/' target='_blank' rel='noreferrer'>
            <Image
              src={instagram}
              alt='coderlabs instagram'
              width={32}
              height={32}
            />
          </a>
          <a href='https://www.facebook.com/coderlabs.code' target='_blank' rel='noreferrer'>
            <Image
              src={facebook}
              alt='coderlabs facebook'
              width={32}
              height={32}
            />
          </a>
          <a href='https://twitter.com/coderlabs_' target='_blank' rel='noreferrer'>
            <Image
              src={twitter}
              alt='coderlabs twitter'
              width={32}
              height={32}
            />
          </a>
          <a
            href='https://www.linkedin.com/company/coderlabsco/'
            target='_blank' rel='noreferrer'
          >
            <Image
              src={linkedin}
              alt='coderlabs linkedin'
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
      <div className='py-[40px]'>
        <p className='font-primary text-[16px] font-medium text-gray-400 text-center'>
          {t('Copy')}
        </p>
      </div>
    </div>
  )
}

function Sm () {
  const { t } = useTranslation()

  return (
    <div className='w-[100%] grid grid-cols-1 divide-y-2 divide-gray-300 px-4 container'>
      <div>
        <div className='sm:pb-[34px] md:pb-[44px] flex justify-start'>
          <Image
            src={logo}
            alt='coderlabs'
            className='self-start mt-[6px] sm:w-[20px] sm:h-[46px] md:h-[50px]'
          />
          <h3 className='font-secondary ml-[-8px]  sm:text-[40px] lg:text-[48px] font-bold text-white px-1'>
            {t('Navigate')}
          </h3>
        </div>
        <div className='sm:pb-[40px] md:pb-[44px] flex justify-start sm:gap-[20px] md:gap-[30px] flex-wrap'>
          <a href='#nav'>
            <p className='font-primary sm:text-[16px] md:text-[18px] font-medium text-gray-300 sm:text-start xl:text-center'>
              {t('Identity')}
            </p>
          </a>
          <a href='#services'>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-300 sm:text-start xl:text-center'>
              {t('Services')}
            </p>
          </a>
          <a href='#tools'>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-300 sm:text-start xl:text-center'>
              {t('Tools')}
            </p>
          </a>
          <a href='#advantages'>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-300 sm:text-start xl:text-center'>
              {t('Advantages')}
            </p>
          </a>
          <a href='#team'>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-300 sm:text-start xl:text-center'>
              {t('Team')}
            </p>
          </a>
          <a href='#blog'>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-300 sm:text-start xl:text-center'>
              {t('Blog')}
            </p>
          </a>
        </div>
      </div>
      <div className='sm:py-[24px] md:py-[44px]'>
        <div className='sm:pb-[34px] md:pb-[44px]'>
          <h3 className='font-secondary sm:text-[40px] md:text-[48px] font-bold text-white px-1'>
            {t('Contact')}
          </h3>
        </div>
        <div className='flex flex-col md:flex-row gap-4 justify-between flex-wrap px-[8px]'>
          <div className='flex flex-col md:flex-row justify-between sm:gap-[22px] md:gap-[30px]'>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-300'>
              contact@coderlabs.co
            </p>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-100'>
              3226320675
            </p>
            <p className='font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-100'>
              Barranquilla
            </p>
            <div>
              <a
                href='https://calendly.com/coderlabs'
                target='_blank'
                className='flex flex-row items-center gap-[14px] sm:mb-[10px]' rel='noreferrer'
              >
                <p className='h-[20px] font-primary sm:text-[16px] lg:text-[18px] font-medium text-gray-100'>
                  Book a call
                </p>
                <Image
                  src={calendar}
                  alt='coderlabs'
                  className='self-end w-[20px] h-[20px]'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:py-[24px] md:py-[44px]'>
        <div className='sm:pb-[34px] md:pb-[44px] flex justify-start'>
          <h3 className='font-secondary sm:text-[40px] md:text-[48px] font-bold text-white px-1'>
            {t('Social_media')}
          </h3>
          <Image
            src={logobajo}
            alt='coderlabs'
            className='self-end sm:mb-[-6px] sm:w-[20px] sm:h-[46px] md:h-[50px]'
          />
        </div>
        <div className='flex flex-row sm:gap-[24px] md:gap-[24px]'>
          <a href='https://www.instagram.com/coderlabs_/' target='_blank' rel='noreferrer'>
            <Image
              src={instagram}
              alt='coderlabs instagram'
              width={32}
              height={32}
            />
          </a>
          <a href='https://www.facebook.com/coderlabs.code' target='_blank' rel='noreferrer'>
            <Image
              src={facebook}
              alt='coderlabs facebook'
              width={32}
              height={32}
            />
          </a>
          <a href='https://twitter.com/coderlabs_' target='_blank' rel='noreferrer'>
            <Image
              src={twitter}
              alt='coderlabs twitter'
              width={32}
              height={32}
            />
          </a>
          <a
            href='https://www.linkedin.com/company/coderlabsco/'
            target='_blank' rel='noreferrer'
          >
            <Image
              src={linkedin}
              alt='coderlabs linkedin'
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
      <div className='sm:pt-[24px] md:pt-[44px] flex md:justify-center'>
        <div className='md:w-[350px] sm:pb-[42px] md:pb-[107px]'>
          <p className='font-primary sm:text-[12px] md:text-[14px]font-medium text-gray-400 md:text-center'>
            {t('Copy')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Footer ({}: Props): JSX.Element {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function handleResize () {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  console.log(screenSize)
  if (screenSize.width <= 1000) {
    return <Sm />
  } else {
    return <Lg />
  }
}
