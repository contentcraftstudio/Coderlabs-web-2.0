import React from 'react'
import { useTranslation } from 'react-i18next'
import ProfileEdit from './SwiperTeam'

type Props = {}

export default function Team ({}: Props) {
  const { t } = useTranslation()
  return (
    <>
      <div className=' flex sm:flex-col md:flex-row justify-between pt-[40px]'>
        <h3 className='font-primary font-normal sm:text-[16px] md:text-[20px] text-orange sm:pb-[32px]'>{t('Our_team')}</h3>
        <p className=' sm:w-[280px] md:w-[330px] xl:w-[430px] font-primary text-white font-normal sm:text-[16px] md:text-[20px]'>{t('paragraph_our_team')}</p>
      </div>
      <ProfileEdit />
    </>
  )
}
