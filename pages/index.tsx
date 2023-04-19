/* eslint-disable @next/next/no-page-custom-font */
import "../settings/i18"
import Head from "next/head"
import ToolsSec from "@/components/ToolsSec"
import Footer from "@/components/Footer"
import Blog from "@/components/Blog"
import CardsTestominial from "@/components/CardsTestominial"
import Cards from "@/components/Cards"
import BestSec from "@/components/BestSec"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import ProfileEdit from "@/components/SwiperTeam"
import Team from "@/components/Team"
import GetIn from "@/components/GetIn"
// import { useTranslation } from 'react-i18next'

export default function Home() {
  // const { t } = useTranslation()

  return (
    <>
      <Head>
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
        <section className='container mx-auto xl:space-y-[140px] sm:space-y-[80px]'>
          <section className=' sm:space-y-[200px] md:space-y-[150px]'>
            <Navbar />
            <Hero />
          </section>
          <Cards />
          <ToolsSec />
          <BestSec />
        </section>
        <footer className='bg-background-dark xl:mt-[200px] sm:mt-[80px] pt-8'>
          <section className='container mx-auto xl:space-y-[140px] sm:space-y-[40px]'>
            <Team />
            <CardsTestominial />
            <Blog />
            <GetIn />
            <Footer />
          </section>
        </footer>
      </main>
    </>
  )
}
