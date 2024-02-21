'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { requestArtExhibit } from '@utils/actions'

function Form() {
  const {
    handleSubmit,
    register
  } = useForm({
    mode: 'all',
    shouldUnregister: true,
  })

  const submit = async (data) => {
    const { attachements, ...FormFields } = data
    const multipartFormdata = new window.FormData()
    multipartFormdata.append('file1', attachements[0], attachements[0].name)
    multipartFormdata.append('file2', attachements[1], attachements[1].name)
    multipartFormdata.append('file3', attachements[2], attachements[2].name)
    multipartFormdata.append('formFields', JSON.stringify(FormFields))
    const result = await requestArtExhibit(multipartFormdata)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor='Artist_Name'>Artist full name</label><br />
        <input type='text' {...register('Artist_Name')} value='Alfonzo'/>
        <br />
        <br />
        <label htmlFor='Artist_Address'>Artist adress</label><br />
        <input type='text' {...register('Artist_Address')} value='my Street SW'/>
        <br />
        <br />
        <label htmlFor='Phone'>Artis phone number</label><br />
        <input type='text' {...register('Phone')} value='4034555555'/>
        <br />
        <br />
        <label htmlFor='Email'>Email</label><br />
        <input type='text' {...register('Email')} value='alfonzo.angulodelacruz@calgarylibrary.ca'/>
        <br />
        <br />
        <p>Artis group</p>
        <label htmlFor='Solo artist'>Solo artist</label>
        <input type='radio' {...register('Applicants')} checked/>
        <br/>
        <label htmlFor='Artist group'>Artist group</label>
        <input type='radio' {...register('Applicants')}/>
        <br />
        <br />
        <label htmlFor='Statement'>Artist statement</label><br />
        <textarea type='text' name='Statement' rows='5' cols='33' value='hello from local' {...register('Statement')}/>
        <br />
        <br />
        <label htmlFor='Library_Branch'>Choose a branch:</label><br />
        <select {...register('Library_Branch')} value='CENT'>
          <option value='CENT'>Central</option>
          <option value='Bowness'>Bowness</option>
          <option value='Southwood'>South wood</option>
        </select>
        <br/>
        <br />
        <p>Attachment</p>
        <input type='file' multiple {...register('attachements')} />
        <br/>
        <br/>
        <label htmlFor='Additional_Links'>Link to artist social media</label><br />
        <input type='text' {...register('Additional_Links')} value='my url'/>
        <br />
        <br />
        <input type="submit" value="Send Request" />
      </form>
    </>
  )
}

export default Form