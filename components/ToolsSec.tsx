import React from 'react'
import { useTranslation } from 'react-i18next'
import TechnologiesGrid from './TechnologiesGrid'

export default function ToolsSec () {
  const { t } = useTranslation()

  return (
    <section
      id='tools'
      className='grid sm:grid-cols-1 xl:grid-cols-2 gap-[80px] py-[32px] md:mx-[62px]'
    >
      <div className='sm:text-center xl:text-start xl:divide-y-2 divide-gray-800 px-4'>
        <h3 className='font-secondary font-medium sm:text-[34px] xl:w-[702px] md:text-[48px] xl:pb-[40px] sm:mb-[20px]'>
          {t('Tools_and_technologies')}
        </h3>
        <p className='font-primary font-normal sm:text-[16px] md:text-[20px] lg:pt-[60px] sm:leading-[19px] md:leading-[23px]'>
          {t('paragraph_tools')}
        </p>
      </div>
      <div className='h-max'>
        <TechnologiesGrid />
      </div>
    </section>
  )
}
