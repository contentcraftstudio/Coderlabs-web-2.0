"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import ai from "@/public/assets/services/ai-integrations.png";
import mobile from "@/public/assets/services/mobile-apps.png";
import startup from "@/public/assets/services/startup-services.png";
import web from "@/public/assets/services/web-platforms.png";

export default function ServiceSection() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hasStarted && count < 80) {
      interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + 1;
          return next > 80 ? 80 : next;
        });
      }, 20);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hasStarted, count]);

  return (
    <section className="bg-white" id="our-services">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onViewportEnter={() => setHasStarted(true)}
            style={{ willChange: "transform, opacity" }}
            className="font-secondary font-medium text-center sm:text-[34px] md:text-[48px] xl:text-[64px] sm:mb-[40px] md:mb-[60px] lg:mb-[115px]"
          >
            {t("Software_title")} <br className="md:hidden" />
            {t("Software_subtitle")}{" "}
            <span className="text-gray-400">{count}%</span>
            <br />
            <span className="text-gray-400">{t("Software_speed")}</span>
          </motion.h2>
        </div>

        {/* Contenedor Bento */}
        <div className="max-w-6xl mx-auto bg-white rounded-[12px] shadow-lg p-8 border border-gray-100">
          {/* Encabezado de la sección */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-secondary font-medium">
              {t("Our_services")}
            </h3>
            <div className="bg-orange text-white px-6 py-2 rounded-[20px] text-sm font-medium hidden md:block">
              {t("Services_count")}
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
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t("Web_platforms_title")}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t("Web_platforms_desc")}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t("Request_quote")} <ArrowRight className="ml-2 h-4 w-4" />
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
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t("Mobile_apps_title")}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t("Mobile_apps_desc")}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t("Request_quote")} <ArrowRight className="ml-2 h-4 w-4" />
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
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t("AI_integrations_title")}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t("AI_integrations_desc")}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t("Request_quote")} <ArrowRight className="ml-2 h-4 w-4" />
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
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t("Startup_services_title")}
                  </h3>
                  <p className="text-white mb-6 max-w-md">
                    {t("Startup_services_desc")}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
                  >
                    {t("Request_quote")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
