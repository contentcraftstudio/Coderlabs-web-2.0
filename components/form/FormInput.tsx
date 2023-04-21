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
    <div className='w-full rounded-[8px] flex h-[63px]'>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        value={getIn(values, name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className='px-[12px] w-full rounded-[8px] bg-gray-50 py-23 border border-gray-200/50'
      />
    </div>
  )
}
