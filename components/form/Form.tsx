/* eslint-disable no-undef */
/* eslint-disable react/jsx-fragments */
import * as React from 'react'
import { Formik } from 'formik'

export default function Form ({ children, ...props }): JSX.Element {
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      {...props}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  )
}
