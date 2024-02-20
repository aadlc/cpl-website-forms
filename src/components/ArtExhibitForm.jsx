'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import RHFRadioGroup from '@components/RHFRadioGroup'
import RHFTextField from '@components/RHFTextField'
import RHFUploadField from '@components/RHFUploadField'
import {reaquestArtExhibit} from '@utils/actions'
import {
  ACCEPT_FILE_LIST,
  applicantTypes,
  defaultValues,
  disabeledLocations,
  schema,
} from '@forms/art-exhibit-form/formSettings.js'
import { Button } from '@mui/material'
import RHFAutocomplete from '@components/RHFAutocomplete'


export default function ArtExhibitForm({ locations }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: defaultValues,
    shouldUnregister: true,
    resolver: yupResolver(schema)
  })
  
  const submit = async (data) => {
    const result = await reaquestArtExhibit(data)
  }
  
  return (
    <form onSubmit={handleSubmit(submit)} noValidate autoComplete='off'>
      <RHFTextField
        required
        fullWidth
        name='Artist_Name'
        label="Artist's full name"
        control={control}
        error={!!errors.Artist_Name}
        helperText={errors?.Artist_Name?.message}
      />
      <RHFTextField
        required
        fullWidth
        name='Artist_Address'
        label="Artist's address"
        control={control}
        error={!!errors.Artist_Address}
        helperText={errors?.Artist_Address?.message}
      />
      <RHFTextField
        required
        fullWidth
        name='Phone'
        label="Artist's phone number"
        control={control}
        error={!!errors.Phone}
        helperText={errors?.Phone?.message}
      />
      <RHFTextField
        required
        fullWidth
        name='Email'
        label='Email'
        control={control}
        error={!!errors.Email}
        helperText={errors?.Email?.message}
      />
      <RHFRadioGroup
        required
        fullWidth
        name='Applicants'
        label='Number of applicants'
        control={control}
        options={applicantTypes}
        error={!!errors.Applicants}
        helperText={errors?.Applicants?.message}
      />
      <RHFTextField
        multiline
        rows={6}
        required
        fullWidth
        name='Statement'
        label="Artist's statement"
        control={control}
        error={!!errors.Statement}
        helperText={errors?.Statement?.message}
      />
      <RHFAutocomplete
        required
        fullWidth
        name='Library_Branch'
        label='At which Library location would you like to exhibit your work?'
        getOptionDisabled={(option)=>(
          option.branchCode === disabeledLocations.find(location => location === option.branchCode))}
        control={control}
        options={locations}
        optionLabelKey='name'
        optionValueKey='branchCode'
        error={!!errors.Library_Branch}
        helperText={errors?.Library_Branch?.message}
      />
      {/* <RHFUploadField
        required
        fullWidth
        name='attachements'
        label='Please include three samples of your work'
        control={control}
        error={!!errors.attachements}
        helperText={errors?.attachements?.message}
        accept={ACCEPT_FILE_LIST}
      /> */}
      <RHFTextField
        fullWidth
        name='Additional_Links'
        label='Link to Artist social media channels'
        control={control}
        error={!!errors.Additional_Links}
        helperText={errors?.Additional_Links?.message}
      />
      <Button
        color='secondary'
        label='Submit'
        size='large'
        type='submit'
        variant='contained'
      >
        Submit
      </Button>
    </form>
  )
}
