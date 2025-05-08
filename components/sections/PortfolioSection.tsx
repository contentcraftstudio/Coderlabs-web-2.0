'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import CalendarButton from '../buttons/CalendarButton'

// Importamos las imágenes de los banners
import portfolioBanner from '../../public/assets/portfolio-banner.png'
import holaFomoBanner from '../../public/assets/holafomo-banner.png'

export default function PortfolioSection() {
  const { t } = useTranslation()
  
  return (
    <section id="portfolio" className="w-[100%] sm:px-[30px] md:px-[60px] lg:px-[103px] 2xl:px-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div className="max-w-2xl">
          <h2 className="font-secondary font-medium sm:text-[34px] md:text-[48px] xl:text-[64px] text-gray-600">
            Nuestro <br className="md:hidden" />
            <span className="text-black">Portafolio</span>
          </h2>
          <p className="mt-4 text-gray-600 sm:text-[16px] md:text-[18px] font-primary max-w-xl">
            Explore nuestro portafolio de soluciones digitales innovadoras, 
            que muestran nuestra creatividad y experiencia en la entrega de 
            resultados en tiempo récord.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <CalendarButton />
        </div>
      </div>
      
      {/* Contenedor de banners */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Banner principal */}
        <Link href="/portfolio" className="lg:w-2/3">
          <div className="w-full overflow-hidden rounded-[12px] shadow-lg relative transition-all duration-300 hover:shadow-xl hover:scale-[1.01] transform h-[300px]">
            {/* Sombreado interno con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
            
            <div className="absolute bottom-0 left-0 z-20 p-8">
              <h3 className="font-secondary font-medium text-[32px] text-white drop-shadow-lg">
                Nuestras soluciones
              </h3>
              <div className="flex items-center group">
                <p className="text-white font-primary text-[20px] drop-shadow-lg group-hover:underline">
                  Obtenga nuestro portafolio aquí
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 text-white drop-shadow-lg transition-transform group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
            <Image 
              src={portfolioBanner} 
              alt="Portafolio de proyectos de CoderLabs" 
              width={1200} 
              height={400} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </Link>
        
        {/* Banner secundario - HolaFOMO */}
        <Link href="https://holafomo.com/es" target="_blank" rel="noopener noreferrer" className="lg:w-1/3">
          <div className="w-full overflow-hidden rounded-[12px] shadow-lg relative transition-all duration-300 hover:shadow-xl hover:scale-[1.01] transform h-[300px]">
            {/* Sombreado interno con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
            
            <div className="absolute bottom-0 left-0 z-20 p-6">
              <h3 className="font-secondary font-medium text-[24px] text-white drop-shadow-lg">
                HolaFOMO
              </h3>
              <div className="flex items-center group">
                <p className="text-white font-primary text-[16px] drop-shadow-lg group-hover:underline">
                  Ver proyecto
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 text-white drop-shadow-lg transition-transform group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
            <Image 
              src={holaFomoBanner} 
              alt="Proyecto HolaFOMO" 
              width={600} 
              height={400} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </Link>
      </div>
    </section>
  )
}