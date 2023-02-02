/* eslint-disable no-undef */
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

export default function Footer ({}: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className=' w-[100%] grid grid-cols-1 divide-y absolute bottom-0'>
      <div className=''>
        <h3>{t('Navigate')}</h3>
      </div>
      <div className=''>
        <p>nav</p>
      </div>
      <div className=''>
        <h3>{t('Contact')}</h3>
      </div>
      <div className=''>
        <div className=''>
          <p>contact@coderlabs.co</p>
          <p>1234567890</p>
          <p>Barranquilla</p>
        </div>
        <div className=''>
          <p>Book a call</p>
        </div>
        <div className=''>
          <p>redes</p>
        </div>
      </div>
    </div>
  )
}
