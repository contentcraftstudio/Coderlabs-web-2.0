import React from 'react'
import CardTestimonials from './CardTestimonials'
import kevin from '../public/assets/testimonial/kevin.png'
import armando from '../public/assets/testimonial/armando.png'
import melissa from '../public/assets/testimonial/melissa.png'

const TestimonialData = {
  data: [
    {
      img: kevin,
      name: 'KEVIN MOLINARES',
      occupation: 'Back-end developer',
      paragraph: 'testimonials_kevin'
    },
    {
      img: armando,
      name: 'ARMANDO GUZMÁN',
      occupation: 'Tech lead',
      paragraph: 'testimonials_armando'
    },
    {
      img: melissa,
      name: 'MELISSA VEGA ',
      occupation: 'Director of Customer Operations',
      paragraph: 'testimonials_melissa'
    }
  ]
}

export default function CardsTestominial () {
  const data = TestimonialData.data
  return (
    <div className='sm:px-[30px] md:px-[62px] lg:px-[103px] 2xl:px-[60px]'>
      <div className='flex flex-col xl:flex-row justify-center items-center gap-[60px]'>
        <CardTestimonials
          img={data[0].img}
          name={data[0].name}
          occupation={data[0].occupation}
          paragraph={data[0].paragraph}
        />
        <CardTestimonials
          img={data[1].img}
          name={data[1].name}
          occupation={data[1].occupation}
          paragraph={data[1].paragraph}
        />
      </div>
      <div className='flex flex-col justify-center items-center mt-[60px]'>
        <CardTestimonials
          img={data[2].img}
          name={data[2].name}
          occupation={data[2].occupation}
          paragraph={data[2].paragraph}
        />
      </div>
    </div>
  )
}
