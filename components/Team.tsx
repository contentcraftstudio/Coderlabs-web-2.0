import React from "react"
import { useTranslation } from "react-i18next"
import ProfileEdit from "./SwiperTeam"

type Props = {}

export default function Team({}: Props) {
  const { t } = useTranslation()
  return (
    <>
      <div
        id='team'
        className='flex sm:flex-col md:flex-row justify-between sm:pt-[40px] md:pt-[60px] lg:pt-[40px] border-t-2 border-white ml-6'
      >
        <h3 className='font-secondary font-medium sm:text-[16px] md:text-[20px] text-orange sm:mb-[32px]'>
          {t("Our_team")}
        </h3>
        <p className='sm:w-[280px] md:w-[330px] xl:w-[406px] font-primary text-white font-normal sm:text-[16px] md:text-[20px] lg:mr-40 sm:leading-[19px] md:leading-[23px]'>
          {t("paragraph_our_team")}
        </p>
      </div>
      <ProfileEdit />
    </>
  )
}
