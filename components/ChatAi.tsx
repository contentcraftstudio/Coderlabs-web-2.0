import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import IButton from './form/Button'
import logo from '../public/assets/llavelogo.svg'
import coderlabsLogo from '../public/assets/coderlabs_logo.svg'
import Chat from './Chat'

export default function ChatAi () {
  const [chat, setChat] = React.useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  const showChat = () => {
    setChat(true)
  }

  useEffect(() => {
    function handleResize () {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const infoChat = () => {
    return (
      <div className='infochat'>
        <div className='grid sm:grid-cols-1 xl:grid-cols-2 bg-[#232323] h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen mx-auto'>
          <div className='col-span-1 divide-y-2 divide-white lg:max-w-[720px] xl:max-w-[900px] md:max-w-[650px] lg:p-[70px] md:p-[30px] sm:p-[30px] lg:mt-[320px] md:mt-[210px] sm:mt-[90px] lg:ml-[100px] md:ml-[75px]'>
            <div>
              <Image
                src={coderlabsLogo}
                alt='coderlabs logo'
                className='sm:w-[35px] sm:h-[32px] md:w-[45px] md:h-[40px] xl:w-[52px] xl:h-[48px] xl:mt-[-385px] xl:mb-[345px] sm:mt-[-115px] sm:mb-[145px] md:mt-[-235px] md:mb-[185px] lg:mt-[-385px]'
              />
              <Image
                className='lg:mb-[-72px] md:mb-[-60px] sm:mb-[-43px] sm:ml-[-10px] xl:w-[19px] sm:h-[40px] md:h-[50px] lg:h-[58px]'
                src={logo}
                alt='coderlabs'
                width={20}
                height={70}
              />
              <h1 className='titlehero font-secondary text-white font-normal sm:text-[32px] md:text-[46px] xl:text-[58px] lg:text-[58px] lg:leading-[90px] sm:ml-[5px] mb-[40px]'>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              </h1>
            </div>
            <div className='space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px]'>
              <p className='font-primary font-light text-white sm:text-[16px] md:w-[600px] md:text-[20px] sm:leading-[19px] md:leading-[23px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit molestiae harum, perspiciatis
              </p>
              <div className='flex'>
                <div />
                <a target='_blank' onClick={showChat} rel='noreferrer'>
                  <IButton label='Start Chat' variant='outlined' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {screenSize.width <= 1000
        ? (
          <div>
            {!chat
              ? (
                  infoChat()
                )
              : (
                <Chat />
                )}
          </div>
          )
        : (
          <div className='infochat'>
            <div className='grid sm:grid-cols-1 xl:grid-cols-2 bg-[#232323] h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen mx-auto'>
              <div className='col-span-1 divide-y-2 divide-white lg:max-w-[720px] xl:max-w-[900px] md:max-w-[650px] lg:p-[70px] md:p-[30px] sm:p-[30px] lg:mt-[320px] md:mt-[210px] sm:mt-[90px] lg:ml-[100px] md:ml-[75px]'>
                <div>
                  <Image
                    src={coderlabsLogo}
                    alt='coderlabs logo'
                    className='sm:w-[35px] sm:h-[32px] md:w-[45px] md:h-[40px] xl:w-[52px] xl:h-[48px] xl:mt-[-385px] xl:mb-[345px] sm:mt-[-115px] sm:mb-[145px] md:mt-[-235px] md:mb-[185px] lg:mt-[-385px]'
                  />
                  <Image
                    className='lg:mb-[-72px] md:mb-[-60px] sm:mb-[-43px] sm:ml-[-10px] xl:w-[19px] sm:h-[40px] md:h-[50px] lg:h-[58px]'
                    src={logo}
                    alt='coderlabs'
                    width={20}
                    height={70}
                  />
                  <h1 className='titlehero font-secondary text-white font-normal sm:text-[32px] md:text-[46px] xl:text-[58px] lg:text-[58px] lg:leading-[90px] sm:ml-[5px] mb-[40px]'>
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </h1>
                </div>
                <div className='space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px]'>
                  <p className='font-primary font-light text-white sm:text-[16px] md:w-[600px] md:text-[20px] sm:leading-[19px] md:leading-[23px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit molestiae harum, perspiciatis
                  </p>
                  <div className='flex'>
                    <div />
                    <a target='_blank' onClick={showChat} rel='noreferrer'>
                      <IButton label='Start Chat' variant='outlined' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='chat col-span-1 md:max-w-[650px] lg:max-w-[1400px] xl:max-w-[1400px] bg-white p-2'>
                {chat && (
                  <Chat />
                )}
              </div>
            </div>
          </div>
          )}
    </>
  )
}
