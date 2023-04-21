import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { ErrorMessage } from "formik"
import Form from "./form/Form"
import FormInput from "./form/FormInput"
import FormButton from "./form/FormButton"
import axios from "axios"
import * as Yup from "yup"

type Props = {}

export default function GetIn({}: Props) {
  const { t } = useTranslation()

  const [formularioEnviado, setFormularioEnviado] = useState(false)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(/^[0-9]*$/, "Invalid phone number"),
    email: Yup.string().email("Invalid email address").required("Required"),
    contacting: Yup.string().required("Required"),
    budget: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  })

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
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <div className='w-full bg-white rounded px-[20px] py-[20px] sm:space-y-[20px]'>
            <p className='w-225 font-secondary text-4xl font-[530] leading-10 text-gray-700 mb-[42px]'>
              {t("Get_in_touch")}
            </p>
            <div className='flex gap-[20px] flex-wrap'>
              <div className='lg:w-[48.5%] sm:w-full xl:w-[49.2%]'>
                <FormInput label={t("Name")} name='name' type='name' />
                <ErrorMessage name='name' />
              </div>
              <div className='lg:w-[48.5%] sm:w-full xl:w-[49.2%]'>
                <FormInput label={t("Email")} name='email' type='email' />
                <ErrorMessage name='email' />
              </div>
            </div>
            <div className='flex gap-[20px] flex-wrap'>
              <div className='lg:w-[48.5%] sm:w-full md:w-[48.5%] xl:w-[49.2%]'>
                <FormInput
                  label={t("Phone_number")}
                  name='phone'
                  type='phone'
                />
                <ErrorMessage name='phone' />
              </div>
              <div className='lg:w-[48.5%] sm:w-full md:w-[48.5%] xl:w-[49.2%]'>
                <FormInput
                  label={t("Contacting_us")}
                  name='contacting'
                  type='contacting'
                />
                <ErrorMessage name='contacting' />
              </div>
            </div>
            <FormInput
              label={t("Defined_budget")}
              name='budget'
              type='budget'
            />
            <ErrorMessage name='budget' />
            <FormInput
              label={t("Your_budget")}
              name='menssage'
              type='menssage'
            />
            <ErrorMessage name='message' />
            <div className='pt-[42px] flex justify-end pb-[10px]'>
              <FormButton />
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}
