/* eslint-disable no-undef */
import React from "react"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import logo from "../public/assets/llavelogo.svg"
import logobajo from "../public/assets/rectangle.svg"
import facebook from "../public/assets/facebook.svg"
import instagram from "../public/assets/instagram.svg"
import twitter from "../public/assets/twitter.svg"
import linkedin from "../public/assets/linkedin.svg"

type Props = {}

export default function Footer({}: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className=' w-[100%] grid grid-cols-1 divide-y-2 divide-gray-300 px-4 container'>
      <div className='py-[18px] flex justify-start'>
        <Image
          src={logo}
          alt='coderlabs'
          className=' self-start mt-[6px] lg:mt-[10px]  sm:w-[20px] lg:w-[20px] sm:h-[46px]  md:h-[50px] lg:h-[70px]'
        />
        <h3 className='font-secondary ml-[-8px]  sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold text-white px-1'>
          {t("Navigate")}
        </h3>
      </div>
      <div className='py-[22px] flex justify-start gap-[40px] flex-wrap'>
        <a href='#'>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300 sm:text-start xl:text-center'>
            {t("Identity")}
          </p>
        </a>
        <a href='#'>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300 sm:text-start xl:text-center'>
            {t("Services")}
          </p>
        </a>
        <a href='#'>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300 sm:text-start xl:text-center'>
            {t("Tools")}
          </p>
        </a>
        <a href='#'>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300 sm:text-start xl:text-center'>
            {t("Advantages")}
          </p>
        </a>
        <a href='#'>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300 sm:text-start xl:text-center'>
            {t("Team")}
          </p>
        </a>
        <a href='#'>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300 sm:text-start xl:text-center'>
            {t("Blog")}
          </p>
        </a>
      </div>
      <div className='py-[18px] flex justify-start '>
        <h3 className='font-secondary sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold text-white px-1'>
          {t("Contact")}
        </h3>
        <Image
          src={logobajo}
          alt='coderlabs'
          className='self-end lg:mt-[10px] sm:mb-[-6px]  sm:w-[20px] lg:w-[35px] sm:h-[46px]  md:h-[50px] lg:h-[70px]'
        />
      </div>
      <div className='py-[18px] flex flex-col md:flex-row gap-4 justify-between flex-wrap px-[8px] lg:items-center'>
        <div className='flex flex-col md:flex-row justify-between gap-[16px] '>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-300'>
            contact@coderlabs.co
          </p>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-100'>
            322 7946096
          </p>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-100'>
            Barranquilla
          </p>
        </div>
        <div className='md:text-center sm:py-4 md:py-0'>
          <p className='font-primary sm:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-gray-100 '>
            Book a call
          </p>
        </div>
        <div className='sm:text-center flex justify-between gap-[30px]'>
          <a href='https://www.instagram.com/coderlabs_/' target='_blank'>
            <Image
              src={instagram}
              alt='coderlabs instagram'
              width={32}
              height={32}
              style={{ marginBlockEnd: 24 }}
            />
          </a>
          <a href='https://www.facebook.com/coderlabs.code' target='_blank'>
            <Image
              src={facebook}
              alt='coderlabs facebook'
              width={32}
              height={32}
              style={{ marginBlockEnd: 24 }}
            />
          </a>
          <a href='https://twitter.com/coderlabs_' target='_blank'>
            <Image
              src={twitter}
              alt='coderlabs twitter'
              width={32}
              height={32}
              style={{ marginBlockEnd: 24 }}
            />
          </a>
          <a href='https://www.linkedin.com/company/coderlabs/' target='_blank'>
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
        <p className='font-primary sm:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-gray-400 text-center'>
          {t("Copy")}
        </p>
      </div>
    </div>
  )
}
