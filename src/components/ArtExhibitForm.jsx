'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
// import { useRouter, usePathname } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import RHFAutocomplete from '@components/RHFAutocomplete'
import RHFRadioGroup from '@components/RHFRadioGroup'
import RHFTextField from '@components/RHFTextField'
import RHFUploadField from '@components/RHFUploadField'
import { requestArtExhibit } from '@utils/actions'
// import { buildFormData } from '@utils/helpers'
import {
  ACCEPTED_FILE_EXTENSIONS,
  APPLICANT_TYPES,
  DISABLED_BRANCH_CODES,
  FORM_DEFAULT_VALUES,
  VALIDATION_SCHEMA
} from '@forms/art-exhibit-form/formSettings.js'
// import { STR_FAILED, STR_SUCCESS } from '@utils/dictionary'
import { Button } from '@mui/material'


export default function ArtExhibitForm({ locations }) {
  // const router = useRouter()
  // const currentPath = usePathname()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: FORM_DEFAULT_VALUES,
    shouldUnregister: true,
    resolver: yupResolver(VALIDATION_SCHEMA)
  })
  
  const submit = async (data) => {
    const { attachments, ...FormFields } = data
    const multipartFormdata = new window.FormData()
    multipartFormdata.append('file1', attachments[0], attachments[0].name)
    multipartFormdata.append('file2', attachments[1], attachments[1].name)
    multipartFormdata.append('file3', attachments[2], attachments[2].name)
    multipartFormdata.append('formFields', JSON.stringify(FormFields))
    // const formObject = buildFormData(attachments,FormFields)
    // const { formData, errors } = formObject
    
    // if (errors.length > 0 ){
    //   TODO: handle error from buildFormData()
    //   console.log('error in form data', errors)
    // }
    
    const response = await requestArtExhibit(multipartFormdata)
    // console.log('response.success!!!:', response.success )
    // if (response.success)
    // {
    //   // console.log(`${currentPath}/${STR_SUCCESS}`)
    //   // router.push(`${currentPath}/${STR_SUCCESS}`)
    // } else {
    //   // router.push(`${currentPath}/${STR_FAILED}`)

    // }
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
        options={APPLICANT_TYPES}
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
          option.branchCode === DISABLED_BRANCH_CODES.find(location => location === option.branchCode))}
        control={control}
        options={locations}
        optionLabelKey='name'
        optionValueKey='branchCode'
        error={!!errors.Library_Branch}
        helperText={errors?.Library_Branch?.message}
      />
      <RHFUploadField
        required
        fullWidth
        name='attachments'
        label='Please include three samples of your work'
        control={control}
        error={!!errors.attachments}
        helperText={errors?.attachments?.message}
        accept={ACCEPTED_FILE_EXTENSIONS}
      />
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
