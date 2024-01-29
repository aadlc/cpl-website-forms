import React, { useState, Fragment } from 'react'
import Button from '@mui/material/Button'
import { Controller } from 'react-hook-form'
import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import AttachFile from '@mui/icons-material/AttachFile'
import PhotoIcon from '@mui/icons-material/Photo'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
const FileList = ({ list }) => {
  
  return (
    <List dense sx={{ mb: 2 }}>
      {
        Object.keys(list).map((file, index) => (
          <Fragment key={list[file].name}>
            <ListItem
              secondaryAction={
                <IconButton edge='end' aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemIcon>
                <AttachFile />
              </ListItemIcon>
              <ListItemText primary={list[file].name} />
            </ListItem>
            {index < list.length - 1 && <Divider />}
          </Fragment>
        ))
      }
    </List>
  )
}

const UploadFile = ({ accept, control, helperText, label, name, ...rest }) => {
  const [fileList, setFileList] = useState([])
  return (
    <Box sx={{ mt: 2 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl {...rest}>
            <FormLabel component='legend' sx={{ mb: 1 }}>{label}</FormLabel>
            <label htmlFor='contained-button-file'>
              <input
                style={{ display: 'none' }}
                accept={accept}
                id='contained-button-file'
                multiple
                type='file'
                onChange={(e) => {
                  field.onChange(e.target.files)
                  setFileList(e.target.files)
                }}
              />
              {
                fileList.length > 0 ? <FileList list={fileList} /> : null
              }
              <Button
                variant='outlined'
                component='span'
                size='small'
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