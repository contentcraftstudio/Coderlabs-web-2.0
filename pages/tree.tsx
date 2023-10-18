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

const usefulLinks = {
  website: 'https://coderlabs.co/',
  whatsApp:
    'https://api.whatsapp.com/send?phone=3002771564&text=%C2%A1Hola!%2520%C2%BFPodr%C3%ADan%2520proporcionarme%2520detalles%2520sobre%2520las%2520soluciones%2520que%2520tienen%2520disponibles%2520y%2520c%C3%B3mo%2520podr%C3%ADan%2520adaptarse%2520a%2520las%2520necesidades%2520de%2520mi%2520proyecto?',
  medium: 'https://medium.com/@coderlabs',
  behance: 'https://www.behance.net/coderlabs_',
  rate: 'https://www.google.com/search?q=coderlabs&oq=coderlabs+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQRRgnGDsyBggCECMYJzIGCAMQABgeMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg80gEIMzA2MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x8ef5d33f5ec4df59:0xdef63dcd429a31e1,3',
  tikTok: 'https://www.tiktok.com/@coderlabs_?_t=8g2ifUx4JJF&_r=1'
}

const socialMedia = {
  linkedin: 'https://www.linkedin.com/company/coderlabsco/mycompany/',
  facebook: 'https://www.facebook.com/coderlabs.code',
  mail: 'mailto:contact@coderlabs.co',
  twitter: 'https://twitter.com/coderlabs_?s=09',
  threads: 'https://www.threads.net/@coderlabs_',
  youtube: 'https://www.youtube.com/channel/UCXNrRjrjXpRlkoUsac4BEEg'
}

export default function tree () {
  return (
    <section className='bg-gray-800 h-fit'>
      <div className='body-tree max-w-md mx-auto'>
        <div className='image-tree flex justify-center w-full h-[420px]'>
          <Image
            alt='Coderlabs Logo'
            className='w-fill h-[160px]'
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
              className='flex w-full justify-between items-center px-2 py-1 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={globeOrange} alt='coderlabs web' />
              <span className='italic'>Website</span>
              <Image src={chevronRight} alt='arrow' />
            </button>
            <button
              onClick={() => {
                window.open(usefulLinks.whatsApp)
              }}
              className='flex w-full justify-between items-center px-2 py-1 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={whatsAppOrange} alt='WhatsApp CoderLabs' />
              <span className='italic'>WhatsApp</span>
              <Image src={chevronRight} alt='arrow' />
            </button>
            <button
              onClick={() => {
                window.open(usefulLinks.medium)
              }}
              className='flex w-full justify-between items-center px-2 py-1 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={mediumOrange} alt='Medium CoderLabs' />
              <span className='italic'>Medium</span>
              <Image src={chevronRight} alt='arrow icon' />
            </button>

            <button
              onClick={() => {
                window.open(usefulLinks.behance)
              }}
              className='flex w-full justify-between items-center px-2 py-1 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
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
              className='flex w-full justify-between items-center px-2 py-1 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
            >
              <Image src={sparkklesOrange} alt='medium coderlabs' />
              <span className='italic'>Rate your experience</span>
              <Image src={chevronRight} alt='Arrow Icon' />
            </button>

            <button
              onClick={() => {
                window.open(usefulLinks.tikTok)
              }}
              className='flex w-full justify-between items-center px-2 py-1 border-2 rounded-[50px] border-gray-500 text-white font-semibold text-xs'
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
              <Image src={linkedin} width={16} alt='linkedin coderlabs' />
            </a>
            <a
              href={socialMedia.facebook}
              target='_blank'
              className='btn-social'
            >
              <Image src={face} width={11} alt='facebook coderlabs' />
            </a>
            <a href={socialMedia.mail} target='_blank' className='btn-social'>
              <Image src={email} width={18} alt='email coderlabs' />
            </a>
            <a
              href={socialMedia.twitter}
              target='_blank'
              className='btn-social'
            >
              <Image src={newTwitter} width={18} alt='twitter coderlabs' />
            </a>
            <a
              href={socialMedia.threads}
              target='_blank'
              className='btn-social'
            >
              <Image src={threads} width={18} alt='threads coderlabs' />
            </a>
            <a
              href={socialMedia.youtube}
              target='_blank'
              className='btn-social'
            >
              <Image src={youtube} width={18} alt='youtube coderlabs' />
            </a>
          </section>
        </div>
      </div>
    </section>
  )
}
