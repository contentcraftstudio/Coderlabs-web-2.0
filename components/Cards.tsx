import { CardData } from '@/pages/apis/cardsData'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './Card'

export default function Cards () {
  const { t } = useTranslation()
  return (
    <>
      <div id='services' className='sm:pb-[0px] lg:pb-[10px]'>
        <h2 className='font-secondary font-medium text-center sm:text-[34px] md:text-[48px] lg:text-[60px] mb-[20px]'>
          {t('How_we_do')}
        </h2>
        <p className=' font-primary font-normal text-center sm:text-[16px] md:text-[20px] sm:w-[330px] md:w-[630px] xl:w-[730px] sm:mb-[48px] xl:mb-[-20px] mx-auto sm:leading-[19px] md:leading-[23px]'>
          {t('paragraph_focus')}
        </p>
      </div>
      <div className='flex justify-center flex-wrap gap-[30px]'>
        {CardData.data.map((item) => {
          return (
            <Card
              key={item.title}
              img={item.img}
              title={item.title}
              paragraph={item.paragraph}
              color={item.color}
            />
          )
        })}
      </div>
    </>
  )
}
