import Image from "next/image"
import React from "react"
import rocket from "../public/assets/rocket.svg"
import logo from "../public/assets/llavelogo.svg"
import logobajo from "../public/assets/rectangle.svg"
import { useTranslation } from "react-i18next"
import IButton from "./form/Button"

type Props = {}

export default function Hero({}: Props) {
  const { t } = useTranslation()
  return (
    <div className='w-[100%] sm:px-[30px] md:px-[60px] lg:px-[103px]'>
      <div className='grid sm:grid-cols-1 xl:grid-cols-3'>
        <div className='col-span-2 divide-y-2 divide-gray-800'>
          <div className='flex sm:pb-[20px]'>
            <Image
              className=' self-start mt-[5px] sm:w-[20px] lg:w-[20px] sm:h-[36px]  md:h-[50px] lg:h-[70px]'
              src={logo}
              alt='coderlabs'
              width={20}
              height={70}
            />
            <h1 className='font-secondary font-medium sm:text-[34px] md:text-[48px] xl:text-[60px]'>
              {t("title_hero")}
            </h1>
            <Image
              className=' self-end'
              src={logobajo}
              alt='coderlabs'
              width={32}
              height={5}
              style={{ marginBlockEnd: 20 }}
            />
          </div>
          <div className='space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px]'>
            <p className='font-primary font-normal sm:w-[305px] md:w-[600px] sm:text-[16px] md:text-[20px]'>
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
        <div className='mx-auto sm:w-[364px] md:w-[520px] xl:w-[450px] sm:h-[364px] md:h-[520px] lg:h-[620px]'>
          <Image alt='rocket' src={rocket} />
        </div>
      </div>
    </div>
  )
}
