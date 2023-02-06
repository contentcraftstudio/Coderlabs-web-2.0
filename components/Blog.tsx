import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import blog from '../public/assets/blog.svg'
type Props = {}

export default function Blog({}: Props) {
  const { t } = useTranslation()

  return (
    <div className='sm:columns-1 lg:columns-2 p-[24px] '>
      <div className="flex flex-col  items-start min-h-[600px] py-3">
        <h2 className='font-secondary font-medium text-[60px] text-white'>{t('Explore_our_blog')}</h2>
        <div className=" space-y-4">
          <p className='font-normal font-primary text-[20px] text-white'>{t('paragraph_our_blog_1')}</p>
          <p className='font-normal font-primary text-[20px] text-white'>{t('paragraph_our_blog_2')}</p>
          <p className='font-normal font-primary text-[20px] text-white'>{t('paragraph_our_blog_3')}</p>
        </div>
        
      </div>
      <div className="h-max">
        <Image
          alt='Blog Coderlabs'
          src={blog}
          width={727}
          height={635}
          />
      </div>
    </div>
  )
}