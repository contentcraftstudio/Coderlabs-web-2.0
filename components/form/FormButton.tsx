import React from "react"
import { useFormikContext } from "formik"

type Props = {}

export default function FormButton({}: Props) {
  const { submitForm } = useFormikContext()
  return (
    <button
      className='w-[133px] h-[44px] rounded-[8px] bg-background-dark text-white text-[14px] font-primary font-medium text-center'
      type='submit'
      onClick={() => submitForm()}
    >
      Submit
    </button>
  )
}
