// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper'

const TEAM = [
  {
    id: 1,
    name: 'Bryan Bolivar',
    occupation: 'Founder',
    linkedIn: '',
    photo: ''
  },
  {
    id: 2,
    name: 'Melissa Vega',
    occupation: 'Director of Customer Operations',
    linkedIn: '',
    photo: ''
  },
  {
    id: 3,
    name: 'Armando Guzman',
    occupation: 'Tech Lead',
    linkedIn: '',
    photo: ''
  },
  {
    id: 4,
    name: 'Ricardo Torres',
    occupation: 'Product Designer',
    linkedIn: '',
    photo: ''
  },
  {
    id: 5,
    name: 'Laura Jaimini',
    occupation: 'Growth Brand',
    linkedIn: '',
    photo: ''
  },
  {
    id: 6,
    name: 'Jose Perez',
    occupation: 'Front-end Developer',
    linkedIn: '',
    photo: ''
  },
  {
    id: 7,
    name: 'Kevin Molinares',
    occupation: 'Back-end Developer',
    linkedIn: '',
    photo: ''
  },
  {
    id: 8,
    name: 'Roberto Bolivar',
    occupation: 'Front-end Developer',
    linkedIn: '',
    photo: ''
  },
  {
    id: 9,
    name: 'Kevin Molinares',
    occupation: 'Back-end Developer',
    linkedIn: '',
    photo: ''
  },
  {
    id: 10,
    name: 'Jesus Barros',
    occupation: 'Front-end Developer',
    linkedIn: '',
    photo: ''
  }
]
export default function ProfileEdit () {
  return (
    <Swiper
      init={false}
      className='md:px-[50px] lg:px-[130px] pt-[50px] pb-[40px] lg:pt-[120px]'
      effect='creative'
      grabCursor={false}
      slideToClickedSlide
      loop
      modules={[EffectCreative]}
      loopedSlides={3}
      speed={700}
      breakpoints={{
        0: {
          slidesPerView: 1,
          creativeEffect: {
            limitProgress: 3,
            perspective: false,
            progressMultiplier: 3,
            shadowPerProgress: true,
            prev: {
              scale: 1,
              translate: [0, '100%', 0]
            },
            next: {
              scale: 0.96,
              translate: ['-2%', '-3.2%', 0]
            }
          }
        },
        769: {
          slidesPerView: 1.06,
          creativeEffect: {
            limitProgress: 3,
            perspective: false,
            progressMultiplier: 3,
            shadowPerProgress: true,
            prev: {
              scale: 1,
              translate: [0, '100%', 0]
            },
            next: {
              scale: 0.96,
              translate: ['1.50%', 0, -20]
            }
          }
        }
      }}
      onClick={(e) => {
        e.slideNext()
      }}
    >
      {TEAM.map((team, index) => (
        <SwiperSlide key={index}>
          <div className='member-block rounded bg-white text-[#444444] p-[15px] pt-[60px] md:p-[30px] lg:p-[60px] md:pt-[80px] h-full'>
            <div className='member__holder'>
              <div className='flex justify-end items-end'>
                <p className='text-[24px] md:text-[32px] lg:text-[40px] xl:text-[77px] leading-none uppercase font-secondary font-bold mb-0'>
                  <span>{team.id}</span><span>/</span><span>{TEAM.length}</span>
                </p>
              </div>
              <div className='grid grid-cols-2 items-end'>
                <div className='member__data'>
                  <h3 className='text-[24px] sm:text-[48px] lg:text-[60px] xl:text-[80px] leading-[1.2] uppercase font-secondary font-bold mb-0 overflow-hidden overflow-ellipsis whitespace-nowrap mb-[20px] xl:mb-[70px]'>
                    {team.name.split(' ')[0]}<br/>{team.name.split(' ')[1]}
                  </h3>
                  <div className='flex justify-around md:gap-8 w-fit md:grid-cols-2 border-[1px] border-[#444] leading-none rounded-[8px] py-[5px] px-[10px] lg:divide-x divide-solid'>
                    <span className='text-left'>{team.occupation}</span>
                    <span className='text-right md:pl-8 flex items-center gap-2'>
                      <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M2.48193 0C1.38768 0 0.5 0.886219 0.5 1.98047C0.5 3.07472 1.38697 3.98145 2.48047 3.98145C3.57397 3.98145 4.4624 3.07472 4.4624 1.98047C4.4624 0.886969 3.57618 0 2.48193 0ZM12.1514 5.25C10.4871 5.25 9.53487 6.12034 9.07812 6.98584H9.02979V5.48291H5.75V16.5H9.16748V11.0464C9.16748 9.60939 9.27595 8.2207 11.0542 8.2207C12.8069 8.2207 12.8325 9.85921 12.8325 11.1372V16.5H16.2456H16.25V10.4487C16.25 7.48773 15.6134 5.25 12.1514 5.25ZM0.772461 5.48291V16.5H4.19287V5.48291H0.772461Z' fill='#444444'/>
                      </svg>
                      <span>@{team.name}</span>
                    </span>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <div className='rounded overflow-hidden z-1 w-full'>
                    <picture>
                      <div className='bg-gray-200 max-w-full h-[168.07px] sm:h-[219px] lg:h-[360x] object-cover object-top' />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
