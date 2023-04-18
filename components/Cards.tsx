import { CardData } from '@/pages/apis/cardsData'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './Card'

type Props = {}

export default function Cards ({}: Props) {
  const { t } = useTranslation()
  return (
    <>
      <div className='sm:pb-[0px] lg:pb-[10px]'>
        <h2 className='text-center font-secondary font-medium sm:text-[34px] lg:text-[48px] mb-[40px]'>{t('How_we_do')}</h2>
        <p className=' font-primary font-normal text-center sm:text-[16px] md:text-[20px] sm:w-[330px] md:w-[630px] xl:w-[730px] mx-auto'>{t('paragraph_focus')}</p>
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
