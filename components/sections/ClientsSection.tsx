"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide } from 'swiper/react'
import CalendarButton from "../buttons/CalendarButton";

// Importamos los logos de los clientes
import fomo from "../../public/assets/clients/fomo.svg";
import caribe from "../../public/assets/clients/caribe_startup.svg";
import innogrowth from "../../public/assets/clients/innogrowth.svg";
import grupit from "../../public/assets/clients/grupit.svg";
import coaching from "../../public/assets/clients/Coaching_Comercial.svg";
import foodiverso from "../../public/assets/clients/foodiverso-new.png";
import feanware from "../../public/assets/clients/feanware.svg";
import lobby from "../../public/assets/clients/lobby-logo.svg";
import magichack from "../../public/assets/clients/magichack.png";
import vk from "../../public/assets/clients/kindred-banner.png";

export default function ClientsSection() {
  const { t } = useTranslation();

  return (
    <section className="w-[100%] sm:px-[30px] md:px-[60px] lg:px-[103px] 2xl:px-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="font-secondary font-medium sm:text-[34px] md:text-[48px] xl:text-[64px] text-gray-600">
            {t("Clients")} <br className="md:hidden" />
            <span className="text-black">&amp; {t("Allies")}</span>
          </h2>
        </div>
        <div className="mt-4 md:mt-0">
          <CalendarButton />
        </div>
      </div>

      {/* Contenedor principal de logos */}
      <div className="flex flex-col space-y-4 px-4 md:px-12">
        {/* Primera fila de logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-6 items-center justify-items-center">
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={innogrowth}
              alt="Innogrowth"
              width={160}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={fomo}
              alt="FOMO"
              width={90}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={coaching}
              alt="Coaching Comercial"
              width={160}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={caribe}
              alt="Caribe"
              width={100}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={grupit}
              alt="Grupit"
              width={150}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={foodiverso}
              alt="Foodiverso"
              width={100}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
        </div>

        {/* Segunda fila de logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 items-center justify-items-center">
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={feanware}
              alt="Feanware"
              width={250}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={lobby}
              alt="Lobby"
              width={140}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={magichack}
              alt="Magic Hack"
              width={130}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Image
              src={vk}
              alt="VK"
              width={130}
              height={60}
              className="transition-all duration-300 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
