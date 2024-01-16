import * as React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import { Controller } from 'react-hook-form'

const RadioGroupCustom = ({ options, name, label, error, helperText, required, control, row }) => {
  return (
    <Box mt={2} mb={1}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl
            error={error}
            component='fieldset'
          >
            <FormLabel component='legend' required={required}>{label}</FormLabel>
            <RadioGroup row={row} {...field}>
              {
                options.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index + item}
                      value={item.code}
                      control={
                        <Radio
                          name={item.name}
                          onChange={(e) => e.target.name}
                        />
                      }
                      label={item.name}
                    />
                  )
                })
              }
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        )}
      />
    </Box>
  )
}

export default RadioGroupCustom