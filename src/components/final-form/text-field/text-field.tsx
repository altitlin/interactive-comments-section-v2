import React, { FC, ComponentProps } from 'react'
import { TextField } from '@mui/material'
import { useField } from 'react-final-form'

type FinalFormTextFieldProps = ComponentProps<typeof TextField>

export const FinalFormTextField: FC<FinalFormTextFieldProps> = ({
  name,
  ...rest
}) => {
  const { input } = useField(name as string)

  return (
    <TextField {...input} {...rest} />
  )
}
