import React from "react"
import { useTranslation } from "react-i18next"
import Form from "./form/Form"
import FormInput from "./form/FormInput"

type Props = {}

export default function GetIn({}: Props) {
  const { t } = useTranslation()
  return (
    <Form
      initialValues={{
        name: "",
        phone: "",
        email: "",
        contacting: "",
        budget: "",
        menssage: "",
      }}
    >
      <div className=' w-full bg-white rounded px-4 py-[20px] sm:space-y-[20px]'>
        <div className='mb-62'>
          <p className='w-225 font-roboto text-4xl font-medium leading-10 text-gray-700'>
            Get In Touch
          </p>
        </div>
        <div className='columns-2'>
          <FormInput label={t("Name")} name='name' type='name' />
          <FormInput label={t("Phone_number")} name='phone' type='phone' />
        </div>
        <div className='columns-2'>
          <FormInput label={t("Email")} name='email' type='email' />
          <FormInput
            label={t("Contacting_us")}
            name='contacting'
            type='contacting'
          />
        </div>
        <FormInput label={t("Defined_budget")} name='budget' type='budget' />
        <FormInput label={t("Your_budget")} name='menssage' type='menssage' />
      </div>
    </Form>
  )
}
