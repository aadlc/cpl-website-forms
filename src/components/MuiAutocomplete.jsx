import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Autocomplete,
  TextField
} from '@mui/material'

const MuiAutocomplete = ({ disableBranch, control, name, ...rest }) => {
  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' }
  ]

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onChange, value, ref} = field
          return (
            <Autocomplete
              value={
                value
                  ? options.find((option) => {
                    return value === option.id
                  }) ?? null
                  : null}
              onChange={(event, newValue) => {
                onChange(newValue ? newValue.id : null)
              }}
              getOptionLabel={(option) => (option.label ?? option)}
              options={options}
              renderInput={(params) => (
                <TextField
                  inputRef={ref}
                  {...rest}
                  {...params}
                  margin='normal'
                />
              )}
            />
          )
      }}
    />
  )
}

export default MuiAutocomplete