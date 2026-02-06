import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Search, Flame, Microscope, TrendingUp } from "lucide-react";

export default function TheLabSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Microscope className="w-8 h-8 text-orange" />,
      title: t("The_Lab_mission"),
    },
    {
      icon: <Search className="w-8 h-8 text-orange" />,
      title: t("The_Lab_vision"),
    },
  ];

  return (
    <section id="the-lab" className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-orange font-bold tracking-widest uppercase text-sm">
                RESEARCH & DEVELOPMENT
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-secondary font-bold text-black mt-2 leading-tight">
                {t("The_Lab_title")}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 font-primary leading-relaxed"
            >
              {t("The_Lab_subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 font-primary"
            >
              {t("The_Lab_desc")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4"
                >
                  <div className="p-3 bg-orange/10 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <h4 className="font-secondary font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Element / Illustration Placeholder */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              <div className="absolute inset-0 bg-orange/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-3xl shadow-2xl border border-white p-8 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-3 gap-4 w-full h-full opacity-30">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="bg-gray-400/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
                <div className="absolute flex flex-col items-center justify-center z-20">
                    <TrendingUp className="w-24 h-24 text-orange mb-4" />
                    <span className="text-xl font-bold text-gray-400">EVOLVING DATA</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
