import { TestimonialData } from '@/pages/apis/testimonialData'
import React from 'react'
import CardTestimonials from './CardTestimonials'

type Props = {}

export default function CardsTestominial ({}: Props) {
  return (
    <div className='grid grid-flow-row-dense grid-cols-2 gap-[60px] md:grid-flow-row"'>
      {TestimonialData.data.map((item, index) => {
        return (
          <div key={item.name}>
            <CardTestimonials
              img={item.img}
              name={item.name}
              occupation={item.occupation}
              paragraph={item.paragraph}
            />
          </div>
        )
      })}
    </div>
  )
}
