import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Form from "./form/Form"
import FormInput from "./form/FormInput"
import FormButton from "./form/FormButton"
import axios from "axios"

type Props = {}

export default function GetIn({}: Props) {
  const { t } = useTranslation()

  const [formularioEnviado, setFormularioEnviado] = useState(false)

  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = "Required"
    }
    if (!values.phone) {
      errors.phone = "Required"
    } else if (!/^[0-9]*$/.test(values.phone)) {
      errors.phone = "Invalid phone number"
    }
    if (!values.email) {
      errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address"
    }
    if (!values.contacting) {
      errors.contacting = "Required"
    }
    if (!values.budget) {
      errors.budget = "Required"
    }
    if (!values.message) {
      errors.message = "Required"
    }
    return errors
  }

  const handleValue = async (values, action) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://sheet.best/api/sheets/d7b94f3f-7644-43e3-a223-038b9d06d2da",
        data: {
          ...values,
        },
      })
      console.log(response.status)
      if (response.status === 200) {
        setFormularioEnviado(true)
        action.resetForm()
        setTimeout(() => setFormularioEnviado(false), 4000)
      }
    } catch (error) {
      console.log("err", error)
    }
  }

  return (
    <div className='w-[100%] px-6 container'>
      <Form
        initialValues={{
          name: "",
          phone: "",
          email: "",
          contacting: "",
          budget: "",
          menssage: "",
        }}
        onSubmit={handleValue}
      >
        <div className='w-full bg-white rounded px-[20px] py-[20px] sm:space-y-[20px]'>
          <p className='w-225 font-roboto text-4xl font-medium leading-10 text-gray-700 mb-[42px]'>
            Get In Touch
          </p>
          <div className='flex gap-[20px] flex-wrap'>
            <div className='lg:w-[49.2%] sm:w-full'>
              <FormInput label={t("Name")} name='name' type='name' />
            </div>
            <div className='lg:w-[49.2%] sm:w-full'>
              <FormInput label={t("Email")} name='email' type='email' />
            </div>
          </div>
          <div className='flex gap-[20px] flex-wrap'>
            <div className='lg:w-[49.2%] sm:w-full md:w-[49.2%]'>
              <FormInput label={t("Phone_number")} name='phone' type='phone' />
            </div>
            <div className='lg:w-[49.2%] sm:w-full md:w-[49.2%]'>
              <FormInput
                label={t("Contacting_us")}
                name='contacting'
                type='contacting'
              />
            </div>
          </div>
          <FormInput label={t("Defined_budget")} name='budget' type='budget' />
          <FormInput label={t("Your_budget")} name='menssage' type='menssage' />
          <div className='pt-[42px] flex justify-end pb-[10px]'>
            <FormButton />
          </div>
        </div>
      </Form>
    </div>
  )
}
