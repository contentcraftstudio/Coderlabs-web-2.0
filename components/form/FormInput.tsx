import React from 'react'
import { useFormikContext, getIn } from 'formik'

type Props = {
  name: string
  label: string
  type: string
}

export default function FormInput ({ name, label, type }: Props) {
  const { setFieldTouched, setFieldValue, values } = useFormikContext()

  return (
    <div className='w-full flex sm:h-[50px] md:h-[63px]'>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        value={getIn(values, name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className='px-[12px] w-full h-full bg-gray-input rounded-[8px] py-23 border border-gray-border'
      />
    </div>
  )
}
