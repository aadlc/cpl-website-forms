'use server'


export async function makeApiRequest(requestOptions) {
  let ret
  try {
    const url = requestOptions.url
    const method = requestOptions.method
    const body = requestOptions.body
    const headers = requestOptions.headers || { 'Content-Type': 'application/json' }
    const redirect = requestOptions.redirect || 'follow'
    const token = requestOptions.token || null

   
    
    // If a token is provided, add it to the headers
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const options = {
      method: method,
      headers: headers,
      redirect: redirect,
    }
  
   // Adjust this condition to handle FormData payloads appropriately
    if (body instanceof FormData)
    {

     delete headers['Content-Type'] // Let the browser set it
     options.body = body
    }
    //  else if (['POST', 'PUT'].includes(method.toUpperCase()))
    //  {
      //   options.body = JSON.stringify(payload);
      // }
      
    

    const response = await fetch(url, options)
    // Check if the response was not ok
    if (!response.ok) {
      const resultError = await response.text()
    }

    if (response.ok){
      ret = await response.text()
      
    }

    return ret
  } catch (error) {
    console.error('Error during the fetch operation:', error)
    throw error
  }
}



export async function getListOfBranches(token) {

  const requestOptions = {
    url: `${ process.env.CPL_API_DEV }/api/ProgramRegistration/branches`,
    method: 'GET',
    token: token
  }

  const response = await makeApiRequest(requestOptions)
  return JSON.parse(response)
}

export async function getToken() {
  const payload = {
    "username": process.env.CPL_API_DEV_USERNAME,
    "password": process.env.CPL_API_DEV_PASSWORD
  }

  const requestOptions = {
    url: `${ process.env.CPL_API_DEV }/api/Authentication`,
    method: 'POST',
    payload: payload
  }

  const response = await makeApiRequest(requestOptions)
  return JSON.parse(response)[0].token
}


// Form actions

export async function requestArtExhibit(payload) {

  const requestSettings = {
    url: process.env.ART_EXHIBIT_LOGICAPP_URL,
    method: 'POST',
    body: payload,
  }

  const ret = await makeApiRequest(requestSettings)

  return ret
}