'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import RHFRadioGroup from '@components/RHFRadioGroup'
import RHFTextField from '@components/RHFTextField'
import {
  applicantTypes,
  defaultValues,
  disabeledLocations,
  locations,
  schema,
} from './formSettings'
import { Button } from '@mui/material'
import RHFAutocomplete from '@components/RHFAutocomplete'

const ArtExhibitForm = () => {
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

  const submit = (data)=> console.log(data)
  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(submit)}>
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
          option.Code === disabeledLocations.find(location => location === option.Code))}
        control={control}
        options={locations}
        optionLabelKey='Name'
        optionValueKey='Code'
        error={!!errors.Library_Branch}
        helperText={errors?.Library_Branch?.message}
      />
        <p>UP LOAD FILE</p>
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
        Hello
      </Button>
    </form>
  )
}

export default ArtExhibitForm