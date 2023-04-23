import Image from 'next/dist/client/image'
import React from 'react'
import Logo from '../public/Assets/tree/logoTree.svg'
import twitter from '../public/Assets/tree/twitter.svg'
import linkedin from '../public/Assets/tree/linkedin.svg'
import face from '../public/Assets/tree/face_ico.svg'
import web from '../public/Assets/tree/web.svg'
import medium from '../public/Assets/tree/medium.svg'
import behance from '../public/Assets/tree/behance.svg'
import whatsapp from '../public/Assets/tree/whatsapp.svg'

export default function tree () {
  return (
    <div className='body-tree'>
      <div className='main-tree'>
        <div>
          <Image
            alt='Coderlabs Logo'
            className='img-primary'
            src={Logo}
          />
        </div>
        <section className='red-social'>
          <a href='https://twitter.com/coderlabs_?s=09' target='_blank' className='btn-social' rel='noreferrer'>
            <Image
              src={twitter}
              width={18}
              alt='twitter coderlabs'
            />
          </a>
          <a href='https://www.linkedin.com/company/coderlabs/?viewAsMember=true' target='_blank' className='btn-social' rel='noreferrer'>
            <Image
              src={linkedin}
              width={16}
              alt='linkedin coderlabs'
            />
          </a>
          <a href='https://www.facebook.com/coderlabs.code' target='_blank' className='btn-social' rel='noreferrer'>
            <Image
              src={face}
              width={11}
              alt='facebook coderlabs'
            />
          </a>
        </section>
        <section className='buttons'>
          <a href='https://coderlabs.co/'>
            <div className='go'>
              <Image src={web} alt='coderlabs web' />
              <p className='btn-text'>Website</p>
            </div>
          </a>
          <a href='https://medium.com/@coderlabs'>
            <div className='go'>
              <Image src={medium} alt='coderlabs web' />
              <p className='btn-text'>Medium</p>
            </div>
          </a>
          <a href='https://www.behance.net/coderlabs_'>
            <div className='go'>
              <Image src={behance} alt='coderlabs web' />
              <p className='btn-text'>Behance</p>
            </div>
          </a>
          <a href='https://api.whatsapp.com/send?phone=+573226320675&text=hola,%20qué%20tal?'>
            <div className='go'>
              <Image src={whatsapp} alt='coderlabs web' />
              <p className='btn-text'>Whatsapp</p>
            </div>
          </a>
        </section>
      </div>
    </div>
  )
}
