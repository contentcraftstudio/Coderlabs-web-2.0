import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import i18next from "i18next"

type Props = {}

export default function SwitchButton({}: Props) {
  const { t, i18n } = useTranslation()

  const [isEnglish, setIsEnglish] = useState(true)
  const [color, setColor] = useState("bg-green")
  const [textColor, setTextColor] = useState("after:text-green")

  const handleClick = () => {
    if (isEnglish) {
      i18n.changeLanguage("es")
    } else {
      i18n.changeLanguage("en")
    }
    setIsEnglish(!isEnglish)
    if (color == "bg-green") {
      setColor("bg-orange")
      setTextColor("after:text-orange")
    } else {
      setColor("bg-green")
      setTextColor("after:text-green")
    }
  }

  const translate = isEnglish ? "after:content-['EN']" : "after:content-['ES']"

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div
        onClick={handleClick}
        className={`sm:w-[55px] md:w-[65px] lg:w-[70px] sm:h-[30px] md:h-[36px] lg:h-[40px] ${color} 
        peer-focus:outline-none peer-focus:ring-blue-300 rounded-[80px] peer peer-checked:after:translate-x-full
        peer-checked:after:border-white ${translate} after:absolute sm:after:top-[2.5px]
        md:after:top-[3.5px] lg:after:top-[6px] after:bg-white after:border-grewn 
        after:border after:rounded-[80px] sm:after:text-[11px] md:after:text-[12px] ${textColor} 
        sm:after:h-[25px] md:after:h-[28px] sm:after:w-[25px] md:after:w-[28px] sm:after:p-[4px] md:after:p-[4px] 
        after:transition-all peer-checked:bg-blue-600 sm:after:ml-[2px] md:after:ml-[5px] lg:after:ml-[7px]`}
      />
    </label>
  )
}
