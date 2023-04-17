import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import i18next from "i18next"

type Props = {}

export default function SwitchButton({}: Props) {
  const { t, i18n } = useTranslation()

  const [isEnglish, setIsEnglish] = useState(true)
  const [color, setColor] = useState("bg-green")
  const [textColor, setTextColor] = useState("text-green")

  const handleClick = () => {
    if (isEnglish) {
      i18n.changeLanguage("es")
    } else {
      i18n.changeLanguage("en")
    }
    setIsEnglish(!isEnglish)
    if (color == "bg-green") {
      setColor("bg-orange")
      setTextColor("text-orange")
    } else {
      setColor("bg-green")
      setTextColor("text-green")
    }
  }

  const translate = isEnglish ? "after:content-['EN']" : "after:content-['ES']"

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div
        onClick={handleClick}
        className={`w-14 h-7 ${color} peer-focus:outline-none  peer-focus:ring-blue-300  rounded-[80px] peer  peer-checked:after:translate-x-full peer-checked:after:border-white ${translate} after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-grewn after:border after:rounded after:text-[12px] after:${textColor} after:h-6 after:w-6 after:transition-all  peer-checked:bg-blue-600 after:p-[2px]`}
      />
    </label>
  )
}
