import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './Card'
import ux from '../public/assets/ux.svg'
import dev from '../public/assets/development.svg'
import devops from '../public/assets/devops.svg'
import marketing from '../public/assets/marketing.svg'

const CardData = {
  data: [
    {
      img: ux,
      title: 'Design_ui_ux',
      paragraph: 'paragraph_card_desing',
      color: 'border-b-orange'
    },
    {
      img: dev,
      title: 'Development',
      paragraph: 'paragraph_card_development',
      color: 'border-b-green'
    },
    {
      img: devops,
      title: 'Dev_ops',
      paragraph: 'paragraph_card_dev_ops',
      color: 'border-b-red'
    },
    {
      img: marketing,
      title: 'Marketing_SEO',
      paragraph: 'paragraph_card_marketing',
      color: 'border-b-gray-200'
    }
  ]
}

export default function Cards () {
  const { t } = useTranslation()
  return (
    <div className='sm:px-[30px]'>
      <div id='services' className='sm:pb-[0px] md:pb-[80px] lg:pb-[113px]'>
        <h2 className='font-secondary font-medium text-center sm:text-[34px] md:text-[48px] lg:text-[60px] mb-[20px]'>
          {t('How_we_do')}
        </h2>
        <p className='font-primary font-normal text-center sm:text-[16px] md:text-[20px] sm:w-auto md:w-[630px] xl:w-[730px] sm:mb-[48px] xl:mb-[-20px] mx-auto sm:leading-[19px] md:leading-[23px]'>
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
    </div>
  )
}
