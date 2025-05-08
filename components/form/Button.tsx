import React from "react";

type Props = {
  label: string;
  variant: string;
};

export default function IButton({ label, variant }: Props) {
  return variant === "contained" ? (
    <button className="px-[20px] h-[36px] bg-orange rounded-[4px] text-white text-[14px] font-primary text-center">
      {label}
    </button>
  ) : variant === "outlined" ? (
    <button className="px-[20px] h-[37px] outline outline-1 outline-orange rounded-[4px] text-orange text-[14px] font-primary text-center flex items-center px-4 py-2 gap-1 ">
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="17"
        height="20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </button>
  ) : variant === "text" ? (
    <button className="h-full outline-1 text-orange text-[14px] font-primary text-center flex items-center gap-1 sm:mr-[20px] md:mr-[32px]">
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="17"
        height="20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </button>
  ) : null;
}
