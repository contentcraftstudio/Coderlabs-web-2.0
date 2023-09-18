import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import IButton from './form/Button'
import logo from '../public/assets/llavelogo.svg'
import assistant from '../public/assets/logoAssist.png'

import AI from '../public/assets/AI.svg'
import { motion } from 'framer-motion'
import ChatAssistant from './ChatAssistant'

export default function TheAssistant () {
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
      <div className=''>
        <div className='grid sm:grid-cols-1 xl:grid-cols-2 bg-[#232323] h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen mx-auto'>
          <div className='col-span-1 lg:max-w-[720px] xl:max-w-[900px] md:max-w-[650px] lg:p-[70px] md:p-[30px] sm:p-[30px] lg:mt-[320px] md:mt-[210px] sm:mt-[90px] lg:ml-[100px] md:ml-[75px]'>
            <Image
              src={assistant}
              alt='coderlabs logo'
              className='sm:w-[135px] sm:h-[32px] md:w-[145px] md:h-[40px] xl:w-[52px] xl:h-[48px] mb-7 absolute top-4'
            />
            <div className='divide-y-2 divide-white'>
              <div>
                <Image
                  className='llave lg:mb-[-72px] md:mb-[-60px] sm:mb-[-43px] sm:ml-[-10px] xl:w-[19px] sm:h-[40px] md:h-[50px] lg:h-[58px]'
                  src={logo}
                  alt='coderlabs'
                  width={20}
                  height={70}
                />
                <h1 className='titlehero font-secondary text-white font-normal sm:text-[32px] md:text-[46px] xl:text-[58px] lg:text-[58px] lg:leading-[90px] sm:ml-[5px] mb-[40px] lg:mb-[-10px] lg:mt-[-140px]'>
                  Descubre el Universo de Coderlabs con nuestro chat AI
                </h1>
              </div>
              <div className='space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px]'>
                <p className='font-primary font-light text-white sm:text-[16px] md:w-[600px] md:text-[20px] sm:leading-[19px] md:leading-[23px] lg:mb-[-20px] lg:mt-[0px]'>
                  Emprendiendo un viaje épico hacia la innovación en diseño y desarrollo.
                </p>
                <div className='flex'>
                  <a target='_blank' onClick={showChat} rel='noreferrer' className='lg:mt-[10px]'>
                    <IButton label='Start Chat' variant='outlined' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {screenSize.width <= 1450
        ? (
          <div>
            {!chat
              ? (
                  infoChat()
                )
              : (
                <ChatAssistant />
                )}
          </div>
          )
        : (
          <div>
            <div className='grid sm:grid-cols-1 xl:grid-cols-2 bg-[#232323] h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen mx-auto'>
              <div className='col-span-1  md:max-w-[650px] mx-auto my-auto p-[20px]'>
                <Image
                  src={assistant}
                  alt='coderlabs logo'
                  className='sm:w-[45px] sm:h-[32px] md:w-[45px] md:h-[40px] xl:w-[182px] xl:h-[48px] mb-10 absolute top-4'
                />
                <div className='divide-y-2 divide-white'>
                  <div>
                    <Image
                      className='lg:mb-[-72px] md:mb-[-60px] sm:mb-[-43px] sm:ml-[-10px] xl:w-[19px] sm:h-[40px] md:h-[50px] lg:h-[58px]'
                      src={logo}
                      alt='coderlabs'
                      width={20}
                      height={70}
                    />
                    <h1 className='titlehero font-secondary text-white font-normal sm:text-[32px] md:text-[46px] xl:text-[58px] lg:text-[58px] lg:leading-[90px] sm:ml-[5px] mb-[40px]'>
                      Descubre el Universo de Coderlabs con nuestro chat AI
                    </h1>
                  </div>
                  <div className='space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px]'>
                    <p className='font-primary font-light text-white sm:text-[16px] md:w-[600px] md:text-[20px] sm:leading-[19px] md:leading-[23px]'>
                      Emprendiendo un viaje épico hacia la innovación en diseño y desarrollo.
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
              {!chat && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                  className='flex justify-center items-center chat col-span-1 md:max-w-[650px] lg:max-w-[1400px] xl:max-w-[1400px] bg-white p-2'
                >
                  <Image
                    alt='Blog Coderlabs'
                    src={AI}
                    className='sm:w-[364px] sm:h-[364px] md:w-[572px] md:h-[572px] xl:h-[550px]'
                  />
                </motion.div>
              )}
              {chat && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: 'easeOut', duration: 1 }}
                  className='chat col-span-1 md:max-w-[650px] lg:max-w-[1400px] xl:max-w-[1400px] bg-white p-2'
                >
                  <ChatAssistant />
                </motion.div>
              )}
            </div>
          </div>
          )}
    </>
  )
}
