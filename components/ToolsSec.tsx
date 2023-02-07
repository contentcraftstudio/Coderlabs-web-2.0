import React from 'react'
import { useTranslation } from 'react-i18next'
import TechnologiesGrid from './TechnologiesGrid'

type Props = {}

export default function ToolsSec({}: Props) {
  const { t } = useTranslation()

  return (
    <section className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-2 py-[32px]'>
      <div className=' sm:pb-[50px] md:pb-[30px] sm:text-center lg:text-start lg:divide-y-2 divide-gray-800 px-4'>
        <h3 className=' font-secondary font-medium sm:text-[34px] lg:text-[48px] lg:pb-[40px] sm:pb-4'>{t('Tools_and_technologies')}</h3>
        <p className=' font-primary font-normal sm:text-[16px] lg:text-[20px] lg:pt-[60px] '>{t('paragraph_tools')}</p>
      </div>
      <div className='h-max'>
        <TechnologiesGrid />
      </div>
    </section>
  )
}
