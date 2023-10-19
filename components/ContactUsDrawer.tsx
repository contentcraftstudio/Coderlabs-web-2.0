import React, { useEffect, useState } from 'react'
import Image from 'next/dist/client/image'
import messageOrange from '../public/assets/tree/message.svg'
import chevronRight from '../public/assets/tree/chevron-right.svg'
import closeIcon from '../public/assets/tree/x-mark.svg'
import shareIcon from '../public/assets/tree/arrow-up-tray.svg'
import SaveToContacts from './SaveToContacts'
import atIcon from '../public/assets/tree/atIcon.svg'
import phoneIcon from '../public/assets/tree/phoneIcon.svg'
import locationIcon from '../public/assets/tree/locationIcon.svg'
import clockIcon from '../public/assets/tree/clockIcon.svg'

const dataToShare = {
    title: 'CoderLabs',
    text: 'CoderLabs | Tree',
    url: 'https://coderlabs.co/tree', 
}

export default function ContactUsDrawer () {
  const [isOpen, setIsOpen] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share(dataToShare)
          .then(() =>
            console.log("Hooray! Your content was shared")
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      console.log(
        "Web share is currently not supported on this browser."
      );
    }
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
        }}
        className='flex w-full justify-between items-center px-2 py-1 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
      >
        <Image src={messageOrange} alt='Contact Us CoderLabs' />
        <span className='italic'>Contact Us</span>
        <Image src={chevronRight} alt='Arrow Icon' />
      </button>
      <main
        className={
          ' fixed z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
          (isOpen
            ? ' transition-opacity opacity-100 duration-500 translate-y-0  '
            : ' transition-all delay-500 opacity-0 translate-y-full  ')
        }
      >
        <section
          className={
            'rounded-t-[20px] w-screen max-w-lg bottom-0 absolute bg-white h-full delay-400 duration-500 ease-in-out transition-all transform  ' +
            (isOpen ? ' translate-y-[350px] ' : ' translate-y-full ')
          }
        >
          <article className='relative w-screen max-w-lg pb-10 flex flex-col gap-4 h-full space-y-6 p-6'>

            <section className='w-full flex justify-between items-center'>
              <button onClick={handleShare}>
                <Image src={shareIcon} alt='Share' />
              </button>
              <p className='uppercase font-semibold text-base'>Contact us</p>
              <button onClick={() => setIsOpen(false)}>
                <Image src={closeIcon} alt='Close button' />
              </button>
            </section>

            <ul className='flex flex-col gap-4 text-xs font-medium'>
              <li className='flex gap-3 px-2'><Image src={atIcon} alt='Mail' />contact@coderlabs.co</li>
              <li className='flex gap-3 px-2'><Image src={phoneIcon} alt='Mail' />300 277 1564</li>
              <li className='flex items-start gap-3 px-2'><Image src={locationIcon} alt='Mail' />Calle 35A No. 17-74, piso 3, Barranquilla, Atlantico, Colombia, 080006.</li>
              <li className='flex items-start gap-3 px-2'><Image src={clockIcon} alt='Mail' />Lunes - viernes 9:00 a 18:00 Confirmar antes de llegar.</li>
            </ul>

            <SaveToContacts />
          </article>

        </section>
        <section
          className=' w-screen h-full cursor-pointer '
          onClick={() => {
            setIsOpen(false)
          }}
        />
      </main>
    </>
  )
}
