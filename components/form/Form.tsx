import * as React from 'react'
import { Formik, type FormikConfig, type FormikValues } from 'formik'

export default function Form (props: FormikConfig<FormikValues> & any) {
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      {...props}
    >
      {() => (props.children)}
    </Formik>
  )
}
