/* eslint-disable react/jsx-no-target-blank */
import Image from "next/image";
import React from "react";
import rocket from "../public/assets/rocket.svg";
import logo from "../public/assets/llavelogo.svg";
import { useTranslation } from "react-i18next";
import IButton from "./form/Button";
import CalendarButton from "./buttons/CalendarButton";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="w-[100%] sm:px-[30px] md:px-[60px] xl:px-[103px] 2xl:px-[60px]">
      <div className="grid sm:grid-cols-1 xl:grid-cols-3">
        <div className="col-span-2 divide-y-2 divide-gray-800 md:max-w-[650px] lg:max-w-[800px] xl:w-[900px]">
          <div>
            <Image
              className="lg:mb-[-72px] md:mb-[-60px]  sm:mb-[-43px] sm:ml-[-10px] xl:w-[19px] sm:h-[40px] md:h-[50px] lg:h-[58px]"
              src={logo}
              alt="coderlabs"
              width={20}
              height={70}
            />
            <h1 className="titlehero font-secondary font-medium sm:text-[32px] md:text-[46px] xl:text-[58px] lg:leading-[90px] sm:ml-[5px] mb-[40px]">
              {t("title_hero")}
            </h1>
          </div>
          <div className="space-y-8 sm:pt-[20px] md:pt-[40px] xl:pt-[60px] mb-[30px] ">
            <p className="font-primary font-normal md:w-[600px] sm:text-[16px] md:text-[20px] sm:leading-[19px] md:leading-[23px]">
              {t("Subtitle_hero")}
            </p>
            <p className="font-primary font-normal sm:w-[290px] md:w-[497px] sm:text-[16px] md:text-[20px] ">
              {t("paragraph_hero")}
            </p>
            <div className="flex">
              <a
                href="https://www.linkedin.com/company/coderlabsco/"
                target="_blank"
              >
                <IButton label={t("Make_it_happen")} variant="contained" />
              </a>
              <div className="mr-[20px]" />
              <CalendarButton />
            </div>
          </div>
        </div>
        <div className="lg:h-[572px] lg:w-[472px]">
          <Image
            alt="rocket"
            src={rocket}
            className="sm:w-[364px] sm:h-[364px] md:w-[572px] md:h-[572px] xl:h-[620px] xl:mt-[-95px]"
          />
        </div>
      </div>
    </div>
  );
}
