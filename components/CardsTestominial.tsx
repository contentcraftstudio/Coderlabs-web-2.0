import { TestimonialData } from "@/pages/apis/testimonialData"
import React from "react"
import CardTestimonials from "./CardTestimonials"

type Props = {}

export default function CardsTestominial({}: Props) {
  const data = TestimonialData.data
  return (
    <div>
      <div className=' flex flex-col lg:flex-row justify-center items-center gap-[60px]'>
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
