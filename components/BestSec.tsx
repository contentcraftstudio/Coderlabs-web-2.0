/* eslint-disable no-undef */
import Image from "next/image"
import React from "react"
import aliados from "../public/assets/aliado.svg"
import impacto from "../public/assets/impacto.svg"
import { useTranslation } from "react-i18next"

type Props = {
  img: any
  alt: string
  color: string
  title: string
  description: string
  textColor: string
}

function Card({
  img,
  alt,
  color,
  title,
  description,
  textColor,
}: Props): JSX.Element {
  return (
    <div
      className={`sm:w-[330px] md:w-[600px] xl:w-[600px] flex flex-col sm:gap-[10px] md:gap-[24px] lg:gap-[24px] rounded border-b-[22px] ${color} sm:px-[20px] md:px-[60px] lg:px-[60px] sm:pt-[36px] md:pt-[85px] lg:pt-[85px] shadow-[0px_0px_40px_rgba(0,0,0,0.06)]`}
    >
      <div className='flex justify-center'>
        <Image
          alt={alt}
          src={img}
          width={36}
          className=' sm:w-[36px] sm:h-[36px] xl:w-[64px] lg:h-[64px] '
        />
      </div>
      <p
        className={`text-center ${textColor} font-semibold sm:text-base md:text-xl lg:text-xl`}
      >
        {title}
      </p>
      <p className='text-center sm:text-[14px] md:text-[16px] xl:text-[20px] pt-[10px] font-Roboto mb-[58px] leading-[23px]'>
        {description}
      </p>
    </div>
  )
}

export default function BestSec(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className='w-[100%]'>
      <h3 className=' font-secondary font-medium text-center sm:text-[34px] md:text-[48px] xl:text-[64px] sm:mb-[25px] md:mb-[60px] lg:mb-[115px]'>
        {t("We_are_the_best_choice")}
      </h3>
      <div className='flex flex-wrap justify-center sm:gap-[44px] md:gap-[60px] xl:gap-[70px]'>
        <Card
          img={aliados}
          alt={t("We_are_your_allies")}
          color='border-orange'
          textColor='text-orange'
          title={t("We_are_your_allies")}
          description={t("paragraph_card_best_choice")}
        />
        <Card
          img={impacto}
          alt={t("Positive_impact")}
          color='border-green'
          textColor='text-green'
          title={t("Positive_impact")}
          description={t("paragraph_card_positive_impact")}
        />
      </div>
    </div>
  )
}
