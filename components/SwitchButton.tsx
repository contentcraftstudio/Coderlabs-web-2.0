import React from 'react'

type Props = {}

export default function SwitchButton ({}: Props) {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div className="w-14 h-7 bg-green peer-focus:outline-none  peer-focus:ring-blue-300  rounded-[80px] peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['EN'] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-grewn after:border after:rounded after:text-[12px] after:text-green after:h-6 after:w-6 after:transition-all  peer-checked:bg-blue-600 after:p-[2px]" />
    </label>
  )
}
