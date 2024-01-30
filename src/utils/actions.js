'use server'

export async function makeApiRequest(requestOptions) {
  try {
    const url = requestOptions.url;
    const method = requestOptions.method;
    const payload = requestOptions.payload;
    const headers = requestOptions.headers || { 'Content-Type': 'application/json' };
    const redirect = requestOptions.redirect || 'follow';
    const token = requestOptions.token || null;

    // If a token is provided, add it to the headers
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const options = {
      method: method,
      headers: headers,
      redirect: redirect,
    };

    // Add body if method is POST or PUT
    if (['POST', 'PUT'].includes(method.toUpperCase())) {
      options.body = JSON.stringify(payload);
    }

    const response = await fetch(url, options);
    const result = await response.text();

    // Check if the response was not ok
    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`);
    }
    return result;
  } catch (error) {
    console.error('Error during the fetch operation:', error);
    throw error;
  }
}

export async function reaquestArtExhibit(payload) {
  const method = ''
  const headers = ''
  const ret = await makeApiRequest(process.env.ART_EXHIBIT_LOGICAPP_URL, method, payload, headers)
  console.log(ret)
  return ret
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