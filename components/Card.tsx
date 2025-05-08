import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type Props = {
  color: string;
  img: any;
  title: string;
  paragraph: string;
};

export default function Card({ color, img, title, paragraph }: Props) {
  const { t } = useTranslation();
  return (
    <div
      className={`sm:w-[300px] md:w-[310px] xl:w-[375px] justify-center flex flex-col gap-[10px] shadow-[0px_0px_40px_rgba(0,0,0,0.06)] py-[20px] rounded xl:border-b-[22px] sm:border-b-[16px] px-[20px] ${color}`}
    >
      <div className="flex justify-center">
        <Image
          src={img}
          alt="UI/UX Design"
          className="sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px]"
        />
      </div>
      <div className="w-100% text-center">
        <h3 className="sm:text-[16px] md:text-[18px] xl:text-[20px] font-secondary font-medium">
          {t(title)}
        </h3>
        <p className="sm:text-[16px] sm:leading-[19px] md:leading-[19px] xl:leading-[23px] md:text-[16px] xl:text-[20px] font-primary font-normal pt-[10px] mb-[21px]">
          {t(paragraph)}
        </p>
      </div>
    </div>
  );
}
