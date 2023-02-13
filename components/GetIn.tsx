import React from 'react'
import { useTranslation } from 'react-i18next'
import Form from './form/Form'
import FormInput from './form/FormInput'

type Props = {}

export default function GetIn ({}: Props) {
  const { t } = useTranslation()
  return (
    <Form
      initialValues={{
        name: '',
        phone: '',
        email: '',
        contacting: '',
        budget: '',
        menssage: ''
      }}
    >
      <div className=' w-full bg-white rounded px-4 py-[20px] sm:space-y-[20px]' >
        <FormInput label={t('name')} name='name' type='name' />
      </div>
    </Form>
  )
}
