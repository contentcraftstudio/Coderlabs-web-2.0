'use client'
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-tag-spacing */
import Image from 'next/dist/client/image'
import React from 'react'
import linkedin from '../public/assets/tree/linkedin.svg'
import face from '../public/assets/tree/face_ico.svg'
import newTwitter from '../public/assets/tree/newTwitter.svg'
import email from '../public/assets/tree/mailbox.svg'
import youtube from '../public/assets/tree/youtube.svg'
import threads from '../public/assets/tree/threads.svg'
import chevronRight from '../public/assets/tree/chevron-right.svg'
import globeOrange from '../public/assets/tree/globe-orange.svg'
import whatsAppOrange from '../public/assets/tree/whatsapp-orange.svg'
import mediumOrange from '../public/assets/tree/medium-orange.svg'
import behanceOrange from '../public/assets/tree/behance-orange.svg'
import sparkklesOrange from '../public/assets/tree/sparkles.svg'
import tiktokOrange from '../public/assets/tree/tiktok.svg'
import coderLabsLogo from '../public/assets/tree/coderlabsLogo.svg'
import ContactUsDrawer from '@/components/ContactUsDrawer'
import imageBackground from '../public/assets/tree/heroRocket.png'

const message =
  '¡Hola! ¿Podrían proporcionarme detalles sobre las soluciones que tienen disponibles y cómo podrían adaptarse a las necesidades de mi proyecto?'
const encodedMessage = encodeURIComponent(message)

const usefulLinks = {
  website: 'https://coderlabs.co/',
  whatsApp: `https://api.whatsapp.com/send?phone=3002771564&text=${encodedMessage}`,
  medium: 'https://medium.com/@coderlabs',
  behance: 'https://www.behance.net/coderlabs_',
  rate: 'https://g.page/r/CeExmkLNPfbeEBM/review',
  tikTok: 'https://www.tiktok.com/@coderlabs_?_t=8g2ifUx4JJF&_r=1'
}

const socialMedia = {
  linkedin: 'https://www.linkedin.com/company/coderlabsco/',
  facebook: 'https://www.facebook.com/coderlabs.code',
  mail: 'mailto:contact@coderlabs.co',
  twitter: 'https://twitter.com/coderlabs_?s=09',
  threads: 'https://www.threads.net/@coderlabs_',
  youtube: 'https://www.youtube.com/channel/UCXNrRjrjXpRlkoUsac4BEEg'
}

export default function tree () {
  return (
    <section className='bg-[#000]'>
      <div className='max-w-lg min-w-[360px] mx-auto relative'>
        <Image
          src={imageBackground}
          alt='CoderLabs Rocket'
          style={{
            width: '100%',
            height: 450,
            objectFit: 'cover',
            objectPosition: 'top'
          }}
        />
        <div className='flex justify-center w-full h-[450px] absolute top-0'>
          <Image
            alt='Coderlabs Logo'
            className='w-fill h-[160px] absolute'
            src={coderLabsLogo}
          />
        </div>
        <div className='main-tree bg-gray-800 rounded-t-[20px]'>
          <p className='text-center text-gray-300 font-medium text-sm font-primary px-6'>
            We empower your digital transformation and automate your processes!
          </p>
          <section className='buttons w-full'>
            <button
              onClick={() => {
                window.open(usefulLinks.website)
              }}
              className='flex w-full justify-between items-center px-3 py-2 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={globeOrange} alt='coderlabs web' />
              <span className='italic'>Website</span>
              <Image src={chevronRight} alt='arrow' />
            </button>
            <button
              onClick={() => {
                window.open(usefulLinks.whatsApp)
              }}
              className='flex w-full justify-between items-center px-3 py-2 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={whatsAppOrange} alt='WhatsApp CoderLabs' />
              <span className='italic'>WhatsApp</span>
              <Image src={chevronRight} alt='arrow' />
            </button>
            <button
              onClick={() => {
                window.open(usefulLinks.medium)
              }}
              className='flex w-full justify-between items-center px-3 py-2 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={mediumOrange} alt='Medium CoderLabs' />
              <span className='italic'>Medium</span>
              <Image src={chevronRight} alt='arrow icon' />
            </button>

            <button
              onClick={() => {
                window.open(usefulLinks.behance)
              }}
              className='flex w-full justify-between items-center px-3 py-2 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={behanceOrange} alt='Behance CoderLabs' />
              <span className='italic'>Behance</span>
              <Image src={chevronRight} alt='arrow icon' />
            </button>
            <ContactUsDrawer />

            <button
              onClick={() => {
                window.open(usefulLinks.rate)
              }}
              className='flex w-full justify-between items-center px-3 py-2 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={sparkklesOrange} alt='medium coderlabs' />
              <span className='italic'>Rate your experience</span>
              <Image src={chevronRight} alt='Arrow Icon' />
            </button>

            <button
              onClick={() => {
                window.open(usefulLinks.tikTok)
              }}
              className='flex w-full justify-between items-center px-3 py-2 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={tiktokOrange} alt='medium coderlabs' />
              <span className='italic'>TikTok</span>
              <Image src={chevronRight} alt='something' />
            </button>
          </section>
          <p className='text-center text-gray-300 font-medium text-sm font-primary'>
            Stay informed and more!
          </p>
          <section className='red-social'>
            <a
              href={socialMedia.linkedin}
              target='_blank'
              className='btn-social'
            >
              <Image src={linkedin} width={20} height={20} alt='linkedin coderlabs' />
            </a>
            <a
              href={socialMedia.facebook}
              target='_blank'
              className='btn-social'
            >
              <Image src={face} width={11} height={11} alt='facebook coderlabs' />
            </a>
            <a href={socialMedia.mail} target='_blank' className='btn-social'>
              <Image src={email} width={20} height={20} alt='email coderlabs' />
            </a>
            <a
              href={socialMedia.twitter}
              target='_blank'
              className='btn-social'
            >
              <Image src={newTwitter} width={20} height={20} alt='twitter coderlabs' />
            </a>
            <a
              href={socialMedia.threads}
              target='_blank'
              className='btn-social'
            >
              <Image src={threads} width={20} height={20} alt='threads coderlabs' />
            </a>
            <a
              href={socialMedia.youtube}
              target='_blank'
              className='btn-social'
            >
              <Image src={youtube} width={20} height={20} alt='youtube coderlabs' />
            </a>
          </section>
        </div>
      </div>
    </section>
  )
}
