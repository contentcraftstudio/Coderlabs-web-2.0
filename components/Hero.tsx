import Image from "next/image"
import React from "react"
import rocket from "../public/assets/rocket.svg"
import logo from "../public/assets/llavelogo.svg"
import logobajo from "../public/assets/rectangle.svg"
import { useTranslation } from "react-i18next"
import IButton from "./form/Button"
import guion from "../public/assets/guion.ico"

type Props = {}

export default function Hero({}: Props) {
  const { t } = useTranslation()
  return (
    <div className='w-[100%] sm:px-[30px] md:px-[60px] lg:px-[103px]'>
      <div className='grid sm:grid-cols-1 xl:grid-cols-3'>
        <div className='col-span-2 divide-y-2 divide-gray-800'>
          <div>
            <Image
              className='lg:mb-[-72px] md:mb-[-60px] sm:w-[20px] sm:mb-[-43px] sm:ml-[-10px] lg:w-[19px] sm:h-[36px] md:h-[50px] lg:h-[58px]'
              src={logo}
              alt='coderlabs'
              width={20}
              height={70}
            />
            <h1 className='font-secondary font-medium md:w-[624px] lg:w-[900px] sm:text-[34px] md:text-[48px] xl:text-[60px] lg:leading-[90px] sm:ml-[5px] mb-[40px]'>
              {t("title_hero")}
            </h1>      
            <i className="fas fa-band-aid"></i>

          </div>
          <div className='space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px] '>
            <p className='font-primary font-normal sm:w-[305px] md:w-[600px] sm:text-[16px] md:text-[20px] sm:leading-[19px] xl:leading-[23px]'>
              {t("Subtitle_hero")}
            </p>
            <p className='font-primary font-normal sm:w-[290px] md:w-[497px] sm:text-[16px] md:text-[20px] '>
              {t("paragraph_hero")}
            </p>
            <div className='flex'>
              <IButton label={t("Make_it_happen")} variant={"contained"} />
              <div className='mr-[20px]' />
              <IButton label={t("Book_a_call")} variant={"outlined"} />
            </div>
          </div>
        </div>
        <div className="lg:h-[572px] lg:w-[472px]">
          <Image 
          alt='rocket' 
          src={rocket} 
          className="sm:w-[364px] sm:h-[364px] md:w-[572px] md:h-[572px] xl:h-[620px] xl:mt-[-95px] "
          />
        </div>
      </div>
    </div>
  )
}
