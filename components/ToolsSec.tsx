import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import TechnologiesGrid from './TechnologiesGrid'

export default function ToolsSec () {
  const { t } = useTranslation()

  const [widthTitle, setWidthTitle] = useState('lg:w-[702px]')

  useEffect(() => {
    function handleResize () {
      if (window.innerWidth > 1430 && window.innerWidth <= 1650) {
        setWidthTitle('lg:w-[500px]')
      } else {
        setWidthTitle('lg:w-full')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id='tools'
      className='grid sm:grid-cols-1 xl:grid-cols-2 gap-[80px] py-[32px] md:px-[62px] xl:px-[103px] 2xl:px-[60px]'
    >
      <div className='sm:text-center xl:text-start xl:divide-y-2 divide-gray-800 sm:px-[30px]'>
        <h3 className={`font-secondary font-medium sm:text-[34px] md:text-[48px] xl:pb-[40px] sm:mb-[20px] ${widthTitle}`}>
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
