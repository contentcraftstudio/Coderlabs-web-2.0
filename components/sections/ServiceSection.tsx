"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

import ai from '@/public/assets/services/ai-integrations.png'
import mobile from '@/public/assets/services/mobile-apps.png'
import startup from '@/public/assets/services/startup-services.png'
import web from '@/public/assets/services/web-platforms.png'

export default function ServiceSection() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('software-title')
      const navbar = document.getElementById('nav') // Cambiamos el selector para que coincida con el ID del navbar 
      
      if (element && navbar) {
        const rect = element.getBoundingClientRect()
        const navbarRect = navbar.getBoundingClientRect()
        
        // El título será visible cuando: 
        // 1. El navbar no esté visible (está fuera de la vista) 
        // 2. La sección del título esté en el viewport 
        const isNavbarVisible = navbarRect.bottom > 0
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0
        
        setIsVisible(!isNavbarVisible && isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verificar visibilidad inicial 

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isVisible && count < 80) {
      interval = setInterval(() => {
        setCount(prev => {
          const next = prev + 1
          return next > 80 ? 80 : next
        })
      }, 20) // Ajusta este valor para controlar la velocidad de la animación 
    } else if (!isVisible) {
      setCount(0)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isVisible, count])

  return (
    <section className="bg-white" id="our-services">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <div className="max-w-4xl mx-auto">
          <h2
            id="software-title"
            className={`font-secondary font-medium text-center sm:text-[34px] md:text-[48px] xl:text-[64px] sm:mb-[40px] md:mb-[60px] lg:mb-[115px] transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('Software_title')} <br className="md:hidden" />
            {t('Software_subtitle')} <span className="text-gray-400">{count}%</span>
            <br />
            <span className="text-gray-400">{t('Software_speed')}</span>
          </h2>
        </div>

        {/* Contenedor Bento */}
        <div className="max-w-6xl mx-auto bg-white rounded-[12px] shadow-lg p-8 border border-gray-100">
          {/* Encabezado de la sección */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-secondary font-medium">{t('Our_services')}</h3>
            <div className="bg-orange text-white px-6 py-2 rounded-[20px] text-sm font-medium hidden md:block">
              {t('Services_count')}
            </div>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Desarrollo de Plataformas Web */}
            <div className="group relative overflow-hidden rounded-[12px]">
              <div className="relative h-[400px] w-full">
                <Image
                  src={web}
                  alt="Desarrollo de Plataformas Web"
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('Web_platforms_title')}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t('Web_platforms_desc')}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t('Request_quote')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Desarrollo de Apps móviles */}
            <div className="group relative overflow-hidden rounded-[12px]">
              <div className="relative h-[400px] w-full">
                <Image
                  src={mobile}
                  alt="Desarrollo de Apps móviles"
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('Mobile_apps_title')}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t('Mobile_apps_desc')}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t('Request_quote')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Integraciones con IA */}
            <div className="group relative overflow-hidden rounded-[12px]">
              <div className="relative h-[400px] w-full">
                <Image
                  src={ai}
                  alt="Integraciones con IA"
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('AI_integrations_title')}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t('AI_integrations_desc')}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t('Request_quote')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Servicios para Startups */}
            <div className="group relative overflow-hidden rounded-[12px]">
              <div className="relative h-[400px] w-full">
                <Image
                  src={startup}
                  alt="Servicios para Startups"
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('Startup_services_title')}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t('Startup_services_desc')}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t('Request_quote')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}