import { CardData } from '@/pages/apis/cardsData'
import React from 'react'
import Card from './Card'

type Props = {}

export default function Cards ({}: Props) {
  return (
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
  )
}
