import React from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useSize } from "ahooks"
import { Dom } from "@/settings/util"

type Props = {
  color: string
  img: any
  title: string
  paragraph: string
}

export default function Card({ color, img, title, paragraph }: Props) {
  const { t } = useTranslation()
  const size = useSize(Dom)
  const imgSize =
    size?.width <= 380
      ? 100
      : size?.width >= 381 && size?.width <= 768
      ? 110
      : 150
  return (
    <div
      className={`sm:w-[300px] md:w-[310px] xl:w-[375px] flex flex-col gap-[10px] shadow-xl py-[12px] rounded border-b-[22px] px-[12px] ${color}`}
    >
      <div className='flex justify-center'>
        <Image src={img} alt='UI/UX Design' width={imgSize} height={imgSize} />
      </div>
      <div className='w-100% text-center'>
        <h3 className='sm:text-[16px] md:text-[18px] xl:text-xl font-secondary font-medium'>
          {t(title)}
        </h3>
        <p className='sm:text-[14px] md:text-[16px] xl:text-xl font-normal pt-[10px] mb-[21px]'>
          {t(paragraph)}
        </p>
      </div>
    </div>
  )
}
