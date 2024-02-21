import React from 'react'
import Button from '@mui/material/Button'
import { Controller } from 'react-hook-form'
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel
} from '@mui/material'

import PhotoIcon from '@mui/icons-material/Photo'
const UploadFile = ({ accept, control, helperText, label, name, ...rest }) => {

  return (
    <Box sx={{ mt: 2 }}>
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <FormControl {...rest}>
            <FormLabel component="legend" sx={{ mb: 1 }}>
              {label}
            </FormLabel>
            <label htmlFor="contained-button-file">
              <input
                accept={accept}
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => {
                  field.onChange(e.target.files)
                }}
              />
              <Button
                variant="outlined"
                component="span"
                size="small"
                endIcon={<PhotoIcon />}
              >
                Choose files
              </Button>
            </label>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        )}
      />
    </Box>
  )
}

export default UploadFile
