import React from 'react'
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

const TextFieldCustom = ({ name, control, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        <TextField
          {...rest}
          {...field}
          variant='outlined'
          margin='normal'
        />}
    />
  )
}

export default TextFieldCustom