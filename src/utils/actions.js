'use server'
// Global server actions
export async function makeApiRequest(requestOptions) {

  try {
    let payload = requestOptions.payload
    const method = requestOptions.method
    const redirect = requestOptions.redirect || 'follow'
    const token = requestOptions.token || null
    const url = requestOptions.url
    
    const headers = {
      ...(requestOptions.headers || {'Content-Type':'application/json'}),
      ...(token ? {'Authorization': `Bearer ${token}`} : {})
    }

    if (payload instanceof FormData){
      delete headers['Content-Type']
    }

    if (['POST', 'PUT'].includes(method.toUpperCase()) && !(payload instanceof FormData)){
      payload = JSON.stringify(payload)
    }

    const options = {
      method: method,
      headers: headers,
      redirect: redirect,
      body: payload
    }

    const response = await fetch(url, options)
    
    return response

  } catch (error) {
    console.error('Error during the fetch operation:', error)
    throw error
  }
}

export async function getToken() {
  let ret = {
    success: null,
    data: null,
    error: null
  }

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
  const data = await response.text()
  if (!response.ok){
    ret.success = false
    ret.error = JSON.parse(data)
  }

  if (response.ok){
    ret.success = true
    ret.data = JSON.parse(data)
  }
  
  return ret
}


export async function getListOfBranches(token) {
  let ret = {
    success: null,
    data: null,
    error: null
  }

  const requestOptions = {
    url: `${ process.env.CPL_API_DEV }/api/ProgramRegistration/branches`,
    method: 'GET',
    token: token
  }

  const response = await makeApiRequest(requestOptions)
  const data = await response.text()
  if (!response.ok){
    ret.success = false
    ret.error = JSON.parse(data)
  }
  if (response.ok){
    ret.success = true
    ret.data =JSON.parse(data)
  }
  
  
  return ret
}
// end of global server actions 

// Form actions
export async function requestArtExhibit(payload) {
  let ret = {
    success: null,
    data: null,
    error: null
  }
  const requestSettings = {
    url: process.env.ART_EXHIBIT_LOGICAPP_URL,
    method: 'POST',
    payload: payload,
  }

  const response = await makeApiRequest(requestSettings)
  console.log(response)
  // return ret
}