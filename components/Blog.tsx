import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import blog from "../public/assets/blog.svg"
import IButton from "./form/Button"
import Link from "next/link"

type Props = {}

export default function Blog({ }: Props) {
  const { t } = useTranslation()

  return (
    <div className='sm:columns-1 lg:columns-2 p-[24px] lg:px-[110px] sm:pt-[70px] md:pt-[104px] lg:pt-[167px]'>
      <div className='flex flex-col  items-start xl:min-h-[600px] py-3 sm:pb-[100px]'>
        <h2 className='font-secondary font-medium sm:text-[34px] md:text-[48px] xl:text-[60px] text-white sm:pb-[20px] xl:pb-[40px]'>{t('Explore_our_blog')}</h2>
        <div className=' space-y-4'>
          <p className='font-normal font-primary sm:text-[16px] sm:w-[330px] xl:w-[497px] lg:text-[20px] text-white sm:leading-[19px] lg:leading-[23px]'>{t('paragraph_our_blog_1')}</p>
          <p className='font-normal font-primary sm:text-[16px] sm:w-[330px] xl:w-[497px] lg:text-[20px] text-white sm:leading-[19px] lg:leading-[23px]'>{t('paragraph_our_blog_2')}</p>
          <p className='font-normal font-primary sm:text-[16px] sm:w-[330px] xl:w-[497px] lg:text-[20px] text-white sm:leading-[19px] lg:leading-[23px]'>{t('paragraph_our_blog_3')}</p>
        </div>
        <div className='sm:mb-[-20px] md:mb-[40px] lg:mb-[80px] sm:mt-[60px] lg:mt-[80px]'>
            <Link href='https://medium.com/@coderlabs'>
              <IButton label={t("Visit_us_now")} variant={"outlined"} />
            </Link>
        </div>
      </div>
      <div className='h-max'>
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
