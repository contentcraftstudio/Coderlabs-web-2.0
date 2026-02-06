import React from "react";
import Image from "next/image";
import Link from "next/link";

const clients = [
  { name: "InnoGrowth", logo: "/assets/clients/innogrowth.svg", width: 140, url: "https://innogrowth.co" },
  { name: "HolaFOMO", logo: "/assets/clients/fomo.svg", width: 80, url: "https://holafomo.com" },
  { name: "Coaching Comercial", logo: "/assets/clients/Coaching_Comercial.svg", width: 140, url: "https://coachingcomercial.co" },
  { name: "Caribe Exponencial", logo: "/assets/clients/caribe_startup.svg", width: 90, url: "#" },
  { name: "Grupit", logo: "/assets/clients/grupit.svg", width: 130, url: "https://grupit.co" },
  { name: "Foodiverso", logo: "/assets/clients/foodiverso-new.png", width: 90, url: "#" },
  { name: "Feanware", logo: "/assets/clients/feanware.svg", width: 200, url: "https://feanware.com" },
  { name: "The Lobby", logo: "/assets/clients/lobby-logo.svg", width: 120, url: "#" },
  { name: "MagicHack", logo: "/assets/clients/magichack.png", width: 110, url: "https://magichack.co" },
  { name: "Kindred", logo: "/assets/clients/kindred-banner.png", width: 110, url: "#" },
];

export default function ClientsCarousel() {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="relative w-full max-w-[1920px] mx-auto">
        <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-white to-transparent pointer-events-none" />
        
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={`${client.name}-${index}`} className="mx-8 lg:mx-12 shrink-0">
              <Link
                href={client.url}
                target={client.url === "#" ? "_self" : "_blank"}
                className="block relative group transition-all duration-300"
              >
                <div className="relative grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 transform group-hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={60}
                    className="object-contain h-[40px] md:h-[50px] w-auto"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
