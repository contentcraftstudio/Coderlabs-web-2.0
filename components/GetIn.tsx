/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'formik'
import Form from './form/Form'
import FormInput from './form/FormInput'
import FormButton from './form/FormButton'
import axios from 'axios'
import * as Yup from 'yup'

export default function GetIn () {
  const { t } = useTranslation()

  const [formularioEnviado, setFormularioEnviado] = useState(false)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    phone: Yup.string()
      .required('Required')
      .matches(/^[0-9]*$/, 'Invalid phone number'),
    email: Yup.string().email('Invalid email address').required('Required'),
    contacting: Yup.string().required('Required'),
    budget: Yup.string().required('Required'),
    message: Yup.string().required('Required')
  })

  async function handleValue (values: any, action: { resetForm: () => void }): Promise<void> {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://sheet.best/api/sheets/d7b94f3f-7644-43e3-a223-038b9d06d2da',
        data: {
          ...values
        }
      })
      console.log(response.status)
      if (response.status === 200) {
        setFormularioEnviado(true)
        action.resetForm()
        setTimeout(() => setFormularioEnviado(false), 4000)
      }
    } catch (error) {
      console.log('err', error)
    }
  }

  return (
    <div className='w-[100%] sm:px-[30px] md:px-[60px] xl:px-[103px] 2xl:px-[60px]'>
      <Form
        initialValues={{
          name: '',
          phone: '',
          email: '',
          contacting: '',
          budget: '',
          menssage: ''
        }}
        onSubmit={handleValue}
        validationSchema={validationSchema}
      >
        <>
          <div id='form__coderlabs' lassName='w-full bg-white rounded sm:px-[15px] md:px-[40px] py-[20px] sm:py-[20px] sm:space-y-[20px] md:space-y-[40px] text-sm'>
            <p className='font-primary sm:font-semibold md:font-medium sm:text-[20px] md:text-[40px] text-gray-700 sm:mb-[20px] md:mb-[62px] sm:mt-[20px] md:mt-[40px] lg:mt-[40px]'>
              {t('Get_in_touch')}
            </p>
            <div className='flex sm:gap-[20px] md:gap-[40px] flex-wrap'>
              <div className='lg:w-[47%] xl:w-[48.2%] sm:w-full'>
                <FormInput label={`${t('Name')} *`} name='name' type='name' />
                <ErrorMessage name='name' />
              </div>
              <div className='lg:w-[47%] xl:w-[48.2%] sm:w-full'>
                <FormInput label={`${t('Email')} *`} name='email' type='email' />
                <ErrorMessage name='email' />
              </div>
            </div>
            <div className='flex sm:gap-[20px] lg:gap-[40px] flex-wrap'>
              <div className='lg:w-[47%] xl:w-[48.2%] sm:w-full md:w-[48.2%]'>
                <FormInput
                  label={`${t('Phone_number')} *`}
                  name='phone'
                  type='phone'
                />
                <ErrorMessage name='phone' />
              </div>
              <div className='lg:w-[47%] xl:w-[48.2%] sm:w-full md:w-[48.2%]'>
                <FormInput
                  label={`${t('Contacting_us')} *`}
                  name='contacting'
                  type='contacting'
                />
                <ErrorMessage name='contacting' />
              </div>
            </div>
            <FormInput
              label={`${t('Defined_budget')} *`}
              name='budget'
              type='budget'
            />
            <ErrorMessage name='budget' />
            <FormInput
              label={t('Your_budget')}
              name='menssage'
              type='menssage'
            />
            <ErrorMessage name='message' />
            <div className='sm:pt-[35px] md:pt-[42px] flex justify-end pb-[10px]'>
              <FormButton />
            </div>
          </div>
        </>
      </Form>
    </div>
  )
}
