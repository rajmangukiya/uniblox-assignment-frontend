const baseURL = import.meta.env.VITE_API_URL

const getUrl = (endpoint: string) => {
  return `${baseURL}/api/v1/${endpoint}`
}

const getAPI = async (endpoint: string) => {
  const url = getUrl(endpoint)
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  return response
}

const postAPI = async (endpoint: string, data: any) => {
  const url = getUrl(endpoint)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })

  return response
}

export { getAPI, postAPI }