import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import blog from "../public/assets/blog.svg"
import IButton from "./form/Button"
import Link from "next/link"

type Props = {}

export default function Blog({}: Props) {
  const { t } = useTranslation()

  return (
    <div className='sm:columns-1 lg:columns-2 p-[24px] px-[103px] sm:pt-[70px] md:pt-[104px] lg:pt-[167px]'>
      <div className='flex flex-col  items-start xl:min-h-[600px] py-3 sm:pb-[100px]'>
        <h2 className='font-secondary font-medium sm:text-[34px] md:text-[48px] xl:text-[60px] text-white sm:pb-[20px] xl:pb-[40px]'>
          {t("Explore_our_blog")}
        </h2>
        <div className='space-y-4'>
          <div className='sm:mb-[40px] md:mb-[40px] lg:mb-[80px]'>
            <p className='font-normal font-primary sm:text-[16px] lg:text-[20px] text-white'>
              {t("paragraph_our_blog_1")}
            </p>
            <p className='font-normal font-primary sm:text-[16px] lg:text-[20px] text-white'>
              {t("paragraph_our_blog_2")}
            </p>
            <p className='font-normal font-primary sm:text-[16px] lg:text-[20px] text-white'>
              {t("paragraph_our_blog_3")}
            </p>
          </div>
          <Link href='https://medium.com/@coderlabs'>
            <IButton label={t("Visit_us_now")} variant={"outlined"} />
          </Link>
        </div>
      </div>
      <div className='h-max'>
        <Image alt='Blog Coderlabs' src={blog} width={727} height={635} />
      </div>
    </div>
  )
}
