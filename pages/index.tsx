/* eslint-disable @next/next/no-page-custom-font */
import '../settings/i18'
import Head from 'next/head'
import ToolsSec from '@/components/ToolsSec'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import CardsTestominial from '@/components/CardsTestominial'
import Cards from '@/components/Cards'
import BestSec from '@/components/BestSec'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import GetIn from '@/components/GetIn'
// import { useTranslation } from 'react-i18next'

export default function Home () {
  // const { t } = useTranslation()

  return (
    <>
      <Head>
        {/* Meta Data */}
        <title>Making your business solutions come true | CoderLabs</title>
        <link rel='canonical' href='https://www.coderlabs.co/' />
        <meta name='robots' content='max-snippet:-1,max-image-preview:standard,max-video-preview:-1' />
        <meta name='description' content='CoderLabs Realizing your business needs with team-led custom software development.' />
        {/* OpenGraph */}
        <meta property='og:image' content='https://coderlabs.co/social-image-seo.jpeg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Mobile and Web Development Partner' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Making your business solutions come true | CoderLabs' />
        <meta
          property='og:description'
          content='CoderLabs Realizing your business needs with team-led custom software development.'
        />
        <meta property='og:url' content='https://coderlabs.co/' />
        <meta property='og:site_name' content='CoderLabs' />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@coderlabs_' />
        <meta name='twitter:creator' content='@coderlabs_' />
        <meta name='twitter:title' content='Making your business solutions come true | CoderLabs' />
        <meta
          name='twitter:description'
          content='CoderLabs Realizing your business needs with team-led custom software development.'
        />
        <meta name='twitter:image' content='https://coderlabs.co/social-image-seo.jpeg' />
        <meta name='twitter:image:width' content='1200' />
        <meta name='twitter:image:height' content='630' />
        <meta name='twitter:image:alt' content='Mobile and Web Development Partner' />
        <meta name='theme-color' content='#00002E' />
        <title>Coderlabs</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        {/* Roboto Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
        />
      </Head>
      <main>
        <section className='container mx-auto sm:space-y-[80px] md:space-y-[100px] lg:space-y-[140px]'>
          <section className='sm:space-y-[200px] md:space-y-[514px] lg:space-y-[150px]'>
            <Navbar />
            <Hero />
          </section>
          <Cards />
          <ToolsSec />
          <BestSec />
        </section>
        <footer className='bg-background-dark sm:mt-[80px] md:mt-[100px] lg:mt-[200px] sm:pt-[39px] md:pt-[53px] lg:pt-[97px]]'>
          <section className='container mx-auto sm:space-y-[40px] md:space-y-[100px] lg:space-y-[140px]'>
            <Team />
            <CardsTestominial />
            <Blog />
            <GetIn />
            <div className='md:pt-[125px]'>
              <Footer />
            </div>
          </section>
        </footer>
      </main>
    </>
  )
}
