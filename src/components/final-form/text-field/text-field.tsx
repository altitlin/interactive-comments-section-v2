import React, { FC, ComponentProps } from 'react'
import { useField } from 'react-final-form'
import { TextField } from '@mui/material'

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
